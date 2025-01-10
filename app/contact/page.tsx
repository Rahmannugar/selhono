import Image from "next/image";
import Contact from "./contact-components/Contact";
import Map from "./contact-components/Map";
import { getMapData } from "../lib/mapData";

const page = async () => {
  const mapData = await getMapData();
  return (
    <main>
      <div className="relative w-full h-[22.25rem]">
        <Image
          src="https://res.cloudinary.com/thirtythree/image/upload/v1736506878/contact_htrk6v.jpg"
          alt="contact"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="xl:px-20 px-5 lg:px-16 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center sm:px-10">
        <Contact />
        <div className="mt-20 mb-10 w-full">
          <Map center={mapData.center} />
        </div>
      </div>
    </main>
  );
};
export default page;

export const generateMetadata = () => {
  return {
    title: "Contact",
    description: "Selhono Interior Designs contact page",
  };
};
