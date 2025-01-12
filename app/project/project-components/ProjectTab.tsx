"use client";

import { jostFont } from "@/app/util/font";
import { useState, useCallback } from "react";
import ProjectCategory from "./ProjectCategory";
import { CATEGORIES } from "./projectImages";

const ProjectTab = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(CATEGORIES.BEDROOM);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleCategoryChange = useCallback(
    (index: number) => {
      if (currentIndex === index) return;

      setIsTransitioning(true);
      setCurrentIndex(index);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    },
    [currentIndex]
  );

  const categories = [
    { id: CATEGORIES.BATHROOM, label: "Bathroom" },
    { id: CATEGORIES.BEDROOM, label: "Bedroom" },
    { id: CATEGORIES.KITCHEN, label: "Kitchen" },
    { id: CATEGORIES.LIVING_AREA, label: "Living Area" },
  ];

  return (
    <section className="mt-10 space-y-10">
      <nav
        className={`${jostFont.className} bg-white w-full mx-auto text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem] font-semibold text-[#292F36] border border-[#CDA274] flex justify-between items-center max-w-[55rem] 2xl:w-[55rem] rounded-[1.125rem] h-[3.75rem] md:h-[4.063rem] lg:h-[4.685rem] overflow-hidden`}
      >
        {categories.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => handleCategoryChange(id)}
            className={`
              relative cursor-pointer w-full h-full rounded-[1.125rem]
              transition-all duration-300 ease-in-out
              hover:bg-[#CDA274] hover:text-white
              ${currentIndex === id ? "bg-[#CDA274] text-white" : ""}
            `}
          >
            <h2 className="relative z-10 transition-transform duration-300 ease-in-out transform hover:scale-105">
              {label}
            </h2>
          </button>
        ))}
      </nav>

      <div
        className={`
        transform transition-all duration-300 ease-in-out
        ${
          isTransitioning
            ? "opacity-0 translate-y-4"
            : "opacity-100 translate-y-0"
        }
      `}
      >
        <ProjectCategory currentIndex={currentIndex} />
      </div>
    </section>
  );
};

export default ProjectTab;
