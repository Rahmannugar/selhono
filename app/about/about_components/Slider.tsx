"use client";

import { dmSerifFont } from "@/app/util/font";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Slider = () => {
  const sliderImages = [
    {
      name: "about-1",
      url: "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736506766/about-1_iqiiyj.jpg",
    },
    {
      name: "about-2",
      url: "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736506768/about-2_i5htrn.jpg",
    },
    {
      name: "about-3",
      url: "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736506770/about-3_pw26qw.jpg",
    },
    {
      name: "about-4",
      url: "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736506774/about-4_ikdrb8.jpg",
    },
    {
      name: "about-5",
      url: "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736506775/about-5_y5mwbp.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(2);
  const [direction, setDirection] = useState(0);
  const [currentPage, setCurrentPage] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPage(pathname);
  }, [pathname]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === sliderImages.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const sliderVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
    }),
    animate: {
      x: 0,
      transition: {
        x: { type: "spring", stiffness: 200, damping: 30 },
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      transition: {
        x: { type: "spring", stiffness: 200, damping: 30 },
      },
    }),
  };

  return (
    <section className="relative h-[31.25rem] md:h-[22.25rem] overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentIndex}
          variants={sliderVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={direction}
          className="relative md:hidden w-full h-full"
        >
          <Image
            className="object-cover"
            fill
            priority={true}
            key={currentIndex}
            alt={sliderImages[currentIndex].name}
            src={sliderImages[currentIndex].url}
          />
        </motion.div>
      </AnimatePresence>

      {/* Images for md and lg screens */}
      <div className="hidden md:flex h-full space-x-4">
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={`
              relative h-full transition-all duration-500
              ${index === currentIndex ? "w-full" : "md:w-1/3 lg:w-1/5"}
               
              
            `}
          >
            <Image
              src={image.url}
              alt={image.name}
              priority={true}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      <div className="flex justify-between items-center w-full z-20 absolute top-[40%] px-5 md:px-10">
        {/* left slider */}
        <div className="cursor-pointer" onClick={handlePrevious}>
          <svg
            width="36"
            height="60"
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
            width="36"
            height="60"
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

      <div className="absolute top-[45%] z-10 left-0 right-0">
        <div className="flex flex-col items-center space-y-40 md:space-y-24 lg:space-y-12 w-full">
          <h1
            className={`${dmSerifFont.className} text-white text-[2.188rem] sm:text-[2.5rem] md:text-[3.125rem] lg:text-[4.375rem]`}
          >
            {currentPage === "/" ? "SELHONO" : " ABOUT US"}
          </h1>

          {/* slider dots */}
          <div className="flex space-x-3">
            {sliderImages.map((_, index) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                className={`${
                  index === currentIndex ? "bg-[#4D5053]" : "bg-white"
                } h-[0.938rem] w-[0.938rem] cursor-pointer rounded-full`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Slider;
