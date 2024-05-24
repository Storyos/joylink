const dbConnect = require('../config/dbConnect');
const supabase = dbConnect();
const crypto = require('crypto');

const handleInserts = (payload) => {
    console.log('Insert received! : ', payload);
    generateHash(payload);
};

const generateHash = (data) => {
    return crypto.createHash('sha256').update(JSON.stringify(data)).digest('hex');
};

const subscribeToInserts = () => {
    const channel = supabase.channel('Transferinfos');

    channel
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'Transferinfos' }, handleInserts)
        .subscribe((status) => {
            console.log('Subscription status:', status);
        }, (error) => {
            console.error('Subscription error:', error);
        });
};

module.exports = { subscribeToInserts };
