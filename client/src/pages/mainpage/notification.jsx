import React, { useState, useEffect } from 'react';
import { supabase } from '../../App';
import useUserStore from '../../zustand/useUserStore';

export default function Notification() {
    const [notifications, setNotifications] = useState([]);
    const [showNotifications, setShowNotifications] = useState(false);
    const user_seq = useUserStore().user.user_seq;
    useEffect(() => {
        async function notificationSubscription() {
            await supabase
                .channel('room3')
                .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'notifications', filter: `user_seq=eq.${user_seq}` }, handlesubscribe)
                .subscribe();
        }
        notificationSubscription();
        fetchNotifications();
    }, []);
    const handlesubscribe = () => {
        fetchNotifications();
    }

    const fetchNotifications = async () => {
        const { data, error } = await supabase
            .from('notifications')
            .select('*')
            .order('created_at', { ascending: false })
            .eq('read', false)
            .eq('user_seq', user_seq);
        if (error) {
            console.error('Error fetching notifications:', error);
        } else {
            console.log("알림 Update");
            setNotifications(data);
        }
    };

    const handleApproval = async (transactionId, approve) => {
        const { data: approvalData, error: approvalError } = await supabase
            .from('approvals')
            .insert([
                {
                    transfer_id: transactionId,
                    approved: approve,
                    user_seq: user_seq
                }
            ]);
        const { data, error } = await supabase
            .from('notifications')
            .update({read: true})
            .eq('transfer_id', transactionId)
            .eq('user_seq',user_seq);
        if (error) {
            console.error("알림 읽음 처리 에러발생", error);
        }
        else {
            alert("승인하였습니다.");
            fetchNotifications();
            console.log("처리하였습니다.");
        }
    };

    return (
        <div className="relative">
            <button onClick={() => setShowNotifications(!showNotifications)} className="relative">
                <img src="icons/notification_icon.png" alt="Notifications" className="w-10 h-10" />
                {notifications.length > 0 && (
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
            </button>
            {showNotifications && (
                <div className="absolute right-0 w-64 mt-2 bg-white border border-gray-300 rounded shadow-lg">
                    <ul>
                        {notifications.map(notification => (
                            <li key={notification.id} className="p-2 border-b border-gray-200">
                                <p>{notification.message}</p>
                                <button onClick={() => handleApproval(notification.transfer_id, true)} className="text-blue-500">
                                    승인
                                </button>
                                <button onClick={() => handleApproval(notification.transfer_id, false)} className="text-red-500">
                                    거부
                                </button>
                            </li>
                        ))}
                    </ul>
                    {notifications.length === 0 && (
                        <p className="p-2 text-center text-gray-500">새로운 알림이 없습니다.</p>
                    )}
                </div>
            )}
        </div>
    );
}
