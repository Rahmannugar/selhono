import { memo } from "react";
import Image from "next/image";
import { dmSerifFont, jostFont } from "@/app/util/font";
import { categoryImages, CATEGORIES } from "./projectImages";

interface Props {
  currentIndex: number;
}

const ProjectCategory = memo(({ currentIndex }: Props) => {
  const getCategoryData = () => {
    switch (currentIndex) {
      case CATEGORIES.BATHROOM:
        return { images: categoryImages.bathroom, title: "Bathroom" };
      case CATEGORIES.BEDROOM:
        return { images: categoryImages.bedroom, title: "Bedroom" };
      case CATEGORIES.KITCHEN:
        return { images: categoryImages.kitchen, title: "Kitchen" };
      case CATEGORIES.LIVING_AREA:
        return { images: categoryImages.livingArea, title: "Living Area" };
      default:
        return { images: categoryImages.bedroom, title: "Bedroom" };
    }
  };

  const { images, title } = getCategoryData();

  return (
    <section className="grid sm:grid-cols-2 gap-16 sm:gap-10 xl:gap-12 mb-16">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`
            transform transition-all duration-500 ease-in-out
            opacity-0 translate-y-4
            animate-[fadeIn_0.3s_ease-in-out_forwards]
            [animation-delay:${index * 100}ms]
          `}
        >
          <div className="relative xl:h-[43.75rem] lg:h-[34.375rem] md:h-[28.125rem] h-[25rem] w-full max-w-[36.25rem] 2xl:w-[36.25rem]">
            <Image
              src={image.url}
              alt={`${title} Images`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
              priority={image.id < 2}
              loading={image.id < 2 ? "eager" : "lazy"}
            />
          </div>
          <div className="flex justify-between items-center w-full mt-6">
            <div>
              <h2
                className={`${dmSerifFont.className} text-[#292F36] text-[1.125rem] md:text-[1.375rem] lg:text-[1.563rem] transition-all duration-300 ease-in-out`}
              >
                Minimal {title}
              </h2>
              <h3
                className={`${jostFont.className} text-[#4D5053] md:text-[1.125rem] lg:text-[1.375rem] transition-all duration-300 ease-in-out`}
              >
                Decor / Architecture
              </h3>
            </div>
            <div className="flex justify-center cursor-pointer items-center w-[2.5rem] h-[2.5rem] lg:w-[2.813rem] lg:h-[2.813rem] xl:w-[3.25rem] xl:h-[3.25rem] bg-[#F4F0EC] transition-all duration-300 ease-in-out hover:bg-[#CDA274] rounded-full group">
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              >
                <path
                  d="M1.77199 14.6855L7.71484 7.99983L1.77199 1.31412"
                  stroke="#292F36"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
});
export default ProjectCategory;
