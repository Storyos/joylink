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
    <div className="flex mt-48 font-custom">
      <div className="w-64 mx-20 mt-4 ml-36 text-2xl">

        <div className="flex flex-col space-y-4">
          <h1 className="mb-8">카테고리</h1>

          <button onClick={handleNoticeMenu} className="text-left btn">
            공지사항
          </button>

          <button onClick={handleEventMenu} className="text-left btn">
            이벤트
          </button>

          <button onClick={handleMenualMenu} className="text-left btn">
            메뉴얼
          </button>
        </div>
      </div>
      <div className="w-3/5 m-5 rounded-lg">
        <NoticeContents menu={noticeMenu} />
      </div>
    </div>
  );
}
