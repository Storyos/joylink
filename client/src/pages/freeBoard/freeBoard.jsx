import React from "react";
import MyInfo from "../../components/myInfo/myInfo";
import CocktailHeader from "../../components/cocktailHeader";

export default function FreeBoard() {
  return (
    <div className="mt-32">
      <CocktailHeader/>
      <div className="flex justify-center">
        <div className="mb-16">
          <MyInfo />
        </div>
        <div className="w-3/5 p-6">
          <div className="flex justify-between items-center mt-8 mb-16">
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
          <hr />
          {/* 여기에 게시글 목록 컴포넌트를 추가 */}

          <table className="w-full text-center border-collapse">
            <thead>
              <tr>
                <th className="py-2">번호</th>
                <th className="py-2">구분</th>
                <th className="py-2">제목</th>
                <th className="py-2">작성자</th>
                <th className="py-2">등록일</th>
                <th className="py-2">조회수</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <td className="py-2">1</td>
                <td className="py-2">자유</td>
                <td className="py-2">호랑이와 원숭이</td>
                <td className="py-2">박기재</td>
                <td className="py-2">2024/06/03</td>
                <td className="py-2">327</td>
              </tr>

              <tr className="border">
                <td className="py-2">2</td>
                <td className="py-2">자유</td>
                <td className="py-2">연태고량주는 맛있다</td>
                <td className="py-2">김범규</td>
                <td className="py-2">2024/06/03</td>
                <td className="py-2">37</td>
              </tr>

              <tr className="border">
                <td className="py-2">3</td>
                <td className="py-2">자유</td>
                <td className="py-2">칵테일 만드는 방법</td>
                <td className="py-2">손가얼</td>
                <td className="py-2">2024/06/06</td>
                <td className="py-2">7</td>
              </tr>

              <tr className="border">
                <td className="py-2">4</td>
                <td className="py-2">자유</td>
                <td className="py-2">부경대 맛집 추천</td>
                <td className="py-2">최세윤</td>
                <td className="py-2">2024/06/07</td>
                <td className="py-2">7</td>
              </tr>

              <tr className="border">
                <td className="py-2">5</td>
                <td className="py-2">자유</td>
                <td className="py-2">건강에 좋은 음식</td>
                <td className="py-2">강지애</td>
                <td className="py-2">2024/06/07</td>
                <td className="py-2">0</td>
              </tr>

              <tr className="border">
                <td className="py-2">6</td>
                <td className="py-2">자유</td>
                <td className="py-2">치아에 좋은 습관을 찾자</td>
                <td className="py-2">박현준</td>
                <td className="py-2">2024/06/07</td>
                <td className="py-2">2</td>
              </tr>

              <tr className="border">
                <td className="py-2">7</td>
                <td className="py-2">자유</td>
                <td className="py-2">How to Make Cocktails</td>
                <td className="py-2">John Doe</td>
                <td className="py-2">2024/06/06</td>
                <td className="py-2">7</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
