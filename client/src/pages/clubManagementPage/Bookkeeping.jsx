import React, { useState, useEffect } from 'react';
import { supabase } from '../../App';

export default function Bookkeeping() {
    const [transactions, setTransactions] = useState([]);
    const [newTransaction, setNewTransaction] = useState({
        date: '',
        description: '',
        amount: ''
    });
    const [currentPage, setCurrentPage] = useState(1);
    const transactionsPerPage = 8;

    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        const { data, error } = await supabase
            .from('Transferinfos')
            .select('*')
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
        const { data, error } = await supabase
            .from('transactions')
            .insert([newTransaction]);

        if (error) {
            console.error('Error adding transaction:', error);
        } else {
            setTransactions([...transactions, ...data]);
            setNewTransaction({ date: '', description: '', amount: '' });
        }
    };

    const formatDate = (dateString) => {
        const options = { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
        const date = new Date(dateString);
        return date.toLocaleString('ko-KR', options).replace(',', '');
    };

    const indexOfLastTransaction = currentPage * transactionsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
    const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(transactions.length / transactionsPerPage); i++) {
        pageNumbers.push(i);
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='font-custom'>
            <h2 className="mb-4 text-2xl font-bold">장부 관리</h2>
            <div className="p-5 m-5 border border-indigo-300 rounded">
                <h3>새로운 거래 추가</h3>
                <input
                    type="date"
                    name="date"
                    value={newTransaction.date}
                    onChange={handleInputChange}
                    className="p-2 m-2 border rounded"
                />
                <input
                    type="text"
                    name="description"
                    value={newTransaction.description}
                    onChange={handleInputChange}
                    placeholder="설명"
                    className="p-2 m-2 border rounded"
                />
                <input
                    type="number"
                    name="amount"
                    value={newTransaction.amount}
                    onChange={handleInputChange}
                    placeholder="금액"
                    className="p-2 m-2 border rounded"
                />
                <button onClick={handleAddTransaction} className="p-2 m-2 text-white bg-indigo-500 rounded">
                    거래 추가
                </button>
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
    );
}
