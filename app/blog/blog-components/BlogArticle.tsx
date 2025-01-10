import { dmSerifFont, jostFont } from "@/app/util/font";
import Image from "next/image";

const BlogArticle = () => {
  const articleArray = [
    {
      id: 0,
      alt: "blog-1",
      image: "/images/blog-1.png",
    },
    {
      id: 1,
      alt: "blog-2",
      image: "/images/blog-2.png",
    },
    {
      id: 2,
      alt: "blog-3",
      image: "/images/blog-3.png",
    },
    {
      id: 3,
      alt: "blog-4",
      image: "/images/blogpost.jpg",
    },
  ];
  return (
    <section className="space-y-10 my-16">
      <h1
        className={`${dmSerifFont.className} text-[#292F36] text-[1.5rem] md:text-[1.875rem] lg:text-[2.5rem]`}
      >
        Article & News
      </h1>
      <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-16">
        {articleArray.map((article) => (
          <div
            key={article.id}
            className="w-full mx-auto max-w-[21.25rem] 2xl:w-[21.25rem]"
          >
            <div className="relative w-full h-[22.5rem] lg:h-[25rem]">
              <Image
                fill
                src={article.image}
                alt={article.alt}
                className="object-cover rounded-t-[20px]"
              />
            </div>

            <div className="mt-2">
              <h2
                className={`${dmSerifFont.className} text-[1.125rem] sm:text-[1.25rem] text-[#292F36] lg:text-[1.563rem]`}
              >
                Let&apos;s Get Solution For Building Construction Work
              </h2>
            </div>
            <div className="flex justify-between items-center w-full mt-6">
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
        ))}
      </article>
    </section>
  );
};
export default BlogArticle;
