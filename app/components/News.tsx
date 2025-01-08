import Image from "next/image";
import { dmSerifFont, jostFont } from "../util/font";
import Link from "next/link";

const News = () => {
  const blogItems = [
    {
      id: 0,
      label: "Kitchen Design",
      image: "/images/blog-1.png",
      title: "Let’s Get Solution For Building Construction Work",
      date: "26 December, 2022 ",
    },
    {
      id: 1,
      label: "Living Design",
      image: "/images/blog-2.png",
      title: "Low Cost Latest Invented Interior Designing Ideas.",
      date: "22 November, 2023 ",
    },
    {
      id: 2,
      label: "Interior Design",
      image: "/images/blog-3.png",
      title: "Best For Any Office & Business Interior Solution",
      date: "4 December, 2023 ",
    },
  ];
  return (
    <section className="mt-28 md:mt-48 lg:mt-56">
      <article className="text-center flex flex-col space-y-1 justify-center items-center">
        <h1
          className={`${dmSerifFont.className} text-[#292F36] text-[1.5rem] md:text-[2.5rem] lg:text-[3.438rem] xl:text-[3.75rem]`}
        >
          Articles & News
        </h1>
        <p
          className={`${jostFont.className} text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] xl:text-[1.75rem] sm:max-w-[28.125rem] md:max-w-[37.5rem] lg:max-w-[48.125rem] text-[#4D5053]`}
        >
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using.
        </p>
      </article>

      <article className="grid grid-cols-1 mt-16 md:mt-28 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full mx-auto max-w-[75.625rem]">
        {blogItems.map((blogItem) => (
          <div
            key={blogItem.id}
            className={`w-full xl:w-[23.875rem] relative cursor-pointer flex flex-col hover:bg-[#F4F0EC] group duration-300 ease-in p-5 rounded-[3.125rem] border border-[#E7E7E7] ${
              blogItem.id == 2 ? "sm:mx-[50%] lg:mx-0" : ""
            }`}
          >
            <Link href="/blog">
              <div className="relative">
                <div className="relative w-full h-[16.875rem] sm:h-[15.625rem] md:h-[18.063rem]">
                  <Image
                    src={blogItem.image}
                    alt={blogItem.label}
                    fill
                    className="rounded-t-[3.125rem]"
                  />
                </div>
                <h1
                  className={`absolute bottom-5 left-5 px-4 rounded-r-[0.5rem] rounded-tl-[0.5rem] py-2  bg-black/50 text-white ${jostFont.className}`}
                >
                  {blogItem.label}
                </h1>
              </div>

              <div className="mt-2 flex flex-col justify-between flex-grow">
                <h1
                  className={`${dmSerifFont.className} text-[1rem] lg:text-[1.375rem] xl:text-[1.563rem] max-w-[18.75rem] text-[#292F36]`}
                >
                  {blogItem.title}
                </h1>

                <div className="flex justify-between items-center w-full mt-auto text-[0.875rem] lg:text-[1rem]">
                  <h2 className={`${jostFont.className} text-[#4D5053]`}>
                    {blogItem.date}
                  </h2>

                  <div className="flex justify-center items-center w-[2.5rem] h-[2.5rem] lg:w-[2.813rem] lg:h-[2.813rem] xl:w-[3.25rem] xl:h-[3.25rem] bg-[#D8A876] duration-300 ease-in group-hover:bg-[#C76904] rounded-full">
                    <svg
                      width="10"
                      height="20"
                      viewBox="0 0 10 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 19L9 10L0.999999 1" fill="#D8A876" />
                      <path
                        d="M1 19L9 10L1 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </article>
    </section>
  );
};
export default News;
