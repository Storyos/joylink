import { useState } from "react"
import NoticeContents from "../../components/noticeContents"

export default function Notice () {
  const [noticeMenu, setNoticeMenu] = useState("Notice")

  const handleNoticeMenu = () => {
    setNoticeMenu("Notice")
  }
  const handleEventMenu = () => {
    setNoticeMenu("Event")
  }
  const handleMenualMenu = () => {
    setNoticeMenu("Menual")
  }
  
  return (
    <div className="flex justify-center py-20 bg-gray-100">
      <div className="flex flex-col w-[120px] min-h-[600px] mr-10">
        <h1 className="py-8 text-2xl font-bold text-center">공지사항</h1>
        <div className="h-full bg-white rounded-[10px] shadow">
          <ul className="my-8 text-center">
            <li className="block my-6 text-sm text-[#a9a9a9]">
              <button onClick={handleNoticeMenu} className={noticeMenu === "Notice" ? "text-black" : ""}>공지사항</button>
            </li>
            <li className="block my-6 text-sm text-[#a9a9a9]">
              <button onClick={handleEventMenu} className={noticeMenu === "Event" ? "text-black" : ""}>이벤트</button>
            </li>
            <li className="block my-6 text-sm text-[#a9a9a9]">
              <button onClick={handleMenualMenu} className={noticeMenu === "Menual" ? "text-black" : ""}>메뉴얼</button>
            </li>
          </ul>
        </div>
      </div>
      <NoticeContents menu={noticeMenu}/>
    </div>
  )
}