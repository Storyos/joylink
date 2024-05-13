import MyInfo from "../../components/myInfo/myInfo";

export default function Gallery(){

  return(
  <div className="flex justify-center">
    <div>
      <MyInfo></MyInfo>
    </div>
    <div className="w-1/2 p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">갤러리</h1>
          <input type="text" id="search" placeholder="갤러리 검색" className=" border-indigo-800 border-solid border-2 px-2 py-1 rounded" />
        </div>
        <hr /><br />
        <h2 className="text-lg font-semibold mb-4  bg-gray-100">갤러리 목록</h2>
        {/* 여기에 게시글 목록 컴포넌트를 추가 */}
      </div>
  </div>
  )
}

