import MyInfo from "../../components/myInfo/myInfo";

export default function MyClubPage() {
  return (
    <div className="flex justify-center">
      <div className="w-1/7">
        <MyInfo/> {/* 사이드바 */}
      </div>
      <div className="w-1/2 p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">게시글</h1>
          <input type="text" id="search" placeholder="게시글 검색" className=" border-indigo-800 border-solid border-2 px-2 py-1 rounded" />
        </div>
        <hr /><br />
        <h2 className="text-lg font-semibold mb-4  bg-gray-100">게시글 목록</h2>
        {/* 여기에 게시글 목록 컴포넌트를 추가 */}
      </div>
    </div>
  );
}

