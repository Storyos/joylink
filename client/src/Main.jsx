import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Mainpage from "./pages/mainpage/mainpage";
import Mypage from './pages/mypage/mypage';
import Login from './pages/login/login';
import Join from './pages/join/join';
import Notice from "./pages/notice/notice";
import Chatting from './pages/chatting/chatting'
import NoticePageWithSidebar from "./pages/notice/noticepage";
import CbSearch from "./pages/clubPromotion/cbsearch";

export default function Main() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} >
              <Route index element={<Mainpage/>}/>
              <Route path="mypage" element={<Mypage/>}/>
              <Route path="notice" element={<Notice/>}/>
              <Route path="notice/${notice.id}" element={<Notice/>}/>
              <Route path="notice/${event.id}" element={<Notice/>}/>
              <Route path="clubpromotionweb" element={<CbSearch/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/join" element={<Join/>}/>
            <Route path="/chatting" element={<Chatting/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}