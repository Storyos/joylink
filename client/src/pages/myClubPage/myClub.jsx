import MyInfo from "../../components/myInfo/myInfo";

export default function myClubPage() {
  return (
    <div className="flex">
      <div className="w-1/5">
        <MyInfo/>
      </div>
      <div className="w-2/3">
        <div>
          <h1>게시글</h1>
          <input type="text" id="search"  placeholder="게시글검색" class="border border-indigo-600 ..." />
        </div>
        <h2>게시글 목록</h2>
      </div>
    </div>
  );
}
