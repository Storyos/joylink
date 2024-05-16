import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(persist((set) => ({
  user: null,
  setUser: (userData) => set({ user: userData }),
}), {
  name: "user-storage",  // 스토리지에 저장될 키 이름
  getStorage: () => sessionStorage  // 로컬 스토리지 사용
}));


export default useUserStore;


