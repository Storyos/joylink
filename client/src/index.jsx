import React from "react";
import ReactDOM from 'react-dom/client';
import Main from "./Main";

import './index.css' // tailwindcss 적용을 위한 css 파일


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
            <Main />
    </React.StrictMode>
)
