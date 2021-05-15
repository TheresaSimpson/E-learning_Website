import create from "zustand";

export const useUserStore = create((set) => ({
  user: {
    token: "",
    isLoggedIn: false,
  },
  setUser: (token) =>
    set((state) => ({ user: { token: token, isLoggedIn: true } })),
  logOut: () => set((state) => ({ user: { token: "", isLoggedIn: false } })),
}));
