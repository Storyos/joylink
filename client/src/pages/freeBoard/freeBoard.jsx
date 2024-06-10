import React, { useEffect, useState } from "react";
import MyInfo from "../../components/myInfo/myInfo";
import { Link } from "react-router-dom";
import CocktailHeader from "../../components/cocktailHeader";
import { supabase } from "../../App";

export default function FreeBoard() {
  const [posts, setPosts] = useState([]); // 게시글 목록을 저장할 상태 변수

  useEffect(() => {
    fetchPosts(); // 컴포넌트가 마운트될 때 fetchPosts 함수 호출
  }, []);

  // Supabase에서 freeboard 테이블의 데이터를 가져오는 함수
  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('freeboard')
      .select('*'); // freeboard 테이블에서 모든 행을 선택

    if (error) {
      console.error('Error fetching posts:', error); // 에러가 발생하면 콘솔에 출력
    } else {
      setPosts(data); // 성공적으로 데이터를 가져오면 posts 상태에 저장
    }
  };

  const handleClick = () => {
    console.log("Button clicked!"); // 클릭 이벤트 확인용
  };

  return (
    <div className="mt-32">
      <CocktailHeader />
      <div className="flex justify-center">
        <div className="mb-16">
          <MyInfo />
        </div>
        <div className="w-3/5 p-6">
          <div className="flex justify-between items-center mt-8 mb-10">
            <h1
              className="text-2xl font-bold"
              style={{ fontFamily: '"Dancing Script", sans-serif' }}
            >
              Free board
            </h1>
            <input
              type="text"
              id="search"
              placeholder="게시글 검색"
              className="border px-2 py-1 rounded mt-2"
            />
          </div>
          <div className="flex justify-end mb-5">
            <Link to="/addFreeBoard">
              <button 
                className="bg-blue-300 text-white border rounded-md py-1 px-2 hover:bg-slate-400"
                onClick={handleClick} // 클릭 핸들러 추가
              >
                게시글 작성
              </button>
            </Link>
          </div>
          <hr />
          <div>
            <ul>
              {posts.length === 0 ? (
                <li>게시글이 없습니다.</li>
              ) : (
                posts.map((post) => (
                  <li key={post.id} className="flex items-center justify-between border-b py-4">
                    <div className="flex">
                      <h2 className="text-md">{post.title}</h2> {/* 게시글 제목 */}
                    </div>
                    <div className="flex ml-auto">
                      <p className="text-gray-500 mr-4">작성자: {post.author}</p> {/* 게시글 작성자 */}
                      <p className="text-gray-500">{post.date}</p> {/* 게시글 작성 날짜 */}
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
