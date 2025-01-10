import Head from "next/head";
import Review from "../components/Review";
import Message from "./about_components/Message";
import Quotes from "./about_components/Quotes";
import Slider from "./about_components/Slider";

const page = () => {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736506766/about-1_iqiiyj.jpg"
          as="image"
          type="image/jpeg"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736506768/about-2_i5htrn.jpg"
          as="image"
          type="image/jpeg"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736506770/about-3_pw26qw.jpg"
          as="image"
          type="image/jpeg"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736506774/about-4_ikdrb8.jpg"
          as="image"
          type="image/jpeg"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736506775/about-5_y5mwbp.jpg"
          as="image"
          type="image/jpeg"
          crossOrigin="anonymous"
        />
      </Head>

      <main>
        <Slider />
        <div className="xl:px-20 px-5 lg:px-16 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center sm:px-10">
          <Quotes />
          <Review />
          <Message />
        </div>
      </main>
    </>
  );
};
export default page;

export const generateMetadata = () => {
  return {
    title: "About",
    description: "About Selhono Interior Designs",
  };
};
