import { create } from "zustand";

interface State {
  openTab: number;
  setOpenTab: (id: number) => void;
}

const usePanelStore = create<State>((set) => ({
  openTab: 0,
  setOpenTab: (id: number) => set({ openTab: id }),
}));

export default usePanelStore;
