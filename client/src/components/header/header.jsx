import './header.css'

export default function Header() {
  
  return (
    <header>
      <div className='header'>
        <div className='header_logo_menu'>
          <a href="#" className="header_logo">JoyLink</a>
          <ul className='header_menu'>
            <ol><a href="#" className="header_club">모임찾기</a></ol>
            <ol><a href="#" className="header_notice">공지사항</a></ol>
            <ol><a href="#" className="header_VR">VR체험관</a></ol>
          </ul>
        </div>
        <div className='header_button'>
          <button className="header_login_button">로그인</button>
          <button className="header_signup_button">회원가입</button>
        </div>
      </div>
    </header>
  )
}