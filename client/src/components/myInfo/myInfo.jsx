import './myInfo.css'

export default function myInfo(){

  return(
    <div className='myInfo'>
      <div className='myInfo_myInfoBox'>
        <h2>내 정보</h2>
        <button>club management</button>
      </div>
      <button>채팅</button>
      <button>장부</button>
      <div className='myInfo_categoryBox'>
        <h3>카테고리</h3>
        
      </div>
    </div>
  )
}

