import Head from "next/head";
import Slider from "./about/about_components/Slider";
import Advert from "./components/Advert";
import Count from "./components/Count";
import Details from "./components/Details";
import Hero from "./components/Hero";
import Mart from "./components/Mart";
import News from "./components/News";
import Partner from "./components/Partner";
import Review from "./components/Review";
import Work from "./components/Work";

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
        <link
          rel="preload"
          href="https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736507578/news-1_jhzplz.png"
          as="image"
          type="image/png"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736507969/news-2_u6uyag.png"
          as="image"
          type="image/png"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736507970/news-3_qtwl9r.png"
          as="image"
          type="image/png"
          crossOrigin="anonymous"
        />
      </Head>
      <main>
        <Slider />
        <div className="overflow-hidden mt-16 xl:px-20 px-5 lg:px-16 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center sm:px-10">
          <Hero />
          <Work />
          <Details />
          <Review />
          <Partner />
          <Mart />
          <Count />
          <News />
        </div>

        <div>
          <Advert />
        </div>
      </main>
    </>
  );
};
export default page;
