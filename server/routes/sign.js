const express = require('express');
const signUprouter = express.Router();
const {signUp,handleSubmit,saveAdditionalUserInfo} = require('../controllers/signUpController');

signUprouter.route('/')
    .post(signUp);

signUprouter.route('/additional')
    .get(handleSubmit);

module.exports = signUprouter;