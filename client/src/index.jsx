import React from "react";
import ReactDOM from 'react-dom/client'
import MyInfo from './components/myInfo/myInfo'
import Header from './components/header/header'
import MyClubPage from "./pages/myClubPage/myClub";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Header></Header>
        <div style={{ display: 'flex' }}>
            <MyInfo></MyInfo>
            <MyClubPage></MyClubPage>
        </div>
    </React.StrictMode>
)

