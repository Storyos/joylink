import MyInfo from "../../components/myInfo/myInfo";

export default function ClubNotice(){

  return(
  <div className="flex justify-center mt-28">
    <div>
      <MyInfo></MyInfo>
    </div>
    <div className="w-1/2 p-6">
        <div className="flex justify-between items-center my-6">
          <h1 className="text-xl font-bold">동아리 공지사항</h1>
          <input type="text" id="search" placeholder="공지사항 검색" className="border px-2 py-1 rounded" />
        </div>
        <hr /><br />
        <h2 className="text-lg font-semibold my-6">공지사항 목록</h2>
        {/* 여기에 게시글 목록 컴포넌트를 추가 */}
      </div>
  </div>
  )
}

