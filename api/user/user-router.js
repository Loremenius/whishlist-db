const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const userDb = require('./user-model')
const validateLogin = require('../middleware/ValidateLogin');
const ValidateRegister = require('../middleware/ValidateRegister');
const FindUserByUsername = require('../middleware/FindUserByUsername');

router.post('/login', validateLogin, (req, res)=>{
    req.body.username = req.body.username.toLowerCase();
    userDb.findByName(req.body.username)
        .then(data=>{
            if( data && bcrypt.compareSync(req.body.password, data.password) ){
                const token = signToken(data);
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
            }else{
                res.status(401).json({message:'Invalid Credentials'})
            }
        })
        .catch(error=>{
            console.log(error);
            res.status(500).json({
                error:error,
                message:'error logging in user'
            })
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