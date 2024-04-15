import './clubIntro.css'
import Header from '../../components/header/header';

function CbIntro() {
  return (
    <div className="App-Container">
      <Header></Header>
      <div className="Box">
        <div className="Top">
          <div className="BoxTitle">동아리 상세 설명</div>
          <div className="Content"></div>
        </div>
        <div className="Apply-Button">신청</div>
      </div>
      <div className="Footer">푸터</div>
    </div>
  );
}

export default CbIntro;
