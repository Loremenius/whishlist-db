const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const userDb = require('./user-model')
const ValidateLogin = require('../middleware/ValidateLogin');
const ValidateRegister = require('../middleware/ValidateRegister');
const FindUserByUsername = require('../middleware/FindUserByUsername');
// This route is used to login the user to the website.
// uses ValidateLogin middleware to verify request body has correct information for login.
router.post('/login', ValidateLogin, ( req, res ) => {
    // takes username and makes all characters lowercase
    req.body.username = req.body.username.toLowerCase();
    // uses SQL queries to find the user with given username.
    userDb.findByName(req.body.username)
        // if the SQL query is successful
        .then( data => {
            // if there is data and the password in request body is the same to the password in the database.
            // the password given is not hashed but the one in the database is. 
            // uses bcrypt.compareSync function to compare the unhashed password and hashed password ( returns boolean )
            if( data && bcrypt.compareSync(req.body.password, data.password) ){
                // uses signToken function to create a token. ( takes in data from SQL query )
                const token = signToken(data);
                // responds with object containing welcome message, object of logging in user's data, and the token
                res.status(200).json({
                    message:`Welcome ${data.username}`,
                    user:{
                        username:data.username,
                        firstname:data.firstname,
                        lastname:data.lastname,
                        user_id:data.id
                    },
                    token:token
                });
            // if there is no data or the passwords do not match
            }else{
                // respond with error message saying the credentials are invalid.
                res.status(401).json( { message:'Invalid Credentials' } );
            }
        })
        // if there is an error retrieving from database: log error in console and send response back with error and errorMessage.
        .catch(error=>{
            console.log(error);
            res.status(500).json({
                error:error,
                message:'error logging in user'
            });
        })
})

router.post('/register', ValidateRegister, FindUserByUsername, (req,res)=>{
    req.body.username = req.body.username.toLowerCase();
    req.body.password = bcrypt.hashSync(req.body.password,8);
    userDb.createUser(req.body)
        .then(data=>{
            if(data){
                res.status(201).json({message:"User created sucessfully!"});
            }
        })
        .catch(error=>{
            console.log(error);
            res.status(500).json({
                error:error,
                errorMessage: 'error creating user'
            });
        })
});

router.get('/families', (req,res)=>{
    userDb.getUsers()
        .then(data=>{
            const families = {};
            data.forEach((user)=>{
                if(user.lastname in families === false){
                    families[user.lastname] = {
                        name:user.lastname,
                        members:[ user ]
                    }
                }else{
                    families[user.lastname].members = [ ...families[user.lastname].members,user ] 
                }
            })
            res.status(200).json(families)
        })
        .catch(error=>{
            console.log(error);
            res.status(500).json({
                error:error,
                errorMessage:'Error getting list of users'
            })
        })
});

router.get('/families/:name', (req,res)=>{
    userDb.getFamilyUsers(req.params.name)
        .then(data=>{
            if (data.length === 0){
                res.status(404).json({
                    message:`No users with lastname: ${req.params.name}`
                });
            }else{
                res.status(200).json(data)
            }
        })
        .catch(error=>{
            console.log(error);
            res.status(500).json({
                error:error,
                errorMessage:'Error getting list of users'
            })
        })
});



function signToken(user) {
    const payload = {
      username: user.username,
      id: user.id, 
    };
  
    const secret = process.env.JWT_SECRET || "Santa's Little Helper";
  
    const options = {
      expiresIn: "1h",
    };
  
    return jwt.sign(payload, secret, options); 
  };

module.exports = router;