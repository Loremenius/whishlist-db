// This function is used for making sure the body of the login request has the correct values.
module.exports = (req, res, next) => {
    // console log to show function is starting.
    console.log('checking for valid user in req body');
    // if there is nothing in the request body
    if( Object.entries(req.body).length === 0 ) {
            // respond with message sying there is missing data in request body.
            res.status(400).json({ message: "missing user data in request body" });
        // if the username or password is empty.
        } else if ( !req.body.username || !req.body.password ) {
            // respond with message saying missing username or password. 
            res.status(400).json({ message: "missing username and password in request body" });
        // if everything for login is correct.
        } else {
            // send request to next function.
            next();
        }
}