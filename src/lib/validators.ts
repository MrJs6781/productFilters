import { COLOR_ITEMS, SIZE_ITEMS, SORT_OPTION } from "@/constants/ListSidebar";
import { z } from "zod";

export const productFilterValidator = z.object({
  size: z.array(z.enum(SIZE_ITEMS)),
  price: z.array(z.enum(COLOR_ITEMS)),
  sort: z.enum(SORT_OPTION),
  color: z.tuple([z.number(), z.number()]),
});
