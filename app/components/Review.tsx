import Image from "next/image";
import { dmSerifFont, jostFont } from "../util/font";

const Review = () => {
  const testimonial = [
    {
      id: 0,
      author: "Natasha",
      location: "Moscow, Russia",
      content:
        "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
      image:
        "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736507198/natasha_d2iiuf.png",
    },
    {
      id: 1,
      author: "Raymond Galario",
      location: "London, UK",
      content:
        "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.",
      image:
        "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736507976/raymond_yaiijd.png",
    },
    {
      id: 2,
      author: "Benny Roll",
      location: "New York, USA",
      content:
        "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.",
      image:
        "https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736506790/benny_i3kiuh.png",
    },
  ];
  return (
    <section className="mb-28 md:mb-40">
      <div className="bg-[#D8A876] shadow-sm flex flex-col space-y-10 h-full sm:h-[42.438rem] w-full max-w-[96rem] 2xl:w-[75.625rem] py-16 md:py-12 lg:py-20 px-7 rounded-[3.75rem]">
        <div className="flex justify-center items-center">
          <h1
            className={`text-white ${dmSerifFont.className} text-center lg:text-[3.125rem] md:text-[2rem] text-[1.25rem] lg:max-w-[34.188rem]`}
          >
            What the People Thinks About Us
          </h1>
        </div>
        <div className="sm:grid sm:grid-cols-2 mx-auto lg:grid-cols-3 gap-5 space-y-10 sm:space-y-0">
          {testimonial.map((testimony) => (
            <div
              key={testimony.id}
              className={`bg-white shadow-md group hover:text-[#C76904] hover:bg-[#f6f5f5] ease-in transition-all duration-300 rounded-[2.5rem] cursor-pointer space-y-5 lg:h-[21.188rem] h-[15.625rem] sm:max-w-[18.75rem] lg:max-w-[23.125rem] w-full flex flex-col px-5 lg:px-10 py-5 lg:py-12 ${
                testimony.id == 2 ? "sm:mx-[50%] lg:mx-0" : ""
              }`}
            >
              <div className="flex items-center space-x-5">
                <div className="relative w-[4.813rem] h-[4.813rem]">
                  <Image
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    className="object-cover rounded-full"
                    src={testimony.image}
                    alt={testimony.author}
                  />
                </div>
                <div>
                  <h1
                    className={`${dmSerifFont.className} font-bold text-[#292F36] group-hover:text-[#C76904] text-sm md:text-base lg:text-lg xl:text-[1.375rem]`}
                  >
                    {testimony.author}
                  </h1>
                  <h2
                    className={`${jostFont.className} text-[#4D5053] group-hover:text-[#C76904] text-sm md:text-base lg:text-lg xl:text-[1.375rem]`}
                  >
                    {testimony.location}
                  </h2>
                </div>
              </div>
              <div>
                <p
                  className={`${jostFont.className} text-[#4D5053] group-hover:text-[#C76904] text-sm md:text-base lg:text-lg xl:text-[1.375rem] md:max-w-[18.5rem]`}
                >
                  {testimony.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Review;
