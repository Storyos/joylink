import React from "react";
import ReactDOM from 'react-dom/client'
import './index.css' // tailwindcss 적용을 위한 css 파일
import MyComponent from "./zustand/MyComponent";
import Main from "./Main";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Main></Main>
    </React.StrictMode>
)

