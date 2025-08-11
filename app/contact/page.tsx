import Image from "next/image";
import Contact from "./contact-components/Contact";
import DynamicMapWrapper from "./contact-components/DynamicMapWrapper";
import { getMapData } from "../lib/mapData";
import { Metadata } from "next";

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
          <DynamicMapWrapper center={mapData.center} />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;

export const metadata: Metadata = {
  title: "Contact",
  description: "Selhono Interior Designs contact page",
};
