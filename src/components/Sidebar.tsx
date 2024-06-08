"use client"
import { LIST_SIDEBAR } from "@/constants/ListSidebar";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

type itemList = {
  id: number;
  title: string;
};

export default function Sidebar() {
  const [activeSidebarValue, setActiveSidebarValue] = useState("T-Shirts");

  const changeActiveHandler = (item: itemList) => {
    setActiveSidebarValue(item.title);
  };

  return (
    <section className="flex flex-col items-start gap-3 max-w-48 pt-4 px-4">
      <ul className="w-full flex flex-col items-start gap-2">
        {LIST_SIDEBAR.map((item) => (
          <li key={item.id} className="hover:scale-125 transition-transform duration-300 cursor-pointer">
            <p
              className={cn(
                item.title == activeSidebarValue
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
