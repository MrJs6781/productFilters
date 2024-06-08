import { create } from "zustand";

export type Actions = {
  updateSortHandler: (sortValue: string) => void;
  updateColorHandler: (colorValue: string) => void;
  updatePriceHandler: (priceValue: string) => void;
  updateTypeHandler: (typeValue: string) => void;
};

export type data = {
  sort: string;
  color: string;
  price: string;
  type: string;
};

export const useLanguageStore = create<data & Actions>()((set) => ({
  sort: "all",
  color: "",
  price: "",
  type: "",
  updateSortHandler: (newSortValue: string) => set({ sort: newSortValue }),
  updateColorHandler: (newColorValue: string) => set({ sort: newColorValue }),
  updatePriceHandler: (newPriceValue: string) => set({ sort: newPriceValue }),
  updateTypeHandler: (newTypeValue: string) => set({ sort: newTypeValue }),
}));
