const express = require('express');
const signUprouter = express.Router();
const {signUp} = require('../controllers/signUpController');

signUprouter.route('/')
    .post(signUp);


module.exports = signUprouter;