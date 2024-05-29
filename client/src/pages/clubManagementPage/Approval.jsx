import React, { useState, useEffect } from 'react';
import { supabase } from '../../App';

export default function Approval() {
    const [pendingUsers, setPendingUsers] = useState([]);

    useEffect(() => {
        fetchPendingUsers();
    }, []);

    const formatDate = (dateString) => {
        const options = { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
        const date = new Date(dateString);
        return date.toLocaleString('ko-KR', options).replace(',', '');
    };

    const fetchPendingUsers = async () => {
        const { data, error } = await supabase
            .from('joinclubs')
            .select(`
                user_seq,
                jc_date,
                jc_Rst,
                users:user_seq (user_name, user_id)
            `)
            .order('jc_date', { ascending: false });
        if (error) {
            console.error('Error fetching pending users:', error);
        } else {
            console.log(data);
            setPendingUsers(data);
        }
    };

    const handleApprove = async (userSeq) => {
        const { error } = await supabase
            .from('joinclubs')
            .update({ jc_Rst: 'allowed' })
            .eq('user_seq', userSeq);

        if (error) {
            console.error('Error approving user:', error);
        } else {
            fetchPendingUsers();
        }
    };

    const handleReject = async (userSeq) => {
        const { error } = await supabase
            .from('joinclubs')
            .update({ jc_Rst: 'rejected' })
            .eq('user_seq', userSeq);

        if (error) {
            console.error('Error rejecting user:', error);
        } else {
            fetchPendingUsers();
        }
    };

    return (
        <div>
            <h2 className="mb-4 text-2xl font-bold">가입 승인</h2>
            <div className="p-5 m-5 border border-indigo-300 rounded">
                <h3>승인 대기 중인 사용자 목록</h3>
                <table className="w-full text-left">
                    <thead>
                        <tr>
                            <th className="p-4 border-b">이메일</th>
                            <th className="p-4 border-b">이름</th>
                            <th className="p-4 border-b">가입신청 날짜</th>
                            <th className="p-4 border-b">현재 상태</th>
                            <th className="p-4 border-b">승인 여부</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pendingUsers.map((user, index) => (
                            <tr key={index}>
                                <td className="p-4 border-b">{user.users.user_id}</td>
                                <td className="p-4 border-b">{user.users.user_name}</td>
                                <td className="p-4 border-b">{formatDate(user.jc_date)}</td>
                                <td className="p-4 border-b">{user.jc_Rst}</td>
                                <td className="p-4 border-b">
                                    <button
                                        onClick={() => handleApprove(user.user_seq)}
                                        className="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                                    >
                                        승인
                                    </button>
                                    <button
                                        onClick={() => handleReject(user.user_seq)}
                                        className="px-4 py-2 text-white bg-blue-300 rounded hover:bg-blue-400"
                                    >
                                        거부
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
