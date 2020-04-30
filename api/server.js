const express = require('express');
const helmet = require('helmet');

const user = require('./user/user-router');
const gift = require('./user/gift-router')

const ValidateToken = require('./middleware/ValidateToken');

const server = express();

server.use(express.json());
server.use(helmet());
server.use("/api/user", user);
server.use('/api/user/wishlist',ValidateToken, gift)

module.exports = server;