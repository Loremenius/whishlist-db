const express = require('express');
const router = express.Router();


const userDb = require('./admin-model')

 router.delete('/:username', (req, res)=>{
     userDb.removeUser( req.params.username )
     // if the SQL query is successful 
     .then(data=>{
         // if the length of the array from the SQL query is 0
         if (data.length === 0){
             // respond with error message saying there are no users with lastname
             res.status(404).json({
                 message:`No users with username: ${req.params.username}`
             });
         // if there are users in the array from query.
         } else {
             // respond with data from SQL query
             res.status(200).json("User Delted Successfully")
         }
     })
     // if there is an error retrieving from database: log error in console and send response back with error and errorMessage.
     .catch( error => {
         console.log( error );
         res.status(500).json({
             error:error,
             errorMessage:'Error removing user'
         })
     })
 })

 // This route is used to retrive an array of all the gifts of a users for backup purposes.
router.get('/users',( req, res ) => {
    // uses SQL query to retrieve data with given user id.
    userDb.getUsersAll( req.params.id )
        // if there the data variable is an array: respond with this array.
        .then( data => {
            res.status(200).json( data )
        })
        // if there is an error retrieving from database: log error in console and send response back with error and errorMessage.
        .catch( error => {
            res.status(500).json({
                error:error,
                message:'error getting list of all users'
            });
        })
});

 // This route is used to retrive an array of all the gifts for backup purposes.
router.get('/gifts',( req, res ) => {
    // uses SQL query to retrieve data with given user id.
    userDb.getGiftsAll( req.params.id )
        // if there the data variable is an array: respond with this array.
        .then( data => {
            res.status(200).json( data )
        })
        // if there is an error retrieving from database: log error in console and send response back with error and errorMessage.
        .catch( error => {
            res.status(500).json({
                error:error,
                message:'error getting list of all gifts'
            });
        })
});

module.exports = router;