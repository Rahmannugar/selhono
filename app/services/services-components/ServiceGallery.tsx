import { dmSerifFont, jostFont } from "@/app/util/font";
import Image from "next/image";

const ServiceGallery = () => {
  return (
    <section className="my-20 xl:mb-48 2xl:mb-0 space-y-20 sm:space-y-[-1.875rem] md:space-y-[-0.625rem] lg:space-y-16 xl:space-y-32">
      <article className="text-center space-y-3 flex flex-col justify-center items-center">
        <h2
          className={`${dmSerifFont.className} text-[#292F36] text-[1.5rem] md:text-[1.875rem] lg:text-[2.5rem]`}
        >
          How We Work
        </h2>
        <p
          className={`${jostFont.className} text-[#4D5053] md:text-[1.125rem] lg:text-[1.25rem] break-words  sm:max-w-[28.125rem] md:max-w-[34.375rem] lg:max-w-[43.875rem]`}
        >
          It is a long established fact will be distracted.Lorem Ipsum is simply
          dummy text of the printing and typesetting industry.
        </p>
      </article>

      <article className="space-y-20 sm:space-y-[-12.5rem] md:space-y-[-6.25rem] lg:space-y-20 2xl:space-y-24 h-fit">
        {/* one */}
        <div className="sm:flex relative space-y-[-2.5rem] sm:space-y-0 sm:justify-between sm:items-center h-full sm:space-x-10 2xl:space-x-20">
          <div className="relative w-full max-w-[26.563rem] mx-auto sm:max-w-[39.063rem] 2xl:w-[39.063rem] h-[30.313rem]">
            <Image
              src="https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736507986/services-1_aw93wt.png"
              alt="services-1"
              fill
              className="object-contain"
            />
          </div>
          <h1
            className={`${dmSerifFont.className} text-[#C76904] absolute right-0 top-16 text-[2.5rem] sm:hidden`}
          >
            01
          </h1>

          <div className="sm:max-w-[27rem] flex flex-col sm:space-y-5 lg:space-y-10">
            <div className="hidden sm:flex items-end justify-end">
              <h1
                className={`${dmSerifFont.className} text-[#C76904] text-[2.5rem] md:text-[3.125rem] lg:text-[3.75rem] xl:text-[5rem]`}
              >
                01
              </h1>
            </div>
            <div>
              <h2
                className={`${dmSerifFont.className} text-[#292F36] text-[1.25rem] md:text-[1.5rem] lg:text-[1.875rem]`}
              >
                Concepts & Details
              </h2>
              <p
                className={`${jostFont.className} text-[#4D5053] md:text-[1.125rem] lg:text-[1.25rem] `}
              >
                It is a long established fact will be distracted. Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>
        </div>

        {/* two */}
        <div className="flex flex-col-reverse sm:flex-row relative sm:space-y-0 sm:justify-between sm:items-center h-full sm:space-x-10 2xl:space-x-20">
          <div className="sm:max-w-[27rem] mt-[-2.5rem] sm:mt-0 flex flex-col sm:space-y-5 lg:space-y-10">
            <div className="hidden sm:flex items-start justify-start">
              <h1
                className={`${dmSerifFont.className} text-[#C76904] text-[2.5rem] md:text-[3.125rem] lg:text-[3.75rem] xl:text-[5rem]`}
              >
                02
              </h1>
            </div>
            <div>
              <h2
                className={`${dmSerifFont.className} text-[#292F36] text-[1.25rem] md:text-[1.5rem] lg:text-[1.875rem]`}
              >
                Idea for Work
              </h2>
              <p
                className={`${jostFont.className} text-[#4D5053] md:text-[1.125rem] lg:text-[1.25rem] `}
              >
                It is a long established fact will be distracted. Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>
          <div className="relative w-full max-w-[26.563rem] mx-auto sm:max-w-[39.063rem] 2xl:w-[39.063rem] h-[30.313rem]">
            <Image
              src="https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736507987/services-2_l0qwm5.png"
              alt="services-2"
              fill
              className="object-contain"
            />
          </div>
          <h1
            className={`${dmSerifFont.className} text-[#C76904] absolute left-0 top-0 sm:top-16 text-[2.5rem] sm:hidden`}
          >
            02
          </h1>
        </div>

        {/* three */}
        <div className="sm:flex relative sm:justify-between space-y-[-2.5rem] sm:space-y-0 sm:items-center h-full sm:space-x-10 2xl:space-x-20">
          <div className="relative w-full max-w-[26.563rem] mx-auto sm:max-w-[39.063rem] 2xl:w-[39.063rem] h-[30.313rem]">
            <Image
              src="https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736508366/services-3_qi4xts.png"
              alt="services-3"
              fill
              className="object-contain"
            />
          </div>
          <h1
            className={`${dmSerifFont.className} text-[#C76904] absolute right-0 top-16 text-[2.5rem] sm:hidden`}
          >
            03
          </h1>

          <div className="sm:max-w-[27rem] flex flex-col sm:space-y-5 lg:space-y-10">
            <div className="hidden sm:flex items-end justify-end">
              <h1
                className={`${dmSerifFont.className} text-[#C76904] text-[2.5rem] md:text-[3.125rem] lg:text-[3.75rem] xl:text-[5rem]`}
              >
                03
              </h1>
            </div>
            <div>
              <h2
                className={`${dmSerifFont.className} text-[#292F36] text-[1.25rem] md:text-[1.5rem] lg:text-[1.875rem]`}
              >
                Design
              </h2>
              <p
                className={`${jostFont.className} text-[#4D5053] md:text-[1.125rem] lg:text-[1.25rem] `}
              >
                It is a long established fact will be distracted. Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>
        </div>

        {/* four */}
        <div className="flex flex-col-reverse sm:flex-row relative sm:justify-between sm:items-center h-full sm:space-x-10 2xl:space-x-20">
          <div className="sm:max-w-[27rem] flex flex-col mt-[-2.5rem] sm:mt-0 sm:space-y-5 lg:space-y-10">
            <div className="hidden sm:flex items-start justify-start">
              <h1
                className={`${dmSerifFont.className} text-[#C76904] text-[2.5rem] md:text-[3.125rem] lg:text-[3.75rem] xl:text-[5rem]`}
              >
                04
              </h1>
            </div>
            <div>
              <h2
                className={`${dmSerifFont.className} text-[#292F36] text-[1.25rem] md:text-[1.5rem] lg:text-[1.875rem]`}
              >
                Perfection
              </h2>
              <p
                className={`${jostFont.className} text-[#4D5053] md:text-[1.125rem] lg:text-[1.25rem] `}
              >
                It is a long established fact will be distracted. Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>
          <div className="relative w-full max-w-[26.563rem] mx-auto sm:max-w-[39.063rem] 2xl:w-[39.063rem] h-[30.313rem]">
            <Image
              src="https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736508370/services-4_ohc8yt.png"
              alt="services-4"
              fill
              className="object-contain"
            />
          </div>
          <h1
            className={`${dmSerifFont.className} text-[#C76904] absolute left-0 top-0 sm:top-16 text-[2.5rem] sm:hidden`}
          >
            04
          </h1>
        </div>
      </article>
    </section>
  );
};
export default ServiceGallery;
