import Link from "next/link";
import { dmSerifFont, jostFont } from "../util/font";

const Work = () => {
  const works = [
    {
      id: 0,
      title: "Project Plan",
      body: "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
    {
      id: 0,
      title: "Interior Work",
      body: "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
    {
      id: 0,
      title: "Realization",
      body: "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
  ];
  return (
    <section className="mt-16 md:mt-20 lg:mt-24">
      <ul className="sm:flex space-y-10 sm:space-y-0 sm:justify-center border-2 rounded-xl shadow-sm p-5 sm:space-x-5 md:space-x-10 sm:items-center">
        {works.map((work) => (
          <li
            className="flex flex-col justify-center border p-3 shadow-sm items-center text-center group hover:text-[#C76904] hover:bg-[#F9F9F9] ease-in transition-all duration-300"
            key={work.id}
          >
            <Link href="/services">
              <div className="space-y-3 lg:space-y-4">
                <h1
                  className={`${dmSerifFont.className} text-[#292F36] group-hover:text-[#C76904] text-lg lg:text-[1.563rem]`}
                >
                  {work.title}
                </h1>
                <p
                  className={`${jostFont.className} text-[#4D5053] lg:max-w-[22.375rem] group-hover:text-[#C76904] lg:text-[1.375rem]`}
                >
                  {work.body}
                </p>
              </div>
              <div className="flex justify-center items-center">
                <button
                  className={`font-medium space-x-2 mt-5 sm:mt-7 text-sm lg:mt-12 lg:text-lg ${jostFont.className}`}
                >
                  <h2>READ MORE</h2>
                </button>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Work;
