import React, { useState } from 'react';
import TestEditor from '../../components/draftEditor';
import CreateModal from '../../components/createModal';
import Button from '@mui/material/Button';

function CbCreate() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    제목: '',
    소개: '',
    태그: '',
    그룹명: '',
    정원: 0,
    비용: '',
    시작일: '',
    종료일: '',
    장소명: '',
    주소: '',
    상세주소: ''
  });

  const handleCreate = () => {
    setShowModal(true);
  };

  // 주소 검색 창 열기
  const openAddressSearch = () => {
    new window.daum.Postcode({
      oncomplete: function(data) {
        setFormData({ ...formData, 주소: data.address });
      }
    }).open();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section className="p-20 mx-auto max-w-screen-2xl bg-f3f4f6">
        <div className='max-w-screen-2xl'>
          <fieldset className="p-4 mb-6 border">
            <legend className="mb-4 text-lg font-bold">모임 만들기</legend>
            <div className="flex justify-between mb-4 space-x-4">
              <div className="flex-grow">
                <input 
                  type="text" 
                  name="제목" 
                  placeholder="제목을 입력하세요 (100자 이내)" 
                  className="w-full mb-4 input" 
                  value={formData.제목}
                  onChange={handleChange}
                />
                <input 
                  type="text" 
                  name="소개" 
                  placeholder="이벤트를 간단하게 소개하세요 (100자 이내)" 
                  className="w-full mb-4 input" 
                  value={formData.소개}
                  onChange={handleChange}
                />
                <input 
                  type="text" 
                  name="태그" 
                  placeholder="태그 (예: #온오프믹스, #스타트업, #창업)" 
                  className="w-full input" 
                  value={formData.태그}
                  onChange={handleChange}
                />
              </div>
              <div className="w-48">
                <img src="/path/to/your/image.jpg" alt="Event" className="w-full h-auto" />
              </div>
            </div>
          </fieldset>

          <fieldset className="p-4 mb-6 border">
            <legend className="mb-4 text-lg font-bold">상세 정보</legend>
            <div>
              <TestEditor />
            </div>
          </fieldset>

          {/* 새로운 섹션 추가 */}
          <fieldset className="p-4 mb-6 border">
            <legend className="mb-4 text-lg font-bold">모임 방법</legend>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <input type="radio" name="recruitmentMethod" value="onOffMix" className="mr-2" />
                <label className="mr-4">조이링크를 통한 모임</label>
                <input type="radio" name="recruitmentMethod" value="externalRecruitment" className="mr-2" />
                <label>외부 모집</label>
              </div>
              <input type="text" placeholder="접수 가능한 신청페이지 URL을 입력해 주세요" className="w-full p-2 border rounded" />
            </div>
            <p className="text-sm text-gray-600">조이링크를 통한 모임은 개설 후 외부 모집으로 변경할 수 없어요. 변경이 필요한 경우 고객센터로 문의하세요.</p>
          </fieldset>

          <fieldset className="p-4 border">
            <legend className="mb-4 text-lg font-bold">그룹 정보</legend>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1 font-medium">그룹명</label>
                <input 
                  type="text" 
                  name="그룹명" 
                  placeholder="예) 개발그룹, 직장인, 1회차 등" 
                  className="w-full p-2 border rounded" 
                  value={formData.그룹명}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">모임 정원</label>
                <input 
                  type="number" 
                  name="정원" 
                  placeholder="0 명" 
                  className="w-full p-2 border rounded" 
                  value={formData.정원}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">비용 설정</label>
              <div className="flex items-center space-x-4">
                <label>
                  <input type="radio" name="비용" value="free" className="mr-2" onChange={handleChange} /> 무료 그룹
                </label>
                <label>
                  <input type="radio" name="비용" value="paid" className="mr-2" onChange={handleChange} /> 참가비가 있는 유료 그룹
                </label>
                <input 
                  type="number" 
                  name="비용" 
                  placeholder="0 원" 
                  className="w-1/2 p-2 border rounded" 
                  value={formData.비용}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">기간 설정</label>
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="date" 
                  name="시작일" 
                  className="w-full p-2 border rounded" 
                  value={formData.시작일}
                  onChange={handleChange}
                />
                <input 
                  type="date" 
                  name="종료일" 
                  className="w-full p-2 border rounded" 
                  value={formData.종료일}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">온/오프라인 설정</label>
              <div className="flex items-center space-x-4">
                <label>
                  <input type="radio" name="onOfflineSetting" value="offline" className="mr-2" /> 오프라인
                </label>
                <label>
                  <input type="radio" name="onOfflineSetting" value="online" className="mr-2" /> 온라인
                </label>
                <label>
                  <input type="radio" name="onOfflineSetting" value="noPlace" className="mr-2" /> 장소 없음
                </label>
              </div>
              <div className="flex items-center mt-2 space-x-2">
                <input 
                  type="text" 
                  name="주소" 
                  placeholder="장소명을 입력해 주세요" 
                  className="w-full p-2 border rounded" 
                  value={formData.주소}
                  onChange={handleChange}
                />
                <button type="button" onClick={openAddressSearch} className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                   검색
                </button>
              </div>
              <input 
                type="text" 
                name="상세주소" 
                placeholder="상세주소를 입력해 주세요" 
                className="w-full p-2 mt-2 border rounded" 
                value={formData.상세주소}
                onChange={handleChange}
              />
            </div>
            <button className="px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600">+ 그룹 추가</button>
          </fieldset>
        </div>
      </section>
      <div className='fixed bottom-0 flex justify-center w-full py-4 space-x-4 bg-black bg-opacity-50'>
        <Button variant="contained" color="primary">미리보기</Button>
        <Button variant="contained" color="primary">임시저장</Button>
        <Button onClick={handleCreate} variant="contained" color="primary">작성완료</Button>
      </div>
      {showModal && <CreateModal message="동아리가 성공적으로 생성되었습니다." onClose={() => setShowModal(false)} />}
    </>
  );
}

export default CbCreate
