const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const axios = require('axios');
const dbConnect = require('./config/dbConnect');
const loginRouter = require('./routes/login');

const app = express();
const port = 3001;
dbConnect();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use('/login',loginRouter);

app.listen(port, () =>{
    console.log(`${port}번 포트에서 서버 실행중 ❗`);
});