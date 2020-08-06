const jwt = require("jsonwebtoken"); 
// This function is used to verify that the request is using a valid token.
module.exports = ( req, res, next ) => {
  // pulls token from request header
  const { authorization } = req.headers;
  // console log to show function is starting.
  console.log(`checking for valid token`);
  // if authorization is not empty
  if ( authorization ) {
    // acquire secret used for tokens
    const secret = process.env.JWT_SECRET || "Santa's Little Helper";
    // use verify function from jsonwebtoken to verify the token from request.
    jwt.verify( authorization, secret, function(error, decodedToken ) {
      // if there was an error validating the token
      if ( error ) {
        // respond with message saying the token is invalid.
        res.status(401).json({ message: "Invalid Token" });
      // if the token is valid
      } else {
        // add the decoded token to the request object 
        req.token = decodedToken;
        // send request to next function. 
        next();
      }
    });
    // if there is no token
  } else {
    // respond with message saying they must login again.
    res.status(400).json({ message: "Please login and try again" });
  }
};