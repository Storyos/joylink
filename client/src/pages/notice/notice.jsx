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

  const VerticalLine = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="border-r border-gray-400 h-full"></div>
      </div>
    );
  };

  return (
    <div className="flex mt-48 font-custom">
      <div className="w-48 mt-4 ml-36 text-2xl">

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
      <VerticalLine></VerticalLine>
      <div className=" m-5 rounded-lg ml-20">
        <NoticeContents menu={noticeMenu} />
      </div>
    </div>
  );
}
