import Image from "next/image";
import Contact from "./contact-components/Contact";
import dynamic from "next/dynamic";
import { getMapData } from "../lib/mapData";
import { Metadata } from "next";

// Optimize Map component loading
const DynamicMap = dynamic(() => import("./contact-components/Map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[25rem] bg-[#f0f0f0] rounded-2xl flex items-center justify-center">
      <p className="text-[#4D5053] text-lg">Loading map...</p>
    </div>
  ),
});

const ContactPage = async () => {
  const mapData = await getMapData();

  return (
    <main>
      <div className="relative w-full h-[22.25rem]">
        <Image
          src="https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736506878/contact_htrk6v.jpg"
          alt="Contact Selhono Interior Designs"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          className="object-cover"
          quality={100}
        />
      </div>

      <div className="xl:px-20 px-5 lg:px-16 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center sm:px-10">
        <Contact />
        <div className="mt-20 mb-10 w-full">
          <DynamicMap center={mapData.center} />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;

export const generateMetadata = () => {
  return {
    title: "Contact",
    description: "Selhono Interior Designs contact page",
  };
};
