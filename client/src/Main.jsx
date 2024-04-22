import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mypage from './pages/mypage/mypage';
import Login from './pages/login/login';
import Join from './pages/join/join';
import App from "./App";
import Chatting from './pages/chatting/chatting'
import NoticePageWithSidebar from "./pages/notice/noticepage";

export default function Main() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>} >
              <Route index element={<Mypage/>}/>
              <Route path='mypage' element={<Mypage/>}/>
              <Route path="notice" element={<NoticePageWithSidebar/>}/>
            </Route>
            <Route path='/login' element={<Login/>}/>
            <Route path='/join' element={<Join/>}/>
            <Route path="/chatting" element={<Chatting/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}