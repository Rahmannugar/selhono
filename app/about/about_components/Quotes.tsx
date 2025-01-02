import { dmSerifFont, jostFont } from "@/app/util/font";
import Image from "next/image";

const Quotes = () => {
  return (
    <section className="mt-20 px-5 sm:px-10 lg:px-16">
      <article className="text-[#292F36] flex flex-col text-center space-y-7 w-fit mx-auto border-l-[3px] px-4 border-r-[3px] border-[#000000]">
        <p className={`${dmSerifFont.className} text-[30px] sm:max-w-[600px]`}>
          I like an interior that defies labeling. I don&apos;t really want
          someone to walk into a room and know that I did it
        </p>
        <h2 className={`${jostFont.className} text-[20px]`}>BUNNY WILLIAMS</h2>
      </article>

      <article className="mt-24 md:mt-28 flex flex-col">
        <div className="flex flex-col-reverse sm:flex-row sm:justify-center sm:items-center sm:space-x-10">
          <div className="text-justify flex flex-col mx-auto">
            <h1
              className={`${dmSerifFont.className} text-[#292F36] text-[40px]`}
            >
              What We Do
            </h1>
            <p
              className={`sm:max-w-[500px] text-[20px] mt-3 md:mt-5 text-[#4D5053] ${jostFont.className}`}
            >
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
            <button className="rounded-[18px] sm:self-start mt-7 md:mt-10 text-white bg-[#292F36] flex items-center justify-center space-x-3 py-5 px-8 shadow-md hover:bg-gray-900 transition-all duration-300">
              <h2>Our Concept</h2>
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 8.4353L14.7232 8.29845M9.61818 1.91125L16.1412 8.43424L9.48677 15.0886"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="relative w-full sm:max-w-[600px] h-[400px] md:h-[500px]">
            <Image
              src="/images/quotes-1.jpg"
              alt="quotes-1"
              fill
              className="object-cover rounded-tl-[100px]"
            />
          </div>
        </div>
      </article>
    </section>
  );
};
export default Quotes;
