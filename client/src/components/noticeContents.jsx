import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { supabase } from '../App';

export default function NoticeContents (props) {
  
  // 부모 컴포넌트로부터 전달된 메뉴 정보를 받아옴
  const menu = props.menu
  
  // 세부 정보 페이지 표시 여부 상태
  const [details, setDetails] = useState(false)
  
  // 공지사항 목록과 선택된 공지사항의 세부 내용 상태
  const [noticelist, setNoticeList] = useState([]);
  const [noticebody, setNoticeBody] = useState([]);
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1; // Months are zero-based
    const day = date.getDate();
    return `${month}/${day}`;
  };
  
  // 메뉴가 변경될 때 세부 정보 페이지를 닫음
  useEffect(() => {
    setDetails(false);
  }, [menu]);
  
  // 공지사항 세부 정보 페이지를 열기 위한 핸들러 함수
  const handleDetails = (data) => {
    setDetails(true)
  }

  // 선택된 공지사항의 세부 내용을 저장하고 세부 정보 페이지를 열기 위한 핸들러 함수
  const handleNoticeDetail = (a) => {
    setDetails(true);
    console.log("notice r값:", a);
    setNoticeBody(a);
  }

  // 세부 정보 페이지를 닫기 위한 핸들러 함수
  const handleList = () => {
    setDetails(false)
  }
  
  useEffect(() => {
    getNoticeList();
  }, [])
  
  // Supabase를 사용하여 공지사항 목록을 가져오는 함수
  const getNoticeList = async () => {
    const { data, error } = await supabase.from('notice').select('*');
    if (error) {
      console.log(error);
    } else {
      console.log(data);
      setNoticeList(data);
    }
  }

  // 공지사항 목록을 표시하는 컴포넌트
  const NoticeList =  () => {
    return (
      <div className="w-[800px] rounded-[10px] border-2">
        {/* 검색창 */}
        <div className="flex justify-end mt-4">
          <input className="px-2 py-1 mr-2 rounded-md outline-none" type="text" placeholder="게시글 검색" />
          <button className="px-2 bg-[#FFEED9] rounded-[5px] hover:bg-[#e9e9e9] mr-4">검색</button>
        </div>
  
        {/* 공지사항 목록 */}
        <div className="min-h-[400px] m-4 py-4 rounded-[10px]">
          {/* 메뉴에 따라 다른 목록 표시 */}
          {menu==="Notice"&&
          <div>
            <table className="w-full text-center border-collapse">
              <thead>
                <tr>
                  <th className="py-2 border-b-2">번호</th>
                  <th className="py-2 border-b-2">구분</th>
                  <th className="py-2 border-b-2">제목</th>
                  <th className="py-2 border-b-2">작성자</th>
                  <th className="py-2 border-b-2">등록일</th>
                  <th className="py-2 border-b-2">조회수</th>
                </tr>
              </thead>
              <tbody>
                {noticelist.map((notice, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2">{notice.id}</td>
                    <td className="py-2">{notice.category}</td>
                    <td className="py-2">
                      <Link to={`/notice/${notice.id}`}>
                        <button onClick={() => handleNoticeDetail(notice)}>{notice.title}</button>
                      </Link>
                    </td>
                    <td className="py-2">운영자</td>
                    <td className="py-2">{formatDate(notice.notice_time)}</td>
                    <td className="py-2">{notice.views}</td>
                  </tr>
                ))}
              </tbody>
            </table>
  
            {/* Pagination */}
            <div className="flex justify-center mt-4">
              <button className="px-2 py-1 mx-1 border">1</button>
              <button className="px-2 py-1 mx-1 border">2</button>
              <button className="px-2 py-1 mx-1 border">3</button>
              <button className="px-2 py-1 mx-1 border">4</button>
              <button className="px-2 py-1 mx-1 border">5</button>
            </div>
          </div>
          }
          {/* 이벤트 목록 */}
          {menu === "Event" &&
            <ul>
              <li className="px-2 py-1 mx-4 my-2 border-b-4 border-white">
                <Link to="/notice/${event.id}">
                  <button onClick={handleDetails}>이벤트1</button>
                </Link>
              </li>
              <li className="px-2 py-1 mx-4 my-2 border-b-4 border-white">
                <Link to="/notice/${event.id}">
                  <button onClick={handleDetails}>이벤트2</button>
                </Link>
              </li>
            </ul>
          }
          
          {/* 메뉴얼 목록 */}
          {menu === "Menual" && 
            <ul>
              <li className="px-2 py-1 mx-4 my-2 border-b-4 border-white">
                <button onClick={handleDetails}>메뉴얼1</button>
              </li>
              <li className="px-2 py-1 mx-4 my-2 border-b-4 border-white">
                <button onClick={handleDetails}>메뉴얼2</button>
              </li>
            </ul>
          }
        </div>
      </div>
      
    );
  }

  // 세부 정보를 표시하는 컴포넌트
  const NoticeDetail = () => {
    return (
      <div className="w-[800px] rounded-lg bg-white">
        {/* 세부 정보 제목 */}
        <div className="px-4 py-2 m-4 text-sm bg-gray-100 rounded-lg">
          <h1 className="text-lg font-bold">
            {/* 메뉴에 따라 제목을 다르게 표시 */}
            {menu === `Notice` && `${noticebody.title}`}
            {menu === "Event" && "이벤트1"}
            {menu === "Menual" && "메뉴얼1"}
          </h1>
        </div>
        {/* 세부 정보 내용 */}
        <div className="min-h-[360px] m-4 p-4 rounded-lg bg-gray-100">
          <p className="">
            {/* 공지사항 내용 */}
            {menu === `Notice` && `${noticebody.body}`}
          </p>
        </div>
        {/* 목록으로 돌아가는 버튼 */}
        <div className="flex justify-end">
          <Link to="/notice">
            <button className="mx-4 py-1 px-2 bg-[#e9e9e9] rounded-md" onClick={handleList}> 목록</button>
          </Link>
        </div>
      </div>
    )
  }
  
  // 세부 정보 페이지 또는 목록 페이지를 표시하는 컴포넌트
  return (
    <>
      {details ? <NoticeDetail /> : <NoticeList /> }
    </>
  )
}

