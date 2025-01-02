import Image from "next/image";
import { dmSerifFont, jostFont } from "../util/font";
import Link from "next/link";

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
            className={`${dmSerifFont.className} lg:text-[3.125rem] sm:text-[2rem] text-[1.5rem]`}
          >
            Wanna join the interno?
          </h1>
          <h2
            className={`${jostFont.className} font-medium lg:text-lg xl:text-[1.375rem]`}
          >
            It is a long established fact will be distracted.
          </h2>
        </div>

        <Link
          href="/contact"
          className={`${jostFont.className} bg-[#CDA274] hover:bg-[#7a552e] font-semibold duration-200 ease-in rounded-[1.125rem] shadow-lg shadow-black flex items-center justify-center space-x-3 md:py-5 md:px-9 py-4 px-6 lg:text-lg`}
        >
          <h1 id="Contact With Us">Contact With Us</h1>
        </Link>
      </div>
    </section>
  );
};
export default Advert;
