const db = require('../user/user-model');
// this function is used to check to see if there is a username already in the database
// if there is already a username in the database: respond saying username has been taken
// if it is not in the database already, send them to next function.
module.exports = (req, res, next) => {
    // console log to show function is starting.
    console.log( 'checking for existing user in database' );
    // uses SQL query to find user with given username
    db.findByName( req.body.username )
        .then( data => {
            // if there is data returned respond with message saying username is taken.
            if (!!data) res.status(400).json({ message:'Username has already been taken' });
            // if there is no data returned move to next function.
            else next();
        })
}