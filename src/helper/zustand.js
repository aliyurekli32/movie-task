import { create } from 'zustand'

const useAuth = create((set) => ({
  user: JSON.parse(window.localStorage.getItem('user')) || {},
  authZus: JSON.parse(window.localStorage.getItem('authZus')) || false,
  setAuth: () => set((state) => ({ authZus: true })),
  removeAuth: () => set({ authZus: false }),
  setUser: (data) => set((state)=>({user: data})),
  removeUser: ()=> set({user:{}}),
}))
export default useAuth;