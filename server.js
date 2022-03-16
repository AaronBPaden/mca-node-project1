"use strict";
const express = require('express');
const server = express();
const config = require('./config/config');

server.listen(config.PORT, config.HOST, () => console.log(`Listening on ${config.HOST}:${config.PORT}...`));
