"use client";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SORT_OPTION } from "@/constants/ListSidebar";
import { ChevronDown } from "lucide-react";
import { useFilterData } from "@/stores/FilterStore";

export function DropdownMenuRadioGroupDemo() {
  const { updateSortHandler , sort } = useFilterData();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className="flex items-end gap-1 group">
          <p className="cursor-pointer font-bold text-[16px]">sort by</p>
          <ChevronDown className="w-5 h-5 text-gray-700 group-hover:text-gray-900" />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuRadioGroup
          value={sort}
          onValueChange={(value) => {
            updateSortHandler(value);
          }}
        >
          {SORT_OPTION.map((item) => (
            <DropdownMenuRadioItem value={item}>
              {item}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
