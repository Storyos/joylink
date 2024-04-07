const express = require('express');
const loginrouter = express.Router();
const loginController = require("../controllers/loginController")


const test1 = require("../API/test");
const dbConnect = require('../config/dbConnect');

module.exports = loginrouter;