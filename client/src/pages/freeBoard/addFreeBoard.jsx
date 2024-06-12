import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../App";
import useUserStore from "../../zustand/useUserStore";

// AddFreeBoard 컴포넌트 정의
export default function AddFreeBoard() {
  // useState 훅을 사용해 formData 상태를 관리
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    date: ""
  });

  // Zustand를 사용하여 userData 상태를 가져옴
  const userData = useUserStore((state) => state.user);

  // useNavigate 훅을 사용하여 페이지 이동을 관리
  const navigate = useNavigate();

  // useEffect 훅을 사용하여 컴포넌트가 마운트될 때 날짜와 작성자 설정
  useEffect(() => {
    // 현재 날짜를 ISO 형식으로 가져옴
    const now = new Date();
    const formattedDate = now.toISOString().substring(0, 10);

    // formData 상태를 업데이트
    setFormData((prevData) => ({
      ...prevData,
      date: formattedDate,
      author: userData.user_name // userData에서 user_name 필드를 사용
    }));
  }, [userData]);

  // 입력 필드 변경 시 formData 상태 업데이트 함수
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // 폼 제출 시 호출되는 함수
  const handleSubmit = async (e) => {
    e.preventDefault(); // 폼 기본 제출 동작 방지
    const { title, author, date } = formData;

    try {
      // Supabase를 사용해 freeboard 테이블에 데이터 삽입
      const { data, error } = await supabase
        .from('freeboard')
        .insert([{ title, author, date }]);

      if (error) throw error; // 오류가 발생하면 예외를 던짐

      console.log("게시글이 성공적으로 추가되었습니다:", data);
      navigate("/freeboard"); // 게시글 목록 페이지로 이동
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };

  // JSX로 컴포넌트 렌더링
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-8">한줄 게시글 작성</h1>
      <form onSubmit={handleSubmit} className="border p-8 w-1/2 rounded-md bg-blue-50">
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border rounded-md px-4 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            readOnly
            className="border rounded-md px-4 py-2 w-full bg-gray-100"
          />
        </div>
        <div className="mb-8">
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border rounded-md px-4 py-2 w-full"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-200"
          >
            등록
          </button>
        </div>
      </form>
    </div>
  );
}


