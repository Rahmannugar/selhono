import Image from "next/image";
import { dmSerifFont, jostFont } from "../util/font";

const Advert = () => {
  return (
    <section className="mt-28 relative text-center flex flex-col justify-center items-center">
      <div className="relative min-w-[18.75rem] w-full h-[15.625rem] sm:h-[18.75rem] md:h-[21.875rem] lg:h-[26.875rem]">
        <Image
          src="/images/advert.png"
          alt="advert"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="text-white absolute top-[17%] flex flex-col justify-center items-center space-y-6 sm:space-y-8">
        <div>
          <h1
            className={`${dmSerifFont.className} lg:text-[3.125rem] sm:text-[2rem] text-[1.25rem]`}
          >
            Wanna join the interno?
          </h1>
          <h2
            className={`${jostFont.className} font-medium text-sm sm:text-base lg:text-lg xl:text-[1.375rem]`}
          >
            It is a long established fact will be distracted.
          </h2>
        </div>

        <button
          className={`${jostFont.className} bg-[#CDA274] hover:bg-[#7a552e] font-semibold duration-200 ease-in rounded-[1.125rem] shadow-lg shadow-black flex items-center justify-center space-x-3 md:py-5 md:px-9 py-4 px-6 text-sm md:text-lg`}
        >
          <h1 id="Contact With Us">Contact With Us</h1>

          <svg
            aria-labelledby="Contact With Us"
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
export default Advert;
