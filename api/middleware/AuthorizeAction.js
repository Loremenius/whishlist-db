// AuthorizeAction is a function takes the decrypted token and compares the id stored in the token with the id in the parameters.
// If the two ids are the same: allow the request to move forward.
// If the ids are not the same: respond sayinf the user is not authorized to make action.
module.exports = (req, res, next) => {
    // console log to show function is starting.
    console.log( 'Authorizing user to edit list.' );
    // if the user id stored in the token is the same as the user id in paramers of request
    if ( req.token.id === parseInt( req.params.id ) ){
        // console log user allowed to make request and send them to next function.
        console.log( 'user is authorized to edit list' );
        next();
    // if the ids are not the same
    } else {
        // console log user not allowed to make request and send response with message.
        console.log( 'user is not allowed to edit list' );
        res.status('500').json( { message:`user is not allowed to edit list of user:${req.params.id}` } );
    }
}