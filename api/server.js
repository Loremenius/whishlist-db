const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const user = require('./user/user-router');
const gift = require('./user/gift-router')

// imports middleware function to check for valid token from request header
const ValidateToken = require('./middleware/ValidateToken');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
// user routes uses '/api/user' as the begining to all of the routes under user-router.js
server.use("/api/user", user);
// user routes uses '/api/user/wishlist' as the begining to all of the routes under gift-router.js
// all routes using '/api/user/wishlist' also use the ValidateToken Middleware
server.use('/api/user/wishlist',ValidateToken, gift)


module.exports = server;