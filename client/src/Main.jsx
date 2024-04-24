import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Mainpage from "./pages/mainpage/mainpage";
import Mypage from './pages/mypage/mypage';
import Login from './pages/login/login';
import Join from './pages/join/join';
import Notice from "./pages/notice/notice";
import Chatting from './pages/chatting/chatting'
import GetInfo from "./pages/getInfo/getInfo";

export default function Main() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
              <Route index element={<Mainpage/>}/>
              <Route path="mypage" element={<Mypage/>}/>
              <Route path="notice" element={<Notice/>}/>
              {/* Assume notice.id and event.id are meant to be dynamic paths */}
              <Route path="notice/:noticeId" element={<Notice/>}/>
              <Route path="event/:eventId" element={<Notice/>}/> {/* Corrected assuming this should be a different route */}
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/join" element={<Join/>}/>
            <Route path="/getInfo" element={<GetInfo/>}/>
            <Route path="/chatting" element={<Chatting/>}/>
        </Routes>
      </BrowserRouter>
  );
}
