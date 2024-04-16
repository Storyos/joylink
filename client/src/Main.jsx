import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mypage from './pages/mypage/mypage';
import Login from './pages/login/login';
import Join from './pages/join/join';
import App from "./App";

export default function Main() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>} >
              <Route path='mypage' element={<Mypage/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='join' element={<Join/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
  );
}