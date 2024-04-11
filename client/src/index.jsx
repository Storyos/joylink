import React from "react";
import ReactDOM from 'react-dom/client'
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import './index.css' // tailwindcss 적용을 위한 css 파일

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Header />
        <h1 className="m-20 text-3xl font-bold underline">테일윈드 테스트 - src/index.jsx</h1>
        <Footer />
    </React.StrictMode>
)

