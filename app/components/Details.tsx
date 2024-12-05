import Image from "next/image";

const Details = () => {
  return (
    <section className="my-16 md:my-28 sm:flex items-center sm:space-x-[-100px] md:space-x-[-120px] lg:space-x-[-170px] 2xl:space-x-[-220px] 2xl:justify-center">
      <div className="relative h-[37.5rem] w-full 2xl:w-[45rem] lg:h-[43.75rem]">
        <Image
          src="/images/details-1.png"
          alt="hero-image"
          fill
          priority
          className="object-fill"
        />
      </div>

      <div className="relative h-[37.5rem] w-full 2xl:w-[45rem] lg:h-[43.75rem]">
        <Image
          src="/images/details-2.png"
          alt="hero-image"
          fill
          priority
          className="object-fill"
        />
      </div>
    </section>
  );
};
export default Details;
