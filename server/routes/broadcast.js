const express = require('express');
const broadcastrouter = express.Router();
const chatController = require("../controllers/chatController")

    broadcastrouter.route('/')
        .get(chatController);

    module.exports =  broadcastrouter;