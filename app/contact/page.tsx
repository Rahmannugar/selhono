import Image from "next/image";
import Contact from "./Contact";

const page = () => {
  return (
    <main>
      <div className="relative w-full h-[22.25rem]">
        <Image
          src="/images/contact.jpg"
          alt="contact"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="xl:px-20 px-5 lg:px-16 2xl:flex 2xl:justify-center 2xl:items-center sm:px-10">
        <Contact />
      </div>
    </main>
  );
};
export default page;

export const generateMetadata = () => {
  return {
    title: "Contact",
    description: "Selhono interior Designs contact page",
  };
};
