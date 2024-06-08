export const LIST_SIDEBAR = [
  { id: 1, title: "T-Shirts" },
  { id: 2, title: "Hoodies" },
  { id: 3, title: "Sweatshirts" },
  { id: 4, title: "Accessories" },
] as const;

export const SORT_OPTION = ["none", "price-asc", "price-desc"] as const;

export const COLOR_ITEMS = [
  "White",
  "Purple",
  "Green",
  "Blue",
  "Beige",
] as const;

export const SIZE_ITEMS = ["S", "M", "Lg", "XL"] as const;

export const PRICE_ITEMS = [
  {
    id: 1,
    option: "option-1",
    title: "Any Price",
  },
  {
    id: 2,
    option: "option-2",
    title: "Under 10$",
  },
  {
    id: 3,
    option: "option-3",
    title: "Under 20$",
  },
  {
    id: 4,
    option: "option-4",
    title: "Under 30$",
  },
  {
    id: 5,
    option: "option-5",
    title: "Custom",
  },
] as const;
