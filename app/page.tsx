import Hero from "./components/Hero";

const page = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};
export default page;

export const generateMetadata = () => {
  return {
    title: "Selhono | Home",
    description: "This is the Hompage for Selhono interior Designs",
  };
};
