import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../App';

function App() {
  const [clubData, setClubData] = useState({
    club_seq: '',
    club_nm: '',
    club_ctg: '',
    user_seq: '',
    club_st: '',
    club_loc: '',
    club_fee: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchNextClubSeq = async () => {
      const { data, error } = await supabase.rpc('get_next_club_seq');
      if (error) {
        console.error('Error fetching next club sequence:', error);
      } else {
        console.log('Next club sequence:', data);
        setClubData((prevData) => ({ ...prevData, club_seq: data }));
      }
    };

    fetchNextClubSeq();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClubData({ ...clubData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { club_seq, club_nm, club_ctg, user_seq, club_st, club_loc, club_fee } = clubData;
    console.log('Submitting club data:', clubData);

    const { data, error } = await supabase
      .from('clubs')
      .insert([
        {
          club_seq,
          club_nm,
          club_est_dt: new Date().toISOString(),
          club_ctg,
          user_seq,
          club_st,
          club_loc,
          club_fee
        }
      ]);

    if (error) {
      console.error('Error inserting club:', error.message);
      console.error('Error details:', error.details);
    } else {
      console.log('Data inserted:', data);
      alert('Club created successfully!');
      navigate('/cbSearch');
    }
  };

  return (
    <div className="container mx-auto p-4 mt-40 text-center">
      <h1 className="text-2xl font-bold mb-12">모임 생성하기</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-1/3 mx-auto mb-40 text-left">
        <div>
          <label className="block text-sm font-medium">모임 ID번호:</label>
          <input
            type="text"
            name="club_seq"
            value={clubData.club_seq}
            onChange={handleChange}
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md mb-8"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">모임 이름:</label>
          <input
            type="text"
            name="club_nm"
            value={clubData.club_nm}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md mb-8"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">모임 카테고리:</label>
          <input
            type="text"
            name="club_ctg"
            value={clubData.club_ctg}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md mb-8"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">유저 ID번호:</label>
          <input
            type="text"
            name="user_seq"
            value={clubData.user_seq}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md mb-8"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">모임 상태:</label>
          <input
            type="text"
            name="club_st"
            value={clubData.club_st}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md mb-8"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">모임 위치:</label>
          <input
            type="text"
            name="club_loc"
            value={clubData.club_loc}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md mb-8"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">모임 요금:</label>
          <input
            type="text"
            name="club_fee"
            value={clubData.club_fee}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md mb-8"
          />
        </div>
        <div className="flex justify-end w-full">
          <button type="submit" className="py-2 px-4 bg-blue-300 text-white font-semibold rounded-md hover:bg-blue-500">
            생성하기
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
