const dbConnect = require('../config/dbConnect');
const supabase = dbConnect();
const crypto = require('crypto');
const { storeHashOnBlockchain } = require('./storeHashOnBlockchain');

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

// 승인된 거래내역을 listen해서 블록체인에 올림
const subscribeToInserts = () => {
    const channel = supabase.channel('Transferinfos');

    channel
        .on('postgres_changes', { event: '*', schema: 'public', table: 'Transferinfos', filter: 'state=allowed' }, handleInserts)
        .subscribe((status) => {
            console.log('Subscription status:', status);
        }, (error) => {
            console.error('Subscription error:', error);
        });
};
const subscribeApprovals = () =>{
    const channel = supabase.channel('Approvals');
    channel
        .on('postgres_changes', { event: '*', schema: 'public', table: 'Approvals'}, updateApprovals)
        .subscribe((status) => {
            console.log('Subscription status:', status);
        }, (error) => {
            console.error('Subscription error:', error);
        });
}

const updateApprovals = async () => {
    // Step 1: Retrieve the counts for approvals and notifications
    const { data: approvedCounts, error: approvedError } = await supabase
        .from('approvals')
        .select('transfer_id, count(*)')
        .eq('approved', true)
        .group('transfer_id');

    if (approvedError) {
        console.error('Error retrieving approved counts:', approvedError);
        return;
    }

    const { data: notificationCounts, error: notificationError } = await supabase
        .from('notifications')
        .select('transfer_id, count(*)')
        .group('transfer_id');

    if (notificationError) {
        console.error('Error retrieving notification counts:', notificationError);
        return;
    }

    // Step 2: Filter transfer_ids based on the condition A >= 0.5B
    const transferIdsToUpdate = approvedCounts
        .filter(ac => {
            const notificationCount = notificationCounts.find(nc => nc.transfer_id === ac.transfer_id)?.count || 0;
            return ac.count >= 0.5 * notificationCount;
        })
        .map(ac => ac.transfer_id);

    // Step 3: Update the state for matching transfer_ids
    if (transferIdsToUpdate.length > 0) {
        const { error: updateError } = await supabase
            .from('transferinfos')
            .update({ state: 'allowed' })
            .in('transfer_id', transferIdsToUpdate);

        if (updateError) {
            console.error('Error updating transferinfos state:', updateError);
            return;
        }

        console.log('Transferinfos state updated successfully.');
    } else {
        console.log('No transferinfos state to update.');
    }
}
module.exports = { subscribeToInserts,subscribeApprovals };
