const express = require('express');
const loginrouter = express.Router();
const loginController = require("../controllers/loginController")


loginrouter.route('/')
    .get(loginController.selectQueryWrap);

module.exports = loginrouter;