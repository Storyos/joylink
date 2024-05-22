import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChattingModal from "../chattingModal";
import useUserStore from "../../zustand/useUserStore";
import { supabase } from "../../App";

export default function MyInfo() {
  const [club_position,setClubPosition]=useState("게스트");
  const [my_comments,setMyComments]=useState("0");
  const [my_posts,setMyPosts]=useState("0");
  const {user} = useUserStore();

  useEffect(()=>{
    
    async function getClubPosition() {
      const {data, error} = await supabase
      .from('members')
      .select('club_position')
      .eq('user_seq',user.user_seq)
      .single();
      if(data){
        setClubPosition(data.club_position);
      }
    }

    async function getComments() {
      let { count, error } = await supabase
    .from('comments')
    .select('*', { count: 'exact' })
    .eq('user_seq', user.user_seq)
    if(count){
      setMyComments(count);
    }
    }
    async function getPosts() {
      let {count, error} = await supabase
      .from('posts')
      .select('*',{count:'exact'})
      .eq('user_seq',user.user_seq)
      if(count){
        setMyPosts(count);
      }
    }
    getClubPosition();
    getComments();
    getPosts();
  },[])
  
  const handleOpenChatting = () => {
    window.open(
      "/chatting",
      "chatting",
      "width=500, height=500, top=300, left=450"
    );
  };
  return (
    <div className="p-5 m-12 border rounded-xl">
      <div className="p-1 m-2">
        <h2 className="text-lg">내 정보</h2>
        <br></br>
        <div className="space-y-1 text-sm">
          <h3>회원등급 : {club_position}</h3>
          <h3>게시글 수 : {my_posts}</h3>
          <h3>댓글 수 : {my_comments}</h3>
        </div>
        <br></br>
      </div>

      <div className="border-t"></div>
      <div className="p-1 m-2">
        <Link to="/clubManagementPage">
          <button className="m-1">Club Management</button>
        </Link>
      </div>

      <div className="border-t"></div>

      <div className="p-1 m-3">
        <button onClick={handleOpenChatting}>채팅</button>
      </div>

      <div className="border-t"></div>

      <div className="p-1 m-3">
        <Link to="/ViewAccountPage">
          <button>장부</button>
        </Link>
      </div>

      <div className="border-t"></div>

      <div className="p-1 m-3">
        <h3>카테고리</h3>
        <br></br>
        <div className="flex flex-col items-center space-y-2">
          <Link to="/gallery">
            <button>갤러리</button>
          </Link>
          <Link to="/clubNotice">
            <button>동아리 공지사항</button>
          </Link>
          <Link to="/freeBoard">
            <button>자유게시판</button>
          </Link>
          <Link to="/questionBoard">
            <button>질문게시판</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
