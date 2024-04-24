import { useState } from "react"


export default function NoticeContents () {
  
  const [details, setDetails] = useState(false)
  const handleDetails = () => {
    setDetails(true)
    console.log(details)
  }

  const NoticeList = () => {
    return (
      <div className="w-2/3 rounded-lg bg-[#c9c9c9]">
        <div className="flex justify-end" >
          <input className="bg-[#e9e9e9] rounded-md py-1 px-2 mr-8 mt-4 outline-none" type="text" placeholder="게시글 검색"/>
        </div>
        <div className="min-h-[400px] m-4 py-4 rounded-lg bg-[#e9e9e9]">
          <ul>
            <li className="px-2 py-1 mx-4 my-2 border-b-4 border-white"><button onClick={handleDetails}>공지1</button></li>
            <li className="px-2 py-1 mx-4 my-2 border-b-4 border-white"><button>공지2</button></li>
            <li className="px-2 py-1 mx-4 my-2 border-b-4 border-white"><button>공지3</button></li>
            <li className="px-2 py-1 mx-4 my-2 border-b-4 border-white"><button>공지4</button></li>
            <li className="px-2 py-1 mx-4 my-2 border-b-4 border-white"><button>공지5</button></li>
          </ul>
        </div>
      </div>
    )
  }

  const NoticeDetail = () => {
    return (
      <div className="w-2/3 rounded-lg bg-[#c9c9c9]">
        <div className="bg-[#e9e9e9] rounded-lg m-4 py-2 px-4 text-sm">
          <h1 className="text-lg font-bold">공지사항 1</h1>
        </div>
        <div className="min-h-[360px] m-4 p-4 rounded-lg bg-white">
          <p className="">공지사항 세부 내용</p>
        </div>
        <div className="flex justify-end">
          <button className="mx-4 py-1 px-2 bg-[#e9e9e9] rounded-md"> 목록</button>
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