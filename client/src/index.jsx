import React from "react";
import ReactDOM from 'react-dom/client'
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import './index.css' // tailwindcss 적용을 위한 css 파일
import CbCreate from "./pages/cbCreate/cbCreate";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Header />
        <CbCreate/>
        <Footer />
    </React.StrictMode>
)
