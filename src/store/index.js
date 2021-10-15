import create from "zustand";
import { parseVacancy } from "./parser";

export const useStore = create((set) => ({
  filterTags: [],
  addTag: (tag) =>
    set((state) => ({
      filterTags: Array.from(new Set([...state.filterTags, tag])),
    })),
  removeTag: (tag) =>
    set((state) => ({ filterTags: state.filterTags.filter((t) => t !== tag) })),
  clear: () => set({ filterTags: [] }),
  vacancies: [],
  getVacancies: () =>
    set((state) =>
      fetch("/data.json")
        .then((res) => res.json())
        .then((res) => {
          set({ vacancies: res.map(parseVacancy) });
        })
    ),
}));
