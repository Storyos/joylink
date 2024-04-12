import './mypage.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

export default function Mypage () {


  return (
    <>
      <Header />
      <div className='mypage_box'>
        <h2 className='mypage_title'>MyPage</h2>
        <div className='mypage_content_box'>
          <div className='mypage_menu'>
            <div className='mypage_menu_list'>
              <button>내 정보 수정</button>
              <button>내 동아리</button>
              <button>신청 현황</button>
              <button>쪽지</button>
              <button>북마크</button>
            </div>
          </div>
          <div className='mypage_content'>
            <p className='mypage_content_title'>내정보</p>
            <ul className='mypage_content_list'>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}