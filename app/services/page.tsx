import Advert from "../components/Advert";
import ServiceDetails from "./services-components/ServiceDetails";
import ServiceGallery from "./services-components/ServiceGallery";
import ServiceHero from "./services-components/ServiceHero";

const ServicesPage = () => {
  return (
    <main>
      <ServiceHero />
      <div className="xl:px-20 px-5 lg:px-16 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center sm:px-10">
        <ServiceDetails />
        <ServiceGallery />
      </div>
      <Advert />
    </main>
  );
};
export default ServicesPage;

export const generateMetadata = () => {
  return {
    title: "Services",
    description: "Services offered by Selhono Interior Designs",
  };
};
