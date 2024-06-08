"use client";
import { LIST_SIDEBAR } from "@/constants/ListSidebar";
import { cn } from "@/lib/utils";
import { useFilterData } from "@/stores/FilterStore";
import React, { useState } from "react";

type itemList = {
  id: number;
  title: string;
};

export default function Sidebar() {
  const { updateTypeHandler, type } = useFilterData();

  const changeActiveHandler = (item: itemList) => {
    updateTypeHandler(item.title);
  };

  return (
    <section className="flex flex-col items-start gap-3 w-full">
      <ul className="w-full flex flex-col items-start gap-2 border-b-2 border-gray-100 pb-4">
        {LIST_SIDEBAR.map((item) => (
          <li
            key={item.id}
            className="hover:scale-125 transition-transform duration-300 cursor-pointer"
          >
            <p
              className={cn(
                item.title == type
                  ? "text-xl font-extrabold"
                  : "text-xl font-medium"
              )}
              onClick={() => changeActiveHandler(item)}
            >
              {item.title}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
