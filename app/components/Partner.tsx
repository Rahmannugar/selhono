import Image from "next/image";

const Partner = () => {
  return (
    <section className="mb-28 md:mb-40">
      <aside className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14 xl:gap-28 max-w-[75.625rem]">
        <div className="relative w-full lg:w-[18.75rem] h-[3rem] lg:h-[6.25rem]">
          <Image
            src="/images/buffer.png"
            alt="buffer"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="relative w-full lg:w-[22.75rem] h-[3rem] lg:h-[6.25rem]">
          <Image
            src="/images/big-commerce.png"
            alt="big-commerce"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="relative w-full lg:w-[22.625rem] h-[3rem] lg:h-[6.25rem]">
          <Image
            src="/images/uon.png"
            alt="uon"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="relative w-[5.625rem] mx-[20%] sm:mx-[30%] md:mx-[40%] h-[3rem] lg:h-[5.625rem]">
          <Image
            src="/images/fourth.png"
            alt="fourth"
            fill
            priority
            className="object-cover"
          />
        </div>
      </aside>
    </section>
  );
};
export default Partner;
