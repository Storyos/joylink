const express = require('express');
const loginrouter = express.Router();
const loginController = require("../controllers/loginController")

loginrouter.route('/')
    .get(loginController.insertQuery);


module.exports = loginrouter;