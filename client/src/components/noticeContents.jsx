import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function NoticeContents (props) {
  
  const menu = props.menu
  const [details, setDetails] = useState(false)
  
  useEffect(() => {
    setDetails(false);
  }, [menu]);
  
  const handleDetails = () => {
    setDetails(true)
  }

  const handleList = () => {
    setDetails(false)
  }
  
  const NoticeList = () => {
    return (
      <div className="w-2/3 rounded-lg bg-[#c9c9c9]">
        <div className="flex justify-end" >
          <input className="bg-[#e9e9e9] rounded-md py-1 px-2 mr-8 mt-4 outline-none" type="text" placeholder="게시글 검색"/>
        </div>
        <div className="min-h-[400px] m-4 py-4 rounded-lg bg-[#e9e9e9]">
          {menu == "Notice" &&
            <ul>
              <li className="px-2 py-1 mx-4 my-2 border-b-4 border-white"><Link to="/notice/${notice.id}"><button onClick={handleDetails}>공지1</button></Link></li>
              <li className="px-2 py-1 mx-4 my-2 border-b-4 border-white"><Link to="/notice/${notice.id}"><button onClick={handleDetails}>공지2</button></Link></li>
              <li className="px-2 py-1 mx-4 my-2 border-b-4 border-white"><Link to="/notice/${notice.id}"><button onClick={handleDetails}>공지3</button></Link></li>
              <li className="px-2 py-1 mx-4 my-2 border-b-4 border-white"><Link to="/notice/${notice.id}"><button onClick={handleDetails}>공지4</button></Link></li>
              <li className="px-2 py-1 mx-4 my-2 border-b-4 border-white"><Link to="/notice/${notice.id}"><button onClick={handleDetails}>공지5</button></Link></li>
            </ul>
          }
          
          {menu == "Event" &&
            <ul>
              <li className="px-2 py-1 mx-4 my-2 border-b-4 border-white"><Link to="/notice/${event.id}"><button onClick={handleDetails}>이벤트1</button></Link></li>
              <li className="px-2 py-1 mx-4 my-2 border-b-4 border-white"><Link to="/notice/${event.id}"><button onClick={handleDetails}>이벤트2</button></Link></li>
            </ul>
          }
          
          {menu == "Menual" && 
            <ul>
              <li className="px-2 py-1 mx-4 my-2 border-b-4 border-white"><button onClick={handleDetails}>메뉴얼1</button></li>
              <li className="px-2 py-1 mx-4 my-2 border-b-4 border-white"><button onClick={handleDetails}>메뉴얼2</button></li>
            </ul>
          }

        </div>
      </div>
    )
  }

  const NoticeDetail = () => {
    return (
      <div className="w-2/3 rounded-lg bg-[#c9c9c9]">
        <div className="bg-[#e9e9e9] rounded-lg m-4 py-2 px-4 text-sm">
          <h1 className="text-lg font-bold">
            {menu == "Notice" && "공지사항1"}
            {menu == "Event" && "이벤트1"}
            {menu == "Menual" && "메뉴얼1"}
          </h1>
        </div>
        <div className="min-h-[360px] m-4 p-4 rounded-lg bg-white">
          <p className="">
            {menu == "Notice" && "공지사항 세부 내용"}
            {menu == "Event" && "이벤트 세부 내용"}
            {menu == "Menual" && "메뉴얼 세부 내용"}
          </p>
        </div>
        <div className="flex justify-end">
          <Link to="/notice"><button className="mx-4 py-1 px-2 bg-[#e9e9e9] rounded-md" onClick={handleList}> 목록</button></Link>
        </div>
      </div>
    )
  }
  
  return (
    <>
      {details ? <NoticeDetail /> : <NoticeList /> }
    </>
  )
}