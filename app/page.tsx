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
    <main>
      <div className="overflow-hidden mt-16 xl:px-28 px-5 lg:px-16 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center sm:px-10">
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
  );
};
export default page;
