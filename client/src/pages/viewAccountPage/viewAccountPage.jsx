import React, { useState, useEffect } from 'react';
import { supabase } from '../../App';
import { useNavigate } from 'react-router-dom';
import MyInfo from '../../components/myInfo/myInfo';
export default function ViewAccountPage() {

  const [transactions, setTransactions] = useState([]);
  const [account_info, setAccountInfo] = useState([]);

  const [newTransaction, setNewTransaction] = useState({
    date: '',
    description: '',
    amount: '',
    transactionType: '',
    target: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 8;
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTransactions();
    fetchAccountInfo();
  }, []);

  const fetchAccountInfo = async () => {
    const { data, error } = await supabase
      .from('account')
      .select('*')
      .eq('club_seq', 1);
    if (error) {
      console.error("Error Fetching AccountInfos", error);
    } else {
      console.log(data);
      setAccountInfo(data);
    }

  }
  const fetchTransactions = async () => {
    const { data, error } = await supabase
      .from('Transferinfos')
      .select('*')
      .eq('state', 'allowed')
      .order('transfer_date', { ascending: false });
    if (error) {
      console.error('Error fetching transactions:', error);
    } else {
      setTransactions(data);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({
      ...newTransaction,
      [name]: value
    });
  };

  const handleAddTransaction = async () => {
    // account 테이블에서 club_seq가 1인 account_num을 가져옵니다.
    const { data: accountData, error: accountError } = await supabase
      .from('account')
      .select('account_num')
      .eq('club_seq', 1)
      .single();

    if (accountError) {
      console.error('Error fetching account number:', accountError);
      return;
    }

    const { account_num } = accountData;

    const { data: insertedData, error: insertError } = await supabase
      .from('Transferinfos')
      .insert([
        {
          transfer_date: newTransaction.date,
          transfer_desc: newTransaction.description,
          transfer_amount: newTransaction.amount,
          transfer_type: newTransaction.transactionType,
          transfer_counter: newTransaction.target,
          state: 'pending',
          account_num: account_num // 가져온 account_num을 추가합니다.
        },
      ])
      .select();

    if (insertError) {
      console.error(insertError);
    } else {
      const transactionId = insertedData[0].transfer_id;
      // 현재 동아리 회원들의 ID 목록을 가져옵니다.
      const { data: members, error: memberError } = await supabase
        .from('members')
        .select('user_seq');

      if (memberError) {
        console.error(memberError);
      } else {
        const notifications = members.map(member => ({
          user_seq: member.user_seq,
          message: `새로운 거래 요청: ${newTransaction.description}, 금액: ${newTransaction.amount}`,
          transfer_id: transactionId
        }));

        const { error: notificationError } = await supabase
          .from('notifications')
          .insert(notifications);

        if (notificationError) {
          console.error(notificationError);
        } else {
          alert("장부기입이 요청되었습니다.");
          navigate('/clubManagementPage');
        }
      }
    }
  };
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(transactions.length / transactionsPerPage); i++) {
    pageNumbers.push(i);
  }
  const formatDate = (dateString) => {
    const options = { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleString('ko-KR', options).replace(',', '');
  };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  return (
    <>
      <div className="flex justify-center mt-28 lg:mx-60">
        <div className="mb-16">
          <MyInfo /> {/* 사이드바 */}
        </div>
        {/* 오른쪽 창 */}
        <div className="flex-grow p-4 m-3 border border-gray-400 rounded-md">
          <div className="p-5 m-5 border border-indigo-300 rounded">
            <h3>계좌 정보</h3>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="p-2 border-b">계좌명</th>
                  <th className="p-2 border-b">계좌번호</th>
                  <th className="p-2 border-b">계좌소유주</th>
                  <th className="p-2 border-b">은행</th>
                  <th className="p-2 border-b">잔액</th>

                </tr>
              </thead>
              <tbody>
                {account_info.map((account, index) => (
                  <tr>
                    <td className="p-2 border-b">{account.account_name}</td>
                    <td className="p-2 border-b">{account.account_num}</td>
                    <td className="p-2 border-b">{account.account_owner}</td>
                    <td className="p-2 border-b">{account.account_bname}</td>
                    <td className="p-2 border-b">{account.balance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-5 m-5 border border-indigo-300 rounded">
            <h3>거래 내역</h3>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="p-2 border-b">날짜</th>
                  <th className="p-2 border-b">거래타입</th>
                  <th className="p-2 border-b">거래대상</th>
                  <th className="p-2 border-b">금액</th>
                  <th className="p-2 border-b">세부내역</th>
                </tr>
              </thead>
              <tbody>
                {currentTransactions.map((transaction, index) => (
                  <tr key={index}>
                    <td className="p-2 border-b">{formatDate(transaction.transfer_date)}</td>
                    <td className="p-2 border-b">{transaction.transfer_type}</td>
                    <td className="p-2 border-b">{transaction.transfer_counter}</td>
                    <td className="p-2 border-b">{transaction.transfer_amount}</td>
                    <td className="p-2 border-b">{transaction.transfer_desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-center mt-4">
              <ul className="flex space-x-2">
                {pageNumbers.map(number => (
                  <li key={number}>
                    <button
                      onClick={() => paginate(number)}
                      className={`p-2 ${currentPage === number ? 'bg-indigo-500 text-white' : 'bg-gray-200'}`}
                    >
                      {number}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

