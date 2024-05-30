const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const {subscribeToInserts, subscribeApprovals} = require('./services/supabaseService');
const { checkBalance } = require('./services/checkBalance');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

checkBalance();
subscribeToInserts();
subscribeApprovals();
module.exports = app;