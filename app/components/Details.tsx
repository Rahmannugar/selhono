import Image from "next/image";
import { dmSerifFont, interFont, jostFont } from "../util/font";

const Details = () => {
  return (
    <section className="my-28 md:my-40 sm:flex items-center sm:space-x-[-6.25rem] md:space-x-[-7.5rem] lg:space-x-[-10.625rem] xl:space-x-[-15%] 2xl:justify-center">
      <div className="relative">
        <div className="relative h-[25rem] w-full sm:w-[20rem] md:w-[27rem] md:h-[35rem] lg:w-[36rem] xl:w-[40.813rem] lg:h-[43.75rem]">
          <Image
            src="/images/details-1.png"
            alt="hero-image"
            fill
            priority
            className="object-fill"
          />
        </div>
        <div className="absolute top-14 md:top-24 lg:top-36 left-7 text-white">
          <div className="space-y-5">
            <h1
              className={`${dmSerifFont.className} lg:text-[3.438rem] md:text-[2rem] text-[1.25rem] max-w-[13.75rem] lg:max-w-[23rem]`}
            >
              We create art for modern life
            </h1>
            <p
              className={`font-medium ${jostFont.className} lg:text-[1.375rem] text-[0.875rem] md:text-[1rem] max-w-[12.5rem] md:max-w-[20.25rem]`}
            >
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
          </div>
          {/* contact  */}
          <div className="flex items-center space-x-4 mt-5 md:mt-7">
            <div className="lg:w-[5.813rem] lg:h-[5.813rem] md:w-[5rem] md:h-[5rem] w-[3.5rem] h-[3.5rem] rounded-full bg-white flex justify-center items-center">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.0012 26.0749C30.7796 24.8442 27.8211 23.0482 26.3857 22.3243C24.5164 21.3828 24.3625 21.3059 22.8933 22.3974C21.9133 23.1258 21.2617 23.7766 20.1148 23.532C18.9678 23.2874 16.4754 21.9082 14.2931 19.7329C12.1107 17.5576 10.6514 14.9931 10.4061 13.8501C10.1607 12.7071 10.8222 12.0632 11.5438 11.081C12.5607 9.69642 12.4838 9.46566 11.6145 7.59651C10.9368 6.14273 9.08833 3.21208 7.85291 1.99675C6.53134 0.691421 6.53134 0.92218 5.67979 1.27601C4.98652 1.56768 4.32141 1.92222 3.69281 2.3352C2.46201 3.15285 1.77892 3.83206 1.30122 4.85278C0.823513 5.87351 0.608893 8.26648 3.07588 12.7478C5.54286 17.2292 7.27367 19.5206 10.8561 23.0928C14.4385 26.6649 17.1931 28.5856 21.2202 30.844C26.2018 33.6339 28.1126 33.09 29.1365 32.6131C30.1604 32.1362 30.8427 31.4593 31.662 30.2286C32.076 29.6011 32.4314 28.9368 32.7235 28.2441C33.0781 27.3957 33.3089 27.3957 32.0012 26.0749Z"
                  fill="white"
                  fillOpacity="0.92"
                  stroke="#CDA274"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
            <div className={`${jostFont.className}`}>
              <h1 className="font-bold md:text-lg lg:text-2xl">012345678</h1>
              <h2 className="font-medium lg:text-[1.375rem]">
                Call us Anytime
              </h2>
            </div>
          </div>

          <button
            className={`${interFont.className} bg-[#CDA274] hover:bg-[#7a552e] mt-7 sm:mt-10 lg:mt-14 duration-200 font-medium ease-in rounded-[1.125rem] text-white flex items-center justify-center space-x-3 py-4 lg:py-6 px-5 text-sm md:text-lg`}
          >
            <h1 id="Get Free Estimate">Get Free Estimate</h1>
          </button>
        </div>
      </div>

      <div className="relative h-[25rem] sm:w-[25rem] hidden sm:block md:w-[35rem] md:h-[35rem] lg:w-[39rem] xl:w-[45.813rem] lg:h-[43.75rem]">
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
