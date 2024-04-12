const dbConnect = require('../config/dbConnect');

const supabase = dbConnect();
const chats = supabase.channel('chats')

function broadcast() {
    chats.send({
    type:'broadcast',
    event: 'test',
    payload: {message: 'hello world'},
})
}
module.exports = broadcast;