
// import React from 'react';

const AgreeInfo = () => {
  return (
    <fieldset className="p-4 mb-6 border">
      <legend className="mb-4 text-lg font-bold">신청자 동의</legend>
      <div className="mb-4">
        <label className="block mb-2">
          <input type="checkbox" className="mr-2" />
          전체 동의
        </label>
        <div className="pl-6">
          <label className="block mb-2">
            <input type="checkbox" className="mr-2" />
            (필수) 개인정보 제3자 제공 동의
            <a href="#" className="ml-2 text-blue-500 hover:underline">내용보기</a>
            <p className="text-sm text-gray-600">신청자의 개인정보가 신청여부 확인 등 이벤트 진행을 위해 개설자에게 제공됩니다.</p>
          </label>
          <label className="block mb-2">
            <input type="checkbox" className="mr-2" />
            (필수) 취소/환불 약관 동의
            <a href="#" className="ml-2 text-blue-500 hover:underline">내용보기</a>
            <p className="text-sm text-gray-600">신청기간 마감 전까지 환불 신청 가능 (결제수단, 사유, 환불 시점에 따라 수수료 차감)</p>
          </label>
        </div>
      </div>
    </fieldset>
  );
};

export default AgreeInfo;
