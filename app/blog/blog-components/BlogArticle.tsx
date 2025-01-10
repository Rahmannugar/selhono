import { dmSerifFont } from "@/app/util/font";
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
  ];
  return (
    <section>
      <h1
        className={`${dmSerifFont.className} text-[#292F36] text-[1.5rem] md:text-[1.875rem] lg:text-[2.5rem]`}
      >
        Article & News
      </h1>
      <article>
        {articleArray.map((article) => (
          <div key={article.id}>
            <div className="relative w-[50px] h-[50px]">
              <Image
                src={article.image}
                alt={article.alt}
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};
export default BlogArticle;
