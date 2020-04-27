const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const userDb = require('./user-model')
const validateLogin = require('../middleware/ValidateLogin');
const ValidateRegister = require('../middleware/ValidateRegister')

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

router.post('/register', ValidateRegister, (req,res)=>{
    req.body.username = req.body.username.toLowerCase();
    req.body.password = bcrypt.hashSync(req.body.password,8);
    userDb.createUser(req.body)
        .then(data=>{
            console.log("insert success",data)
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