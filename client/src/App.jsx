import { createClient } from '@supabase/supabase-js';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { Outlet } from 'react-router-dom';
// import { useEffect } from 'react';

// 환경변수를 사용하여 Superbase URL 및 키 설정
const supabaseUrl = 'https://vtvkgtqvczyuteenfadw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0dmtndHF2Y3p5dXRlZW5mYWR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyNzUxNDksImV4cCI6MjAyNzg1MTE0OX0.jepRIWNY3wZaaDK9vkRubvol5y9VuhzoPU1CNnuACQo';

// Superbase 클라이언트 생성
const supabase = createClient(supabaseUrl, supabaseKey);

export default function App() {
    // useEffect(()=>{
    //     const now = Date.now();
    //     const lastVisit = sessionStorage.getItem('lastVisit');
    //     const withinThreshold = lastVisit && (now - lastVisit < 5000);

    //     if( withinThreshold){

    //     }else{
    //         window.addEventListener('beforeunload',handleBeforeUnload);
    //     }
    //     sessionStorage.setItem('lastvisit',now);
    //     return () => {
    //         window.removeEventListener('beforeunload',handleBeforeUnload);
    //     };
    // },[]);

    // const handleBeforeUnload = (e) => {
    //     localStorage.clear();
    //     const message = "Are you sure you want to leave?";
    //     e.returnValue = message;
    //     return message;
    // }
    return (
        <>
            <Header />
            <div><Outlet/></div>
            <Footer />
        </>
    );
}

// 필요한 경우, supabase 클라이언트를 다른 컴포넌트에서 재사용하기 위해 export 할 수 있습니다.
export { supabase };
