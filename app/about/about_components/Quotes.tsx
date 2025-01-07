import { dmSerifFont, jostFont } from "@/app/util/font";
import Image from "next/image";
import Link from "next/link";

const Quotes = () => {
  return (
    <section className="mt-20 mb-28 sm:mb-36">
      <article className="text-[#292F36] flex flex-col text-center space-y-7 w-fit mx-auto border-l-[0.188rem] px-4 border-r-[0.188rem] border-[#000000]">
        <p
          className={`${dmSerifFont.className} text-[1.25rem] lg:text-[1.875rem] sm:max-w-[37.5rem]`}
        >
          I like an interior that defies labeling. I don&apos;t really want
          someone to walk into a room and know that I did it
        </p>
        <h2 className={`${jostFont.className} lg:text-[1.25rem]`}>
          BUNNY WILLIAMS
        </h2>
      </article>

      <article className="mt-28 md:mt-32 flex flex-col space-y-24 lg:space-y-32">
        <div className="flex flex-col-reverse sm:flex-row sm:justify-center sm:items-center sm:space-x-10 lg:space-x-16">
          <div className="text-justify flex flex-col mx-auto mt-5 md:mt-0">
            <h1
              className={`${dmSerifFont.className} text-[#292F36] text-[1.5rem] md:text-[1.875rem] lg:text-[2.5rem]`}
            >
              What We Do
            </h1>
            <p
              className={`sm:max-w-[28.125rem] md:text-[1.125rem] lg:text-[1.25rem] mt-3 md:mt-5 text-[#4D5053] ${jostFont.className}`}
            >
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
            <Link href="/services">
              <button className="sm:rounded-[1.125rem] sm:self-start mt-7 md:mt-10 text-white bg-[#292F36] py-3 px-4 lg:py-5 lg:px-8 shadow-md hover:bg-gray-900 transition-all duration-300">
                Our Concept
              </button>
            </Link>
          </div>
          <div className="relative w-full sm:max-w-[37.5rem] 2xl:w-[44.875rem] h-[23.75rem] md:h-[31.25rem]">
            <Image
              src="/images/quotes-1.jpg"
              alt="quotes-1"
              fill
              className="object-cover rounded-tl-[6.25rem]"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:space-x-10 lg:space-x-16">
          <div className="relative w-full sm:max-w-[37.5rem] 2xl:w-[44.875rem] h-[23.75rem] md:h-[31.25rem]">
            <Image
              src="/images/quotes-2.jpg"
              alt="quotes-1"
              fill
              className="object-cover rounded-tr-[6.25rem]"
            />
          </div>
          <div className="text-justify flex flex-col mx-auto mt-5 md:mt-0">
            <h1
              className={`${dmSerifFont.className} text-[#292F36] text-[1.5rem] md:text-[1.875rem] lg:text-[2.5rem]`}
            >
              What We Do
            </h1>
            <p
              className={`sm:max-w-[28.125rem] md:text-[1.125rem] lg:text-[1.25rem] mt-3 md:mt-5 text-[#4D5053] ${jostFont.className}`}
            >
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
            <Link href="/services">
              <button className="sm:rounded-[1.125rem] sm:self-start mt-7 md:mt-10 text-white bg-[#292F36] py-3 px-4 lg:py-5 lg:px-8 shadow-md hover:bg-gray-900 transition-all duration-300">
                <h2>Our Portfolio</h2>
              </button>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};
export default Quotes;
