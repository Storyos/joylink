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
    <>
      <div className="flex justify-between my-20 mx-60">
        <div className="flex flex-col w-1/6 min-h-[600px]">
          <h1 className="py-8 text-3xl font-bold text-center">공지사항</h1>
          <div className="h-full bg-[#e9e9e9] rounded-lg" >
            <ul className="my-8 text-center">
              <il className="block my-6 text-lg"><button onClick={handleNoticeMenu}>공지사항</button></il>
              <il className="block my-6 text-lg"><button onClick={handleEventMenu}>이벤트</button></il>
              <il className="block my-6 text-lg"><button onClick={handleMenualMenu}>메뉴얼</button></il>
            </ul>
          </div>
        </div>
        <NoticeContents menu={noticeMenu}/>
      </div>
    </>
  )
}