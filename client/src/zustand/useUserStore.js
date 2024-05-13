import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: null, // 초기값은 null로 설정합니다.
  setUser: (userData) => set({ user: userData }), // 상태를 업데이트하는 함수를 정의합니다.
}));

export default useUserStore;


