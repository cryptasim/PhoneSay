import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("phonesay-theme") || "halloween",
  setTheme: (theme) => {
    localStorage.setItem("phonesay-theme", theme);
    set({ theme });
  },
}));

export default useThemeStore;