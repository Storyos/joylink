import { useEffect } from "react";
import MyInfo from "../../components/myInfo/myInfo";
import { Link } from "react-router-dom";
import useUserStore from "../../zustand/useUserStore";

export default function MyClubPage() {
  const user = useUserStore(state => state.user);
  
  const PostList = () => {
    return (
      <div>
        <div><Link to={"/myClubPagePost"}>게시글1</Link></div>
        <div><Link to={"/myClubPagePost"}>게시글2</Link></div>
        <div><Link to={"/myClubPagePost"}>게시글3</Link></div>
      </div>
    )
  }

  return (
    <div className="flex justify-center mt-28">
      <div>
        <MyInfo/> {/* 사이드바 */}
      </div>
      <div className="w-1/2 p-6">
        <div className="flex items-center justify-between m-6">
          <h1 className="text-xl font-bold">게시글</h1>
          <input type="text" id="search" placeholder="게시글 검색" className="px-2 py-1 border rounded " />
        </div>
        <hr /><br />
        <h2 className="text-lg font-semibold my-6">게시글 목록</h2>
        {/* 여기에 게시글 목록 컴포넌트를 추가 */}
        <PostList />
      </div>
    </div>
  );
}

