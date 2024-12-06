import Image from "next/image";
import { dmSerifFont, jostFont } from "../util/font";

const Review = () => {
  const testimonial = [
    {
      author: "Natasha",
      location: "Moscow, Russia",
      content:
        "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
      image: "/images/natasha.png",
    },
    {
      author: "Raymond Galario",
      location: "London, UK",
      content:
        "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.",
      image: "/images/raymond.png",
    },
    {
      author: "Benny Roll",
      location: "New York, USA",
      content:
        "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.",
      image: "/images/benny.png",
    },
  ];
  return (
    <section className="mb-28 md:mb-40">
      <div className="bg-[#D8A876] flex flex-col space-y-10 h-full sm:h-[42.438rem] w-full max-w-[96rem] 2xl:w-[75.625rem] py-16 md:py-32 lg:py-20 px-7 rounded-[60px]">
        <div className="flex justify-center items-center">
          <h1
            className={`text-white ${dmSerifFont.className} text-center lg:text-[3.125rem] md:text-[2rem] text-[1.25rem] lg:max-w-[547px]`}
          >
            What the People Thinks About Us
          </h1>
        </div>
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 gap-5 space-y-10 sm:space-y-0">
          {testimonial.map((testimony, index) => (
            <div
              key={index}
              className={`bg-white rounded-[40px] cursor-pointer space-y-5 lg:h-[339px] h-[250px] md:h-[300px] sm:max-w-[300px] lg:max-w-[370px] w-full flex flex-col px-7 lg:px-10 py-10 lg:py-12 ${
                index === 2 ? "sm:mx-[50%] md:mx-0" : ""
              }`}
            >
              <div className="flex items-center space-x-5">
                <div className="relative w-[77px] h-[77px]">
                  <Image
                    fill
                    priority
                    className="object-cover rounded-full"
                    src={testimony.image}
                    alt={testimony.author}
                  />
                </div>
                <div>
                  <h1
                    className={`${dmSerifFont.className} font-bold text-[#292F36] text-sm md:text-base lg:text-lg xl:text-[22px]`}
                  >
                    {testimony.author}
                  </h1>
                  <h2
                    className={`${jostFont.className} text-[#4D5053] text-sm md:text-base lg:text-lg xl:text-[22px]`}
                  >
                    {testimony.location}
                  </h2>
                </div>
              </div>
              <div>
                <p
                  className={`${jostFont.className} text-[#4D5053] text-sm md:text-base lg:text-lg xl:text-[22px] max-w-[296px]`}
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
