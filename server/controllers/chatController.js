const dbConnect = require('../config/dbConnect');

const supabase = dbConnect();
const chats = supabase.channel('chats')

function broadcast(msg) {
    chats.send({
    type:'broadcast',
    event: 'test',
    payload: {message: msg},
})
}

const presenceTrackStatus = await chats.track({
    user: 'user-1',
    online_at: new Date().toISOString(),
})

module.exports = broadcast;