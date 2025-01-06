import { dmSerifFont } from "@/app/util/font";
import Image from "next/image";

const ServiceHero = () => {
  return (
    <section className="relative">
      <div className="relative w-full h-[22.25rem]">
        <Image
          src="/images/services.jpg"
          alt="team"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 items-center flex justify-center">
        <h1
          className={`${dmSerifFont.className} text-white text-[2.188rem] sm:text-[2.5rem] md:text-[3.125rem] lg:text-[4.375rem]`}
        >
          SERVICES
        </h1>
      </div>
    </section>
  );
};
export default ServiceHero;
