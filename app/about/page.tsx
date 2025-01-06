import Review from "../components/Review";
import Message from "./about_components/Message";
import Quotes from "./about_components/Quotes";
import Slider from "./about_components/Slider";

const page = () => {
  return (
    <main>
      <Slider />
      <div className="xl:px-20 px-5 lg:px-16 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center sm:px-10">
        <Quotes />
        <Review />
        <Message />
      </div>
    </main>
  );
};
export default page;

export const generateMetadata = () => {
  return {
    title: "About",
    description: "About Selhono Interior Designs",
  };
};
