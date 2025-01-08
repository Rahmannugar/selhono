import Image from "next/image";
import { dmSerifFont, interFont } from "../util/font";
import Link from "next/link";

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
      <div className="absolute inset-0 bg-black bg-opacity-20 rounded-tl-[6rem] rounded-br-[6rem]"></div>

      <div className="absolute top-28 md:top-16 z-10 left-5 md:left-7 space-y-5">
        <div className={`text-white space-y-2 `}>
          <h1
            className={`xl:text-[4.063rem] lg:text-[3.438rem] md:text-[2.5rem] text-[1.5rem] sm:text-[2.188rem] ${dmSerifFont.className}`}
          >
            Let&apos;s make your
            <span className="block">home beautiful together</span>
          </h1>
          <p
            className={`md:max-w-[29.375rem] max-w-[15.625rem] sm:max-w-[21.875rem] text-sm sm:text-base md:text-lg lg:text-[1.375rem] ${interFont.className}`}
          >
            There are many variations of the passages of lorem Ipsum
            fromavailable, majority.
          </p>
        </div>

        <Link
          href="/project"
          className={`${interFont.className} bg-[#CDA274] hover:bg-[#7a552e] font-medium duration-200 ease-in rounded-[1.125rem] text-white flex items-center justify-center space-x-3 py-4 px-7 w-fit text-sm md:text-lg`}
        >
          <h1 id="Get started">Get started</h1>
        </Link>
      </div>
    </section>
  );
};
export default Hero;
