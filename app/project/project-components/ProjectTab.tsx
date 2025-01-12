"use client";

import { jostFont } from "@/app/util/font";
import { useState } from "react";
import ProjectCategory from "./ProjectCategory";

const ProjectTab = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  return (
    <section className="mt-10 space-y-10">
      <div
        className={`${jostFont.className} bg-white w-full mx-auto text-[14px] sm:text-[16px] lg:text-[18px] font-semibold text-[#292F36] border border-[#CDA274] flex justify-between items-center max-w-[880px] 2xl:w-[880px] rounded-[18px] h-[75px]`}
      >
        {/* Bathroom */}
        <button
          onClick={() => {
            setCurrentIndex(1);
          }}
          className={`cursor-pointer ${
            currentIndex === 1 ? "bg-[#CDA274] text-white" : ""
          } hover:bg-[#CDA274] hover:text-white h-full my-auto rounded-[18px]`}
        >
          <h2>Bathroom</h2>
        </button>
        {/* Bedroom*/}
        <button
          onClick={() => {
            setCurrentIndex(2);
          }}
          className={`cursor-pointer ${
            currentIndex === 2 ? "bg-[#CDA274] text-white" : ""
          } hover:bg-[#CDA274] hover:text-white h-full my-auto rounded-[18px]`}
        >
          <h2>Bedroom</h2>
        </button>
        {/* Kitchen */}
        <button
          onClick={() => {
            setCurrentIndex(3);
          }}
          className={`cursor-pointer ${
            currentIndex === 3 ? "bg-[#CDA274] text-white" : ""
          } hover:bg-[#CDA274] hover:text-white h-full my-auto rounded-[18px]`}
        >
          <h2>Kitchen</h2>
        </button>
        {/* Living Area */}
        <button
          onClick={() => {
            setCurrentIndex(4);
          }}
          className={`cursor-pointer ${
            currentIndex === 4 ? "bg-[#CDA274] text-white" : ""
          } hover:bg-[#CDA274] hover:text-white h-full my-auto rounded-[18px]`}
        >
          <h2>Living Area</h2>
        </button>
      </div>

      <ProjectCategory currentIndex={currentIndex} />
    </section>
  );
};
export default ProjectTab;
