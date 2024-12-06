import Image from "next/image";
import { dmSerifFont, jostFont } from "../util/font";

const Mart = () => {
  const martItems = [
    {
      id: 0,
      name: "mart-1",
      image: "/images/mart-1.png",
    },
    {
      id: 1,
      name: "mart-2",
      image: "/images/mart-2.png",
    },
    {
      id: 2,
      name: "mart-3",
      image: "/images/mart-3.png",
    },
    {
      id: 3,
      name: "mart-4",
      image: "/images/mart-4.png",
    },
  ];
  return (
    <section>
      <article className="text-center flex flex-col justify-center items-center">
        <h1
          className={`text-[#292F36] text-[30px] md:text-[40px] lg:text-[55px] xl:text-[60px] ${dmSerifFont.className}`}
        >
          Follow Our Projects
        </h1>
        <p
          className={`text-[#4D5053] text-[18px] md:text-[20px] lg:text-[24px] xl:text-[28px] px-10 sm:px-0 sm:max-w-[360px] md:max-w-[450px] lg:max-w-[717px] ${jostFont.className}`}
        >
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </article>

      <article className="grid grid-cols-1 gap-10 xl:gap-20 md:grid-cols-2 py-20 md:py-28">
        {martItems.map((martItem) => (
          <div className="space-y-3">
            <div className="relative w-full min-w-[250px] h-[350px] md:w-[320px] lg:w-[420px] lg:h-[420px] xl:w-[547px] xl:h-[548px]">
              <Image src={martItem.image} alt={martItem.name} fill priority />
            </div>

            <div className="flex justify-between lg:w-[420px] xl:w-[547px]">
              <div>
                <h1
                  className={`${dmSerifFont.className} text-[#292F36] text-[20px] md:text-[25px]`}
                >
                  Modern bedroom
                </h1>
                <h2
                  className={`${jostFont.className} text-[#4D5053] text-[18px] md:text-[22px]`}
                >
                  Decor / Artchitecture
                </h2>
              </div>

              <div className="flex justify-center items-center w-[50px] h-[50px] md:w-[70px] md:h-[70px] hover:bg-[#ffe1c1] duration-200 bg-[#D8A876] rounded-full">
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
