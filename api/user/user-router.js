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
            console.log(data);
            // if there is data and the password in request body is the same to the password in the database.
            // the password given is not hashed but the one in the database is. 
            // uses bcrypt.compareSync function to compare the unhashed passwor"d and hashed password ( returns boolean )
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
        .catch( error => {
            console.log( error );
            res.status(500).json({
                error:error,
                message:'error logging in user'
            });
        })
})
// This route is used to register a new user to the website.
// uses ValidateRegister middleware to verify request body has correct information for registering.
// uses FindUserByUsername to ensure the new user request is using a unique username.
router.post('/register', ValidateRegister, FindUserByUsername, ( req, res ) => {
    // takes username and makes all characters lowercase
    req.body.username = req.body.username.toLowerCase();
    // takes password and hashes it to be stored in database
    req.body.password = bcrypt.hashSync( req.body.password, 8 );
    // uses SQL query to add user to the database. 
    userDb.createUser( req.body )
        // if the SQL query is successful
        .then( data => {
            // if there is data returned from the query
            if( data ){
                // respond with message saying user creation was successful
                res.status(201).json( { message:"User created sucessfully!" } );
            }
        })
        // if there is an error retrieving from database: log error in console and send response back with error and errorMessage.
        .catch( error => {
            console.log( error );
            res.status(500).json({
                error:error,
                errorMessage: 'error creating user'
            });
        })
});
// This route is used to get all users organized by lastname.
router.get('/families', ( req, res ) => {
    // uses SQL query to retrieve all users in the database. 
    userDb.getUsers()
        // if the SQL query is successful
        .then( data => {
            // creates an empty object.
            const families = {};
            // loops through all users retrieved 
            data.forEach( ( user ) => {
                // if the user's last name is not a key in the families object
                if( user.lastname in families === false ){
                    // adds lastname as a key. Under the key adds an object
                    // object includes name ( string of the lastname of the user ) and members ( array of users with this lastname )
                    families[user.lastname] = {
                        name:user.lastname,
                        members:[ user ]
                    }
                // if the user's last name is already a key in the families object
                } else {
                    // add user to the members array to the respective key in families object.
                    families[user.lastname].members = [ ...families[user.lastname].members,user ] 
                }
            })
            // after looping through data and adding users to families object
            // respond with families object
            res.status(200).json( families );
        })
        // if there is an error retrieving from database: log error in console and send response back with error and errorMessage.
        .catch( error => {
            console.log( error );
            res.status(500).json({
                error:error,
                errorMessage:'Error getting list of users'
            })
        })
});
// this route retrieves all users under a specific lastname.
router.get('/families/:name', ( req, res ) => {
    // uses SQL query to retrieve all users with lastname in request parameters
    userDb.getFamilyUsers( req.params.name )
        // if the SQL query is successful 
        .then(data=>{
            // if the length of the array from the SQL query is 0
            if (data.length === 0){
                // respond with error message saying there are no users with lastname
                res.status(404).json({
                    message:`No users with lastname: ${req.params.name}`
                });
            // if there are users in the array from query.
            } else {
                // respond with data from SQL query
                res.status(200).json(data)
            }
        })
        // if there is an error retrieving from database: log error in console and send response back with error and errorMessage.
        .catch( error => {
            console.log( error );
            res.status(500).json({
                error:error,
                errorMessage:'Error getting list of users'
            })
        })
});


// function to create a token for successful login. takes in user object.
function signToken(user) {
    // object with user's username and id
    const payload = {
      username: user.username,
      id: user.id, 
    };
    // string that uses environment variable if availible or uses 'Santa's Little Helper'
    const secret = process.env.JWT_SECRET || "Santa's Little Helper";
    // object for options of the token. 
    // sets expiration of the token to 1 hour.
    const options = {
      expiresIn: "1h",
    };
    // uses jsonwebtoken.sign to create token with given variables and returns token.
    return jwt.sign(payload, secret, options); 
  };

module.exports = router;