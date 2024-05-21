import React, { useState } from 'react';

const CbJoin = () => {
  const [formData, setFormData] = useState({
    성함: '',
    이메일: '',
    전화번호: '',
    직업: '',
    주소: '',
    자기소개: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // This is where you would handle the form submission, such as sending data to a server.
  };

  return (
    <>
      <div className="p-8 mx-auto my-10 bg-white rounded-lg shadow-lg" style={{ maxWidth: '980px' }}>
        <h1 className="text-xl">신청 정보</h1>
        <img src="https://cdn.pixabay.com/photo/2013/11/03/08/05/cheers-204742_1280.jpg" alt="Event Banner" className="w-full h-auto mb-4 rounded-lg" />
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">지식의 바다속으로 수영해봐요. 독서모임</h2>
          <div className="text-lg font-semibold">신청자 정보 입력</div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">성함</label>
            <input type="text" id="name" name="성함" required onChange={handleChange}
              className="block w-full p-2 mt-1 border border-gray-400 rounded-md shadow-sm" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">이메일</label>
            <input type="email" id="email" name="이메일" required onChange={handleChange}
              className="block w-full p-2 mt-1 border border-gray-400 rounded-md shadow-sm" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">전화번호</label>
            <input type="text" id="phone" name="전화번호" required onChange={handleChange}
              className="block w-full p-2 mt-1 border border-gray-400 rounded-md shadow-sm" />
          </div>
          <h2 className="text-lg font-semibold">추가 정보 입력</h2>
          <div>
            <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">직업</label>
            <input type="text" id="jobTitle" name="직업" onChange={handleChange}
              className="block w-full p-2 mt-1 border border-gray-400 rounded-md shadow-sm" />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">주소</label>
            <input type="text" id="address" name="주소" onChange={handleChange}
              className="block w-full p-2 mt-1 border border-gray-400 rounded-md shadow-sm" />
          </div>
          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">자기소개</label>
            <textarea id="additionalInfo" name="자기소개" rows="3" onChange={handleChange}
              className="block w-full p-2 mt-1 border border-gray-400 rounded-md shadow-sm"></textarea>
          </div>
          <div className="flex justify-between">
            <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
              Submit
            </button>
            <button type="reset" className="px-4 py-2 font-bold text-black bg-gray-300 rounded hover:bg-gray-400">
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};



export default CbJoin;
