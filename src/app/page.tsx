"use client"
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function Home() {
  const [filter , setFilter] = useState({
    sort : "",
    color : "",
    price : "",
    type : ""
  })
  return (
    <main className="w-full h-full flex flex-col">
      <Header />
      <Sidebar />
    </main>
  );
}
