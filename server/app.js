const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const {subscribeToInserts} = require('./services/supabaseService');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

subscribeToInserts();

module.exports = app;