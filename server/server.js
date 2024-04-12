const express = require('express');
const cookieParser = require('cookie-parser');
const axios = require('axios');
const dbConnect = require('./config/dbConnect');
const loginRouter = require('./routes/login');
const cors = require('cors');
const broadcastRouter = require('./routes/broadcast');

const supabase = dbConnect();
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/login', loginRouter);
app.use('/test', broadcastRouter)


const handleInserts = (payload) => {
    console.log('Change received!', payload)
}

// Insert문 감지
supabase
    .channel('chats')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chats' }, handleInserts)
    .subscribe()

    const channel = supabase.channel('test-channel')

    // No need to subscribe to channel
    
    channel
    .send({
    type: 'broadcast',
    event: 'test',
    payload: { message: 'Hi' },
    })
    .then((resp) => console.log(resp))

    
app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행중 ❗`);
});


// subscribe()는 해당 DB를 Listen하는 것.