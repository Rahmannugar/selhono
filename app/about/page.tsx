import Quotes from "./about_components/Quotes";
import Slider from "./about_components/Slider";

const page = () => {
  return (
    <main>
      <Slider />
      <Quotes />
    </main>
  );
};
export default page;

export const generateMetadata = () => {
  return {
    title: "Selhono | About",
    description: "About Selhono interior Designs",
  };
};
