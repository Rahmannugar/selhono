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
        <div
          key={service.id}
          className="max-w-[22.375rem] mx-auto py-10 w-full flex flex-col justify-center text-center items-center hover:text-[#C76904] hover:bg-[#F9F9F9] rounded-[1.875rem] ease-in transition-all duration-300"
        >
          <Link href="/services">
            <h2
              className={`${dmSerifFont.className} text-[1.25rem] lg:text-[1.563rem]`}
            >
              {service.title}
            </h2>
            <p
              className={`${jostFont.className} text-[1.125rem] lg:text-[1.375rem] text-center mt-3 lg:mt-5`}
            >
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>

            <button
              className={`font-semibold text-[1.125rem] mt-7 lg:mt-10 ${jostFont.className}`}
            >
              Read More
            </button>
          </Link>
        </div>
      ))}
    </section>
  );
};
export default ServiceDetails;
