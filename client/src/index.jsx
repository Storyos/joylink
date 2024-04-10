import React from "react";
import ReactDOM from 'react-dom/client'
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Header />
        <Footer />
    </React.StrictMode>
)