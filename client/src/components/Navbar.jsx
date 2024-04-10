import "./Navbar.css";

function Navbar() {
  return (
    <div className="Nav-Container">
      <div className="Left">
        <div className="Logo">로고</div>
        <div className="Menus">
          <div className="Menu">모임찾기</div>
          <div className="Line">|</div>
          <div className="Menu">공지사항</div>
          <div className="Line">|</div>
          <div className="Menu">vr전시회</div>
        </div>
      </div>
      <div className="Buttons">
        <div className="Button">로그인</div>
        <div className="Button">회원가입</div>
      </div>
    </div>
  );
}

export default Navbar;
