import Image from "next/image";
import { dmSerifFont, interFont } from "../util/font";

const Hero = () => {
  return (
    <section className="relative">
      <div className="h-[37.5rem] lg:h-[47.375rem] w-full max-w-[96rem] 2xl:w-[75.625rem] relative">
        <Image
          src="/images/hero.png"
          alt="hero-image"
          fill
          priority
          className="object-cover rounded-tl-[5rem] rounded-br-[5rem]"
        />
      </div>

      <div className="absolute top-16 left-7 space-y-5">
        <div className={`text-white space-y-2 `}>
          <h1
            className={`xl:text-[4.063rem] lg:text-[3.438rem] md:text-[2.5rem] text-[1.5rem] leading-[150%] sm:text-[2.188rem] ${dmSerifFont.className}`}
          >
            Let's make your
            <span className="block">home beautiful together</span>
          </h1>
          <p
            className={`md:max-w-[29.375rem] max-w-[15.625rem] sm:max-w-[21.875rem] text-sm sm:text-base leading-[150%] md:text-lg lg:text-[1.375rem] ${interFont.className}`}
          >
            There are many variations of the passages of lorem Ipsum
            fromavailable, majority.
          </p>
        </div>

        <button
          className={`${interFont.className} bg-[#CDA274] rounded-[1.125rem] text-white flex items-center justify-center space-x-2 py-4 px-7 text-sm md:text-lg`}
        >
          <h1 id="Get started">Get started</h1>

          <svg
            aria-labelledby="Get started"
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 8.43536L14.7232 8.29851M9.61818 1.91132L16.1412 8.4343L9.48677 15.0887"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};
export default Hero;
