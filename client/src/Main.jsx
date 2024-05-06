import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Mainpage from "./pages/mainpage/mainpage";
import Mypage from './pages/mypage/mypage';
import CbJoin from "./pages/cbJoin/cbJoin";
import CbSearch from './pages/cbSearch/cbsearch';
import CbCreate from "./pages/cbCreate/cbCreate";
import CbDescription from "./pages/cbDescription/cbDescription";
import Notice from "./pages/notice/notice";
import Login from './pages/login/login';
import Join from './pages/join/join';
import GetInfo from "./pages/getInfo/getInfo";
import Chatting from './pages/chatting/chatting';
import MyClubPage from "./pages/myClubPage/myClub";
<<<<<<<<< Temporary merge branch 1
import ClubManagement from "./pages/myClubPagePost/myClubPagePost";


=========
>>>>>>>>> Temporary merge branch 2
export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}> 
          <Route index element={<Mainpage/>}/>
          <Route path="checkUserInfo" element={<CheckUserInfo></CheckUserInfo>}/>
          <Route path="EmailVerified" element={<EmailVerified/>}></Route>
          <Route path="mypage" element={<Mypage/>}/>
          <Route path="cbSearch" element={<CbSearch/>}/> 
          <Route path="cbCreate" element={<CbCreate/>}/> 
          <Route path="notice" element={<Notice/>}/>
          <Route path="cbDescription" element={<CbDescription/>}/>
          <Route path="cbJoin" element={<CbJoin/>}/>
          <Route path="notice/:noticeId" element={<Notice/>}/>
          <Route path="event/:eventId" element={<Notice/>}/>
          <Route path="myClubPage" element={<MyClubPage/>}/>
          <Route path="clubManagementPost" element={<ClubManagementPost/>}/>
          <Route path="clubManagementPage" element={<ClubManagementPage/>}/>
          <Route path="viewAccountPage" element={<ViewAccountPage/>}/>
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

