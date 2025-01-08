import { dmSerifFont, jostFont } from "@/app/util/font";
import Image from "next/image";

const BlogPost = () => {
  return (
    <section className="mt-10 md:mt-16">
      <div className="max-w-[850px] 2xl:w-[850px] mx-auto px-5 sm:px-7 rounded-[20px] flex justify-between items-center w-full h-[70px] lg:h-[101px] bg-[#F4F0EC]">
        <input
          type="text"
          placeholder="Search"
          id="search"
          aria-label="Search"
          className="text-[#CDA274] md:text-[18px] w-full bg-inherit focus:outline-none placeholder:text-[#CDA274]"
        />
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.5881 24.2898L20.4826 18.1691C21.9525 16.2073 22.746 13.8195 22.7434 11.3659C22.7434 5.09879 17.6573 0 11.4059 0C5.1544 0 0.0683594 5.09879 0.0683594 11.3659C0.0683594 17.633 5.1544 22.7318 11.4059 22.7318C13.8533 22.7345 16.2352 21.939 18.192 20.4654L24.2975 26.5862C24.6065 26.8631 25.0096 27.011 25.424 26.9994C25.8384 26.9877 26.2326 26.8175 26.5257 26.5237C26.8188 26.2298 26.9886 25.8346 27.0002 25.4192C27.0118 25.0038 26.8643 24.5997 26.5881 24.2898ZM3.30765 11.3659C3.30765 9.76023 3.7826 8.1906 4.67244 6.85552C5.56229 5.52043 6.82705 4.47986 8.30681 3.86539C9.78657 3.25092 11.4148 3.09015 12.9857 3.4034C14.5566 3.71666 15.9996 4.48987 17.1322 5.62526C18.2647 6.76066 19.036 8.20724 19.3485 9.78208C19.6609 11.3569 19.5006 12.9893 18.8876 14.4727C18.2747 15.9562 17.2367 17.2241 15.905 18.1162C14.5732 19.0083 13.0075 19.4844 11.4059 19.4844C9.25887 19.4818 7.20056 18.6257 5.6824 17.1037C4.16425 15.5818 3.31022 13.5183 3.30765 11.3659Z"
            fill="#CDA274"
          />
        </svg>
      </div>

      <article className="mt-10">
        <h1
          className={`${dmSerifFont.className} text-[#292F36] text-[1.5rem] md:text-[1.875rem] lg:text-[2.5rem]`}
        >
          Latest Post
        </h1>
        <div className="mt-5 sm:flex space-y-7 sm:space-x-10 xl:space-x-16 sm:space-y-0">
          <div className="relative h-[350px] md:h-[400px] w-full max-w-[649px] xl:w-[649px]">
            <Image
              src="/images/blogpost.jpg"
              alt="blog-post"
              fill
              priority
              className="rounded-[30px] object-cover"
            />
          </div>

          <div className="sm:max-w-[463px] w-full">
            <h2
              className={`${dmSerifFont.className} text-[1.125rem] sm:text-[1.25rem] text-[#292F36] lg:text-[1.563rem]`}
            >
              Low Cost Latest Invented Interior Designing Ideas
            </h2>
            <p
              className={`${jostFont.className} sm:text-[1.125rem] text-[#4D5053] lg:text-[1.375rem] text-justify mt-3`}
            >
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
              dignissim maximus.posuere in.Contrary to popular belief. <br />
              <br /> Lorem Ipsum is not simply random text. It has roots in a
              piece of classica.
            </p>
            <div className="flex justify-between items-center w-full mt-6 sm:mt-12">
              <h3
                className={`${jostFont.className} text-[#4D5053] text-[0.875rem] lg:text-[1rem]`}
              >
                26 December,2022
              </h3>
              <div className="flex justify-center cursor-pointer items-center w-[2.5rem] h-[2.5rem] lg:w-[2.813rem] lg:h-[2.813rem] xl:w-[3.25rem] xl:h-[3.25rem] bg-[#F4F0EC] duration-300 ease-in transition-colors hover:bg-[#CDA274] rounded-full">
                <svg
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.77199 14.6855L7.71484 7.99983L1.77199 1.31412"
                    stroke="#292F36"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
export default BlogPost;
