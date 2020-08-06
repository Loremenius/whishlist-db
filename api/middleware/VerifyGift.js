const userDb = require('../user/user-model');
// This function is used to check if gift with given id from request exists in the database.
module.exports = ( req, res, next ) => {
    // console log to show function is starting.
    console.log('checking for valid gift with given id');
    // uses SQL query to find gift in database with given id from request.
    userDb.getGift(req.params.gift_id) 
        .then( data => {
            // if there is data returned
            if ( data ) {
                // add data to request object
                req.gift = data
                // send request to next function. 
                next();
            // if there is no data returned
            } else {
                // respond with message saying there is no gift with given id.
                res.status(404).json( { message:`No gift with id: ${req.params.gift_id}` } );
            }
        })
}