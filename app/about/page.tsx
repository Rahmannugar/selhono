import Slider from "./about_components/Slider";

const page = () => {
  return (
    <main>
      <div>
        <Slider />
      </div>
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
