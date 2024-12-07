"use client";

import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { dmSerifFont, jostFont } from "../util/font";

const Count = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.7 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mt-16 md:mt-20 lg:mt-36 flex justify-between space-x-1 text-center items-center w-full lg:max-w-[65.438rem] xl:max-w-[75.625rem]"
    >
      <div
        className={`text-[1.5rem] sm:text-[1.875rem] md:text-[2.5rem] lg:text-[3.75rem] xl:text-[5.313rem] text-[#CDA274] ${dmSerifFont.className}`}
      >
        {inView && <CountUp start={0} duration={2.5} end={12} />}
        <h2
          className={`text-[0.75rem] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.375rem] text-[#4D5053] ${jostFont.className}`}
        >
          Years of Experience
        </h2>
      </div>

      <div className="w-[0.063rem] h-[8.125rem] bg-[#CDA274]"></div>

      <div
        className={`text-[1.5rem] sm:text-[1.875rem] md:text-[2.5rem] lg:text-[3.75rem] xl:text-[5.313rem] text-[#CDA274] ${dmSerifFont.className}`}
      >
        {inView && <CountUp start={0} duration={2} end={1074} />}
        <h2
          className={`text-[0.75rem] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.375rem] text-[#4D5053] ${jostFont.className}`}
        >
          Success Project
        </h2>
      </div>

      <div className="w-[0.063rem] h-[8.125rem] bg-[#CDA274]"></div>

      <div
        className={`text-[1.5rem] sm:text-[1.875rem] md:text-[2.5rem] lg:text-[3.75rem] xl:text-[5.313rem] text-[#CDA274] ${dmSerifFont.className}`}
      >
        {inView && <CountUp start={0} duration={2.5} end={98} />}
        <h2
          className={`text-[0.75rem] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.375rem] text-[#4D5053] ${jostFont.className}`}
        >
          Active Project
        </h2>
      </div>

      <div className="w-[0.063rem] h-[8.125rem] bg-[#CDA274]"></div>

      <div
        className={`text-[1.5rem] sm:text-[1.875rem] md:text-[2.5rem] lg:text-[3.75rem] xl:text-[5.313rem] text-[#CDA274] ${dmSerifFont.className}`}
      >
        {inView && <CountUp start={0} duration={2} end={583} />}
        <h2
          className={`text-[0.75rem] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.375rem] text-[#4D5053] ${jostFont.className}`}
        >
          Happy Customers
        </h2>
      </div>
    </section>
  );
};

export default Count;
