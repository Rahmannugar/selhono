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
      <ul className="sm:flex space-y-10 sm:space-y-0 sm:justify-center sm:space-x-5 md:space-x-10 sm:items-center">
        {works.map((work) => (
          <li
            className="flex flex-col justify-center items-center text-center"
            key={work.id}
          >
            <div className="space-y-3 lg:space-y-4">
              <h1
                className={`${dmSerifFont.className} text-[#292F36] text-lg lg:text-[1.563rem]`}
              >
                {work.title}
              </h1>
              <p
                className={`${jostFont.className} text-[#4D5053] lg:max-w-[358px] lg:text-[1.375rem]`}
              >
                {work.body}
              </p>
            </div>
            <button
              className={`flex items-center font-semibold space-x-2 mt-5 sm:mt-7 lg:mt-12 lg:text-lg ${jostFont.className}`}
            >
              <h2>Read More</h2>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.92944 8.43529L15.6526 8.29844M10.5476 1.91125L17.0706 8.43424L10.4162 15.0886"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Work;
