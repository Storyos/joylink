import { useState } from "react";
import NoticeContents from "../../components/noticeContents";

export default function Notice() {
  const [noticeMenu, setNoticeMenu] = useState("Notice");

  const handleNoticeMenu = () => {
    setNoticeMenu("Notice");
  };
  const handleEventMenu = () => {
    setNoticeMenu("Event");
  };
  const handleMenualMenu = () => {
    setNoticeMenu("Menual");
  };

  return (
    <div className="flex justify-center">
      <div className="w-1/6 m-5 bg-gray-100 border-2 border-indigo-400 rounded-lg lg:w-1/12">
          <h1 className="flex justify-center m-7">카테고리</h1>
          <ul className="flex flex-col items-center mt-4">
            <li className="m-2">
              <button onClick={handleNoticeMenu}>공지사항</button>
            </li>
            <li className="m-2">
              <button onClick={handleEventMenu}>이벤트</button>
            </li>
            <li className="m-2">
              <button onClick={handleMenualMenu}>메뉴얼</button>
            </li>
          </ul> 
      </div>  
      <div className="w-3/5 m-5 bg-gray-100 border-2 border-indigo-400 rounded-lg">
        <NoticeContents menu={noticeMenu} />
      </div>
    </div>
  );
}



