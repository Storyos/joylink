import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import { BrowserRouter } from 'react-router-dom';

import './index.css' // tailwindcss 적용을 위한 css 파일


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
