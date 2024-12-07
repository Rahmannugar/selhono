import Advert from "./components/Advert";
import Count from "./components/Count";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mart from "./components/Mart";
import News from "./components/News";
import Partner from "./components/Partner";
import Review from "./components/Review";
import Work from "./components/Work";

const page = () => {
  return (
    <main>
      <div className="overflow-hidden mt-16 xl:px-28 px-7 lg:px-16 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center sm:px-10">
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

      <div className="overflow-hidden xl:px-28 px-7 lg:px-16 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center sm:px-10">
        <Footer />
      </div>
    </main>
  );
};
export default page;

export const generateMetadata = () => {
  return {
    title: "Selhono | Home",
    description: "This is the Hompage for Selhono interior Designs",
  };
};
