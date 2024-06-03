import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../../zustand/useUserStore";
import { supabase } from "../../App";

export default function MyInfo() {
  const [club_position, setClubPosition] = useState("게스트");
  const [my_comments, setMyComments] = useState("0");
  const [my_posts, setMyPosts] = useState("0");
  const { user } = useUserStore(); // zustand 상태관리
  const navigate = useNavigate(); // useNavigate 훅 초기화

  const handleClubManagementClick = () => {
    // club_position 검증
    const isManager = club_position === "임원";

    if (isManager) {
      navigate("/clubManagementPage"); // 검증 성공 시 페이지 이동
    } else {
      alert("이 페이지에 접근할 권한이 없습니다."); // 검증 실패 시 경고 메시지
    }
  };

  useEffect(() => {
    if (!user) {
      alert("로그인이 필요한 서비스 입니다.");
      navigate('/');
      return;
    }

    async function getClubPosition() {
      const { data, error } = await supabase
        .from("members") // 멤버 테이블에서
        .select("club_position") // 해당 속성을 가져옴
        .eq("user_seq", user.user_seq) // 찾는 조건
        .single();
      if (data) {
        setClubPosition(data.club_position);
      }
    }
    async function getComments() {
      let { count, error } = await supabase
        .from("comments") // 댓글 테이블에서
        .select("*", { count: "exact" })
        .eq("user_seq", user.user_seq);
      if (count) {
        setMyComments(count);
      }
    }

    async function getPosts() {
      let { count, error } = await supabase
        .from("posts") // 포스트 테이블에서
        .select("*", { count: "exact" })
        .eq("user_seq", user.user_seq);
      if (count) {
        setMyPosts(count);
      }
    }

    getClubPosition();
    getComments();
    getPosts();
  }, [user, navigate]);

  const handleOpenChatting = () => {
    window.open(
      "/chatting",
      "chatting",
      "width=445, height=490, top=300, left=450"
    );
  };

  return (
    <div className="p-5 m-12 border rounded-xl font-custom">
      <div className="p-1 m-2">
        <h2 className="text-lg font-extrabold">내 정보</h2>
        <br></br>
        <div className="space-y-1 text-sm">
          <h3>회원등급 : {club_position}</h3>
          <h3>게시글 수 : {my_posts}</h3>
          <h3>댓글 수 : {my_comments}</h3>
        </div>
        <br></br>
      </div>

      <div className="border-t"></div>
      <div className="p-1 my-6 font-bold">
        <button className="m-1" onClick={handleClubManagementClick}>
          관리 (관리자 기능)
        </button>
      </div>

      <div className="border-t"></div>

      <div className="p-1 my-6 font-bold">
        <button onClick={handleOpenChatting}>채팅</button>
      </div>

      <div className="border-t"></div>

      <div className="p-1 my-6 font-bold">
        <Link to="/ViewAccountPage">
          <button>장부</button>
        </Link>
      </div>

      <div className="my-6 border-t"></div>

      <div className="p-1">
        <div className="font-bold">카테고리</div>
        <br></br>
        <div className="flex flex-col space-y-2 text-gray-600">
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
