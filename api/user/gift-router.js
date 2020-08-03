const express = require( 'express' );
const router = express.Router();
const bcrypt = require( 'bcryptjs' );

const userDb = require( './user-model' )

const AuthorizeAction = require( '../middleware/AuthorizeAction' );
const VerifyGift = require( '../middleware/VerifyGift' );

// This route is used to update the user's information
// uses AuthorizeAction middleware to verify the user can make changes to the user with id in the request route.
router.put('/:id', AuthorizeAction, ( req, res ) => {
    // changes the username in the body request to all lowercase characters.
    req.body.username = req.body.username.toLowerCase();
    // hashes the password in the body request.
    req.body.password = bcrypt.hashSync( req.body.password, 8 );
    // sends request body to database to update user.
    userDb.editUser( req.body )
        // if update is successful: send response with message saying the update was a success.
        .then( data=>{
            console.log( "update success" , data );
            if( data ){
                res.status(201).json( { message:"User updated sucessfully!" } );
            }
        })
        // if there is an error log error in console and send response back with error and errorMessage.
        .catch(error=>{
            console.log(error);
            res.status(500).json({
                error:error,
                errorMessage: 'error creating user'
            });
        })
});
// This route is used to retrieve user id, first, and last name with a given username.
router.get( '/:username' , ( req, res ) => {
    // uses SQL query to retrieve data with given username
    userDb.findByName(req.params.username.toLowerCase())
        // retrieval of data was successful
        .then(data=>{
            // if data is NOT undefined
            if(data){
                // return response with data: consists of object with id, firstname, lastname
                res.status(200).json(data);
            // if the data is undefined
            }else{
                // return response with message saying there is no user with that username.
                res.status(404).json( { message:"No user by that username" } );
            }
        })
        // if there is an error retrieving from database: log error in console and send response back with error and errorMessage.
        .catch( error => {
            console.log( error );
            res.status(500).json({
                error:error,
                errorMessage: 'error finding user'
            });
        })
});
// This route is used to retrive an array of all the gifts of a user's wishlist.
router.get('/:id/list',(req,res)=>{
    // uses SQL query to retrieve data with given user id.
    userDb.getUserList(req.params.id)
        // if there the data variable is an array: respond with this array.
        .then(data=>{
            res.status(200).json(data)
        })
        // if there is an error retrieving from database: log error in console and send response back with error and errorMessage.
        .catch(error=>{
            res.status(500).json({
                error:error,
                message:`error getting list for user:${req.params.id}`
            });
        })
});
// This route is used to retrieve a gift
// uses VerifyGift Middleware to check for gift and retrive gift from database
router.get('/list/:gift_id', VerifyGift, (req,res)=>{
    // sends response with found gift from VerifyGift Middleware
    res.status(200).json(req.gift)
});

router.post('/:id/list', AuthorizeAction, (req,res)=>{
    userDb.addGift(req.body)
        .then(data=>{
            console.log("insert success",data)
            if(data){
                res.status(201).json({message:"Gift created sucessfully!"});
            }
        })
        .catch(error=>{
            console.log(error);
            res.status(500).json({
                error:error,
                errorMessage: 'error creating gift'
            });
        })
});

router.put('/:id/list/:gift_id',AuthorizeAction,  VerifyGift, (req,res)=>{
    userDb.updateGift(req.body, req.params.gift_id)
        .then(data=>{
            if(data > 0){
                res.status(200).json({message:'Gift updated'})
            }else{
                res.status(404).json({message:`No gift found with id: ${req.params.gift_id}`})
            }
        })
        .catch(error=>{
            res.status(500).json({
                error:error,
                message:`error updating gift with id:${req.params.gift_id}`
            });
        })
});

router.put('/:id/list/:gift_id/purchased',VerifyGift, (req,res)=>{
    userDb.markPurchased(req.params.gift_id)
        .then(data=>{
            if(data > 0){
                res.status(200).json({message:'Gift updated'})
            }else{
                res.status(404).json({message:`No gift found with id: ${req.params.gift_id}`})
            }
        })
        .catch(error=>{
            res.status(500).json({
                error:error,
                message:`error updating gift with id:${req.params.gift_id}`
            });
        })
});

router.delete('/:id/list/:gift_id',AuthorizeAction, VerifyGift, (req,res)=>{
    userDb.deleteGift(req.params.gift_id)
        .then(data=>{
            if(data > 0){
                res.status(200).json({message:'Gift deleted'})
            }else{
                res.status(404).json({message:`No gift found with id: ${req.params.gift_id}`})
            }
        })
        .catch(error=>{
            res.status(500).json({
                error:error,
                message:`error deleting gift with id:${req.params.gift_id}`
            });
        })
});




module.exports = router;