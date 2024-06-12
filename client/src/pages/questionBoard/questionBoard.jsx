import React from "react";
import MyInfo from "../../components/myInfo/myInfo";
import CocktailHeader from "../../components/cocktailHeader";

export default function QuestionBoard() {
  return (
    <div className="mt-32">
      <CocktailHeader></CocktailHeader>
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
              Question board
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
                <td className="py-2">Tips</td>
                <td className="py-2">Introduction to Mixology</td>
                <td className="py-2">Jane Smith</td>
                <td className="py-2">2024/06/01</td>
                <td className="py-2">10</td>
              </tr>
              <tr className="border">
                <td className="py-2">2</td>
                <td className="py-2">Tips</td>
                <td className="py-2">Essential Bar Tools</td>
                <td className="py-2">Mike Johnson</td>
                <td className="py-2">2024/06/03</td>
                <td className="py-2">5</td>
              </tr>
              <tr className="border">
                <td className="py-2">3</td>
                <td className="py-2">Tips</td>
                <td className="py-2">How to Make Cocktails</td>
                <td className="py-2">John Doe</td>
                <td className="py-2">2024/06/06</td>
                <td className="py-2">7</td>
              </tr>
              <tr className="border">
                <td className="py-2">4</td>
                <td className="py-2">Tips</td>
                <td className="py-2">Classic Cocktails</td>
                <td className="py-2">Emily Brown</td>
                <td className="py-2">2024/06/08</td>
                <td className="py-2">8</td>
              </tr>
              <tr className="border">
                <td className="py-2">5</td>
                <td className="py-2">Tips</td>
                <td className="py-2">Shaking vs Stirring</td>
                <td className="py-2">Chris Green</td>
                <td className="py-2">2024/06/10</td>
                <td className="py-2">6</td>
              </tr>
              <tr className="border">
                <td className="py-2">6</td>
                <td className="py-2">Tips</td>
                <td className="py-2">Understanding Spirits</td>
                <td className="py-2">Sarah White</td>
                <td className="py-2">2024/06/12</td>
                <td className="py-2">9</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
