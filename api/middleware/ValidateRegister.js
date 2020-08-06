// This function is used for making sure the body of the register request has the correct values.
module.exports = (req, res, next) => {
    // console log to show function is starting.
    console.log('checking for valid user in req body');
    // if there is nothing in the request body
    if(Object.entries(req.body).length === 0){
            // respond with message sying there is missing data in request body.
            res.status(400).json({ message: "missing user data in request body" });
        // if username, password, firstname, or lastname is empty.
        } else if ( !req.body.username || !req.body.password || !req.body.firstname || !req.body.lastname ) {
            // respond with message saying missing username, password, firstname, or lastname. 
            res.status(400).json({ message: "missing username, password, firstname, and lastname in request body" });
        // if everything for register is correct.
        } else {
            // send request to next function.
            next();
        }
}