const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const dbConnect = async () =>{
    try{
        const connection = await mongoose.connect(process.env.DB_URL);
        console.log("DB 연결 완료 ✔");
    } catch(err){
        console.error(err);
    }
}

module.exports= dbConnect; 