import { supabase } from "../../App";
import { useEffect, useRef, useState } from "react"

export default function SearchReceivedUser () {
  
  const [userData, setUserData] = useState([]);

  const inputRef = useRef(null)

  // 유저 데이터 불러오기
  const fetchUserData = async () => {
    const { data, error } = await supabase.from('users').select(`
      user_seq,  
      user_id,
      user_name
    `)
    if (error) {
      console.error("받은 사람 select query 에러", error);
    } else {
      console.log('받은 데이터', data);
      setUserData(data);
    }
  }

  useEffect(() => {
    fetchUserData();
  },[])
  
  // 유저 이름으로 검색
  const handleSearchbyUser = async () => {

    const { data, error } = await supabase.from('users').select(`
      user_seq,  
      user_id,
      user_name
    `)
    if (error) {
      console.error("받은 사람 select query 에러", error);
    } else {
      console.log('받은 데이터', data);
    }
    
    const searchName = inputRef.current.value; 
    const searchData = [];
    
    data.forEach ((user) => {
      user.user_name.includes(searchName) && searchData.push(user);
    })
    setUserData(searchData);
  }

  // 엔터 눌러도 검색 가능
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearchbyUser();
    }
  };

  // 유저 선택 시 팝업창 닫으면서 MessageModal로 데이터 보내기
  const handleClickUser = (userName, userId,user_seq) => {
    window.opener.postMessage({username: userName, userId: userId,reciever_seq: user_seq});
    window.close();
  }

  return (
    <div className="flex justify-center">
      <div className="w-[400px] h-[400px] border-2 p-1">
        <div className="flex justify-between mb-4">
          <span className="ml-2">유저 검색</span>
          <span>
            <input type="text" className="border-2" ref={inputRef} onKeyDown={handleKeyDown}/>
            <button className="px-1 mx-1 border-2 hover:bg-[#e9e9e9]" onClick={handleSearchbyUser}>확인</button>
          </span>
        </div>
        <div className="flex justify-center">
          <table className="text-center">
            <tr>
              <td className="border-2 w-[100px]">이름</td>
              <td className="border-2 w-[200px]">이메일</td>
            </tr>
            {userData.map((user, index) => (
              <tr key={index}>
                <td className="border-2"><button className="hover:bg-[#e9e9e9] px-1" onClick={()=>{handleClickUser(user.user_name, user.user_id, user.user_seq)}}>{user.user_name}</button></td>
                <td className="border-2">{user.user_id}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  )
}