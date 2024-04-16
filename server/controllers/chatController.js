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


module.exports = broadcast;