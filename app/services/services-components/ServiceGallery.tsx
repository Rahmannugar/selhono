import { dmSerifFont, jostFont } from "@/app/util/font";

const ServiceGallery = () => {
  return (
    <section className="my-16">
      <article className="text-center space-y-3 flex flex-col justify-center items-center">
        <h2
          className={`${dmSerifFont.className} text-[#292F36] text-[1.5rem] md:text-[1.875rem] lg:text-[2.5rem]`}
        >
          How We Work
        </h2>
        <p
          className={`${jostFont.className} text-[#4D5053] md:text-[1.125rem] lg:text-[1.25rem] break-words max-w-[320px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[702px]`}
        >
          It is a long established fact will be distracted.Lorem Ipsum is simply
          dummy text of the printing and typesetting industry.
        </p>
      </article>

      <article></article>
    </section>
  );
};
export default ServiceGallery;
