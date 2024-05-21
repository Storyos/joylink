import React, { useState } from 'react';
import TestEditor from '../../components/draftEditor';
import CreateModal from '../../components/createModal';
import Button from '@mui/material/Button';

function CbCreate() {
  const [showModal, setShowModal] = useState(false);

  const handleCreate = () => {
    setShowModal(true);
  };

  return (
    <>
      <section className="p-20 mx-auto max-w-screen-2xl bg-f3f4f6">
        <div className='max-w-screen-2xl'>
          <fieldset className="p-4 mb-6 border">
            <legend className="mb-4 text-lg font-bold">모임 만들기</legend>
            <div className="flex justify-between mb-4 space-x-4">
              <div className="flex-grow">
                <input type="text" placeholder="제목을 입력하세요 (100자 이내)" className="w-full mb-4 input" />
                <input type="text" placeholder="이벤트를 간단하게 소개하세요 (100자 이내)" className="w-full mb-4 input" />
                <input type="text" placeholder="태그 (예: #온오프믹스, #스타트업, #창업)" className="w-full input" />
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
            <legend className="mb-4 text-lg font-bold">모집 방법</legend>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <input type="radio" name="recruitmentMethod" value="onOffMix" className="mr-2" />
                <label className="mr-4">온오프믹스를 통한 모집</label>
                <input type="radio" name="recruitmentMethod" value="externalRecruitment" className="mr-2" />
                <label>외부 모집</label>
              </div>
              <input type="text" placeholder="접수 가능한 신청페이지 URL을 입력해 주세요" className="w-full p-2 border rounded" />
            </div>
            <p className="text-sm text-gray-600">온오프믹스를 통한 모집은 개설 후 외부 모집으로 변경할 수 없어요. 변경이 필요한 경우 고객센터로 문의하세요.</p>
          </fieldset>

          <fieldset className="p-4 border">
            <legend className="mb-4 text-lg font-bold">그룹 정보</legend>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1 font-medium">그룹명</label>
                <input type="text" placeholder="예) 개발그룹, 직장인, 1회차 등" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block mb-1 font-medium">모집 정원</label>
                <input type="number" placeholder="0 명" className="w-full p-2 border rounded" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">비용 설정</label>
              <div className="flex items-center space-x-4">
                <label>
                  <input type="radio" name="costSetting" value="free" className="mr-2" /> 무료 그룹
                </label>
                <label>
                  <input type="radio" name="costSetting" value="paid" className="mr-2" /> 참가비가 있는 유료 그룹
                </label>
                <input type="number" placeholder="0 원" className="w-1/2 p-2 border rounded" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">기간 설정</label>
              <div className="grid grid-cols-2 gap-4">
                <input type="date" className="w-full p-2 border rounded" />
                <input type="date" className="w-full p-2 border rounded" />
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
              <input type="text" placeholder="장소명을 입력해 주세요" className="w-full p-2 mt-2 border rounded" />
              <input type="text" placeholder="상세주소를 입력해 주세요" className="w-full p-2 mt-2 border rounded" />
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

export default CbCreate;
