import Image from "next/image";
import { dmSerifFont, jostFont } from "../util/font";

const Mart = () => {
  const martItems = [
    {
      id: 0,
      name: "mart-1",
      image:
        "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736506888/mart-1_g5p1yv.png",
    },
    {
      id: 1,
      name: "mart-2",
      image:
        "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736506892/mart-2_z4ba4y.png",
    },
    {
      id: 2,
      name: "mart-3",
      image:
        "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736507197/mart-3_wlhcsz.png",
    },
    {
      id: 3,
      name: "mart-4",
      image:
        "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736507197/mart-4_lohbkd.png",
    },
  ];
  return (
    <section className="lg:flex lg:flex-col lg:justify-center lg:items-center">
      <article className="text-center flex flex-col justify-center items-center">
        <h1
          className={`text-[#292F36] text-[1.5rem] md:text-[2.5rem] lg:text-[3.438rem] xl:text-[3.75rem] ${dmSerifFont.className}`}
        >
          Follow Our Projects
        </h1>
        <p
          className={`text-[#4D5053] text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] xl:text-[1.75rem] sm:max-w-[28.125rem] md:max-w-[37.5rem] lg:max-w-[44.813rem] ${jostFont.className}`}
        >
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </article>

      <article className="grid grid-cols-1 gap-16 xl:gap-20 sm:grid-cols-2 py-20 md:py-28">
        {martItems.map((martItem) => (
          <div className="space-y-3" key={martItem.id}>
            <div className="relative w-full min-w-[15.625rem] h-[22.5rem] sm:h-[18.75rem] md:h-[23.75rem] md:min-w-[20rem] lg:w-[28rem] lg:h-[26.25rem] xl:w-[34.188rem] xl:h-[34.25rem]">
              <Image src={martItem.image} alt={martItem.name} fill priority />
            </div>

            <div className="flex justify-between md:min-w-[20rem] lg:w-[28rem] xl:w-[34.188rem]">
              <div>
                <h1
                  className={`${dmSerifFont.className} text-[#292F36] text-[1.125rem] lg:text-[1.563rem]`}
                >
                  Modern bedroom
                </h1>
                <h2
                  className={`${jostFont.className} text-[#4D5053] text-[1rem] lg:text-[1.375rem]`}
                >
                  Decor / Artchitecture
                </h2>
              </div>

              <div className="flex justify-center items-center w-[2.75rem] h-[2.75rem] lg:w-[4.375rem] lg:h-[4.375rem] hover:bg-[#C76904] duration-200 bg-[#D8A876] rounded-full">
                <svg
                  width="10"
                  height="20"
                  viewBox="0 0 10 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 19L9 10L0.999999 1" fill="#D8A876" />
                  <path
                    d="M1 19L9 10L1 1"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};
export default Mart;
