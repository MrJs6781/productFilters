"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { AccordionDemo } from "@/components/ui/AccordianGroup";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState({
    sort: "",
    color: "",
    price: "",
    type: "",
  });
  return (
    <main className="w-full h-full flex flex-col">
      <Header />
      <div className="w-full max-w-[20%] flex flex-col items-start gap-4 pt-4 px-4"> 
        <Sidebar />
        <AccordionDemo />
      </div>
    </main>
  );
}
