import React from "react";
import ReactDOM from 'react-dom/client'
import Mypage from "./pages/mypage/mypage";

import './index.css' // tailwindcss 적용을 위한 css 파일

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Mypage />
    </React.StrictMode>
)

