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

export const useFilterData = create<data & Actions>()((set) => ({
  sort: "none",
  color: "",
  price: "",
  type: "T-Shirts",
  updateSortHandler: (newSortValue: string) => set({ sort: newSortValue }),
  updateColorHandler: (newColorValue: string) => set({ color: newColorValue }),
  updatePriceHandler: (newPriceValue: string) => set({ price: newPriceValue }),
  updateTypeHandler: (newTypeValue: string) => set({ type: newTypeValue }),
}));
