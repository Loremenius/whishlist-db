// AuthorizeAdminAction is a function takes the decrypted token and checks to see if the admin flag is set to true.
// If the token is flagged as admin: allow the request to move forward.
// If the token is not flagged as admin: respond saying the user is not authorized to make action.
module.exports = (req, res, next) => {
    // console log to show function is starting.
    // if the user id stored in the token is the same as the user id in paramers of request
    if ( req.token.admin === true ){
        // console log user allowed to make request and send them to next function.
        console.log( 'user is authorized for admin actions' );
        next();
    // if the ids are not the same
    } else {
        // console log user not allowed to make request and send response with message.
        console.log( 'user is not authorized for admin actions' );
        res.status('500').json( { message:`user is not allowed use admin actions.` } );
    }
}