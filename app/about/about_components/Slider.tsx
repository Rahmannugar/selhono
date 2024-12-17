"use client";

import { dmSerifFont } from "@/app/util/font";
import Image from "next/image";
import { useState } from "react";

const Slider = () => {
  const sliderImages = [
    {
      name: "about-1",
      url: "/images/about-1.jpg",
    },
    {
      name: "about-2",
      url: "/images/about-2.jpg",
    },
    {
      name: "about-3",
      url: "/images/about-3.jpg",
    },
    {
      name: "about-4",
      url: "/images/about-4.jpg",
    },
    {
      name: "about-5",
      url: "/images/about-5.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(2);
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === sliderImages.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index: any) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative h-[356px]">
      <div className="relative w-full h-full">
        <Image
          fill
          priority
          key={currentIndex}
          alt={sliderImages[currentIndex].name}
          src={sliderImages[currentIndex].url}
        />
      </div>

      <div className="flex justify-between items-center w-full absolute top-[40%] px-5 md:px-10">
        {/* left slider */}
        <div className="cursor-pointer" onClick={handlePrevious}>
          <svg
            width="42"
            height="74"
            viewBox="0 0 42 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.46447 33.4645C-0.488155 35.4171 -0.488155 38.5829 1.46447 40.5355L33.2843 72.3553C35.2369 74.308 38.4027 74.308 40.3553 72.3553C42.308 70.4027 42.308 67.2369 40.3553 65.2843L12.0711 37L40.3553 8.71573C42.308 6.76311 42.308 3.59728 40.3553 1.64466C38.4027 -0.307961 35.2369 -0.307961 33.2843 1.64466L1.46447 33.4645ZM6 32H5L5 42H6L6 32Z"
              fill="white"
            />
          </svg>
        </div>
        {/* right slider */}
        <div className="cursor-pointer" onClick={handleNext}>
          <svg
            width="42"
            height="74"
            viewBox="0 0 42 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.5355 40.5355C42.4882 38.5829 42.4882 35.4171 40.5355 33.4645L8.71573 1.64466C6.76311 -0.307961 3.59728 -0.307961 1.64466 1.64466C-0.307961 3.59728 -0.307961 6.76311 1.64466 8.71573L29.9289 37L1.64466 65.2843C-0.307961 67.2369 -0.307961 70.4027 1.64466 72.3553C3.59728 74.308 6.76311 74.308 8.71573 72.3553L40.5355 40.5355ZM36 42H37V32H36V42Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <div className="flex absolute top-[50%] space-y-5 flex-col justify-center items-center">
        <h1
          className={`${dmSerifFont.className} text-white text-[30px] lg:text-[70px]`}
        >
          About Us
        </h1>
        <div className="flex space-x-2">
          {sliderImages.map((_, index) => (
            <div
              className={`${
                index == currentIndex ? "bg-[#4D5053]" : "bg-white"
              } h-[15px] w-[15px] rounded-full`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Slider;
