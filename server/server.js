const express = require('express');
const cookieParser = require('cookie-parser');
const axios = require('axios');
const dbConnect = require('./config/dbConnect');
const loginRouter = require('./routes/login');
const { createClient } = require('@supabase/supabase-js');
const {insertQuery,upsertQuery,deleteQuery,selectQuery} = require('./API/test');


const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// app.use('/login',loginRouter);
// test1();
// test2(supabase);
const query = 'France';
// test3(query);
selectQuery('id',12);

app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행중 ❗`);
});