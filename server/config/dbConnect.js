// dbConnect.js
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config();

const supabaseUrl = 'https://vtvkgtqvczyuteenfadw.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;

const dbConnect = () => {
    try {
        const supabase = createClient(supabaseUrl, supabaseKey);
        console.log("Supabase에 연결됨");
        return supabase;
    } catch (err) {
        console.error("Supabase 연결 에러:", err);
    }
}

module.exports = dbConnect;
