import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../App";
import useUserStore from "../../zustand/useUserStore";

export default function AddFreeBoard() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    date: ""
  });
  const userData = useUserStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toISOString().substring(0, 10);
    setFormData((prevData) => ({
      ...prevData,
      date: formattedDate,
      author: userData.user_name // userData에서 적절한 필드를 사용
    }));
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, author, date } = formData;

    try {
      const { data, error } = await supabase
        .from('freeboard')
        .insert([{ title, author, date }]);

      if (error) throw error;

      console.log("게시글이 성공적으로 추가되었습니다:", data);
      navigate("/freeboard"); // 게시글 목록 페이지로 이동 (경로를 필요에 따라 수정)
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };

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
