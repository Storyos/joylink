const dbConnect = require('../config/dbConnect');
const supabase = dbConnect();
const crypto = require('crypto');
const {storeHashOnBlockchain} = require('./storeHashOnBlockchain');

const handleInserts = async (payload) => {
    console.log('Insert received! : ', payload);
    const hash = generateHash(payload);
    console.log('Generated hash:', hash);
    try {
        await storeHashOnBlockchain(hash);
        console.log('Hash stored on blockchain successfully.');
    } catch (error) {
        console.error('Error storing hash on blockchain:', error);
    }
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
