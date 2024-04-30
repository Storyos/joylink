import MyInfo from "../../components/myInfo/myInfo"

export default function clubManagement(){
  return(
    <div className="flex">
      <div className="w-1/5">
        <MyInfo />
      </div>
      <div className="w-4/5">
        <div>
          <h1>게시글 제목</h1>
          <div className=" p-5 border border-yellow-500 ...">
            <h2 className=" m-5 p-5 border border-yellow-500 ...">게시글 내용</h2>
            <h2 className=" m-5 p-5 border border-yellow-500 ...">작성한 댓글</h2>
            <div className=" m-5 p-5 border border-yellow-500 ...">
              <h2>댓글 작성</h2>
              <button>작성하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

