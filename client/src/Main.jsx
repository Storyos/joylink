import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Mainpage from "./pages/mainpage/mainpage";
import Mypage from './pages/mypage/Mypage';
import CbJoin from "./pages/cbJoin/cbJoin";
import CbSearch from './pages/cbSearch/cbSearch'
import CbDescription from "./pages/cbDescription/cbDescription";
import Notice from "./pages/notice/notice";
import Login from './pages/login/login';
import Join from './pages/join/join';
import GetInfo from "./pages/getInfo/getInfo";
import Chatting from './pages/chatting/chatting';
import MyClubPage from "./pages/myClubPage/myClub";
export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Mainpage/>}/>
          <Route path="mypage" element={<Mypage/>}/>
          <Route path="cbSearch" element={<CbSearch/>}/> 
          <Route path="notice" element={<Notice/>}/>
          <Route path="cbDescription" element={<CbDescription/>}/>
          <Route path="cbJoin" element={<CbJoin/>}/>
          <Route path="notice/:noticeId" element={<Notice/>}/>
          <Route path="event/:eventId" element={<Notice/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/getInfo" element={<GetInfo/>}/>
        <Route path="/chatting" element={<Chatting/>}/>
        <Route path="/myclub" element={<MyClubPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
