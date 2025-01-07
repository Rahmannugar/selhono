import ServiceDetails from "./services-components/ServiceDetails";
import ServiceHero from "./services-components/ServiceHero";

const page = () => {
  return (
    <main>
      <ServiceHero />
      <div className="xl:px-20 px-5 lg:px-16 2xl:flex 2xl:justify-center 2xl:items-center sm:px-10">
        <ServiceDetails />
      </div>
    </main>
  );
};
export default page;

export const generateMetadata = () => {
  return {
    title: "Services",
    description: "Services offered by Selhono Interior Designs",
  };
};
