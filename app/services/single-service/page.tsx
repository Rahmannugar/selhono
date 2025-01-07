import SingleServiceHero from "./single-service-components/SingleServiceHero";

const page = () => {
  return (
    <main>
      <SingleServiceHero />
      <div className="xl:px-20 px-5 lg:px-16 2xl:flex 2xl:justify-center 2xl:items-center sm:px-10"></div>
    </main>
  );
};
export default page;

export const generateMetadata = () => {
  return {
    title: "Single Service",
    description: "Indiviual services offered by Selhono Interior Designs",
  };
};
