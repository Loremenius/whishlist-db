const express = require('express');
const helmet = require('helmet');

const user = require('./user/user-router');

const server = express();

server.use(express.json());
server.use(helmet());
server.use("/api/user", user);

module.exports = server;