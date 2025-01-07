import { dmSerifFont, jostFont } from "@/app/util/font";
import Image from "next/image";

const TeamSection = () => {
  const team = [
    {
      id: 0,
      name: "Alex Johnson",
      url: "/images/team-1.png",
    },
    {
      id: 1,
      name: "Natasha Julie",
      url: "/images/team-2.png",
    },
    {
      id: 2,
      name: "John Smith",
      url: "/images/team-3.png",
    },
    {
      id: 3,
      name: "Nora Owen",
      url: "/images/team-4.png",
    },
    {
      id: 4,
      name: "Parker Carter",
      url: "/images/team-5.png",
    },
    {
      id: 5,
      name: "Avery Jackson",
      url: "/images/team-6.png",
    },
    {
      id: 6,
      name: "Luna James",
      url: "/images/team-7.png",
    },
    {
      id: 7,
      name: "Gianna Mateo",
      url: "/images/team-8.png",
    },
  ];
  return (
    <section className="mt-16 sm:mt-24 mb-10">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-16 sm:gap-x-6">
        {team.map((member) => (
          <div key={member.id} className="space-y-4">
            <div className="relative w-full mx-auto max-w-[19.25rem] h-[29.375rem] sm:h-[31.25rem] md:h-[25rem] lg:h-[30.625rem] xl:h-[29.375rem] 2xl:w-[19.25rem]">
              <Image
                src={member.url}
                alt={member.name}
                fill
                className="rounded-[1.875rem] object-cover"
              />
            </div>

            <div className="flex flex-col justify-center items-center space-y-4">
              <div>
                <h2
                  className={`text-[#292F36] text-[1.125rem] sm:text-[1.375rem] ${dmSerifFont.className}`}
                >
                  {member.name}
                </h2>
                <h3
                  className={`text-[#4D5053] text-[0.875rem] sm:text-[1.125rem] ${jostFont.className}`}
                >
                  Design, Australia
                </h3>
              </div>

              <div className="flex items-center space-x-7">
                <svg
                  width="11"
                  height="19"
                  viewBox="0 0 11 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.53622 10.3402L10.0284 7.10583H6.8995V4.99646C6.8995 4.0824 7.32137 3.23865 8.72762 3.23865H10.169V0.461304C10.169 0.461304 8.86825 0.21521 7.63778 0.21521C5.07137 0.21521 3.38387 1.79724 3.38387 4.60974V7.10583H0.501062V10.3402H3.38387V18.2152H6.8995V10.3402H9.53622Z"
                    fill="#292F36"
                  />
                </svg>

                <svg
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.36 4.55896C17.0631 4.03162 17.6959 3.3988 18.1881 2.66052C17.5553 2.94177 16.817 3.15271 16.0787 3.22302C16.8522 2.76599 17.4147 2.06287 17.6959 1.18396C16.9928 1.60583 16.1842 1.92224 15.3756 2.09802C14.6725 1.35974 13.7233 0.937866 12.6686 0.937866C10.6295 0.937866 8.97718 2.59021 8.97718 4.62927C8.97718 4.91052 9.01234 5.19177 9.08265 5.47302C6.02406 5.29724 3.28187 3.82068 1.45374 1.60583C1.13734 2.13318 0.961555 2.76599 0.961555 3.46912C0.961555 4.73474 1.59437 5.85974 2.6139 6.52771C2.01624 6.49255 1.41859 6.35193 0.926399 6.07068V6.10583C0.926399 7.8988 2.19202 9.37537 3.87952 9.72693C3.59827 9.79724 3.24671 9.86755 2.93031 9.86755C2.68421 9.86755 2.47327 9.8324 2.22718 9.79724C2.68421 11.2738 4.05531 12.3285 5.67249 12.3636C4.40687 13.348 2.82484 13.9457 1.10218 13.9457C0.785774 13.9457 0.504524 13.9105 0.223274 13.8754C1.84046 14.9301 3.77406 15.5277 5.88343 15.5277C12.6686 15.5277 16.36 9.93787 16.36 5.05115C16.36 4.87537 16.36 4.73474 16.36 4.55896Z"
                    fill="#292F36"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default TeamSection;
