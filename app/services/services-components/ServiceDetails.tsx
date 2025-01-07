import { dmSerifFont, jostFont } from "@/app/util/font";
import Link from "next/link";

const ServiceDetails = () => {
  const servicesArray = [
    {
      id: 0,
      title: "Project Plan",
    },
    {
      id: 1,
      title: "Interior Work",
    },
    {
      id: 2,
      title: "Retail Design",
    },
    {
      id: 3,
      title: "2d/3d Art Work",
    },
    {
      id: 4,
      title: "Interior Work",
    },
    {
      id: 5,
      title: "Decoration Work",
    },
  ];
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-10 my-10">
      {servicesArray.map((service) => (
        <Link href="/services/single-service">
          <div
            key={service.id}
            className="max-w-[358px] mx-auto py-10 w-full flex flex-col justify-center items-center hover:text-[#C76904] hover:bg-[#F9F9F9] rounded-[30px] ease-in transition-all duration-300"
          >
            <h2
              className={`${dmSerifFont.className} text-[18px] md:text-[20px] lg:text-[25px]`}
            >
              {service.title}
            </h2>
            <p
              className={`${jostFont.className} md:text-[18px] lg:text-[22px] text-center mt-3 lg:mt-5`}
            >
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>

            <button
              className={`font-semibold md:text-[18px] mt-7 lg:mt-10 ${jostFont.className}`}
            >
              Read More
            </button>
          </div>
        </Link>
      ))}
    </section>
  );
};
export default ServiceDetails;
