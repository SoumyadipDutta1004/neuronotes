import { create } from "zustand";

type SectionState = {
  section: string;
  setSection: (section: string) => void;
};

export const useSectionStore = create<SectionState>((set) => ({
  section: "Dashboard",
  setSection: (section) => set({ section }),
}));
