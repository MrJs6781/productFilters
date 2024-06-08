"use client"
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { AccordionDemo } from "@/components/ui/AccordianGroup";
import data from "./../../db.json";
import { useFilterData } from "@/stores/FilterStore";

export default function Home() {
  const { sort } = useFilterData();

  return (
    <main className="w-full h-full flex flex-col">
      <Header />
      <section className="w-full items-start flex flex-col md:flex-row gap-3 pt-4 px-4">
        <div className="w-full flex-row md:flex-col md:max-w-[20%] flex items-start gap-4">
          <Sidebar />
          <AccordionDemo />
        </div>
        <ul className="w-full md:max-w-[80%] grid_parent items-start gap-4 gap-y-8 justify-between">
          {data.map((item) => {
            if (sort == "none") {
              return (
                <li key={item.id} className="w-full h-auto cursor-pointer">
                  <img
                    src={item.src}
                    alt="Image"
                    width={0}
                    height={0}
                    className="w-full h-full bg-gray-200 p-4 rounded-md"
                  />
                  <div className="w-full flex pt-2 items-start justify-between">
                    <span>
                      <p className="text-[12px] font-semibold">
                        color : {item.color}
                      </p>
                      <p className="text-[12px] font-semibold">
                        size : {item.size}
                      </p>
                    </span>
                    <p className="text-[12px] font-semibold">{item.price}$</p>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </section>
    </main>
  );
}
