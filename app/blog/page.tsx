import Head from "next/head";
import BlogArticle from "./blog-components/BlogArticle";
import BlogHero from "./blog-components/BlogHero";
import BlogPost from "./blog-components/BlogPost";

const page = () => {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736506867/blog_vs0lha.jpg"
          as="image"
          type="image/jpeg"
          crossOrigin="anonymous"
        />
      </Head>
      <main>
        <BlogHero />
        <div className="xl:px-20 px-5 lg:px-16 xl:flex xl:flex-col xl:justify-center xl:items-center sm:px-10">
          <BlogPost />
          <BlogArticle />
        </div>
      </main>
    </>
  );
};
export default page;

export const generateMetadata = () => {
  return {
    title: "Blog",
    description: "News and Articles from Selhono Interior Designs",
  };
};
