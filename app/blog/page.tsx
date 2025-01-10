import BlogArticle from "./blog-components/BlogArticle";
import BlogHero from "./blog-components/BlogHero";
import BlogPost from "./blog-components/BlogPost";

const page = () => {
  return (
    <main>
      <BlogHero />
      <div className="xl:px-20 px-5 lg:px-16 xl:flex xl:flex-col xl:justify-center xl:items-center sm:px-10">
        <BlogPost />
        <BlogArticle />
      </div>
    </main>
  );
};
export default page;

export const generateMetadata = () => {
  return {
    title: "Blog",
    description: "News and Articles from Selhono Interior Designs",
  };
};
