import Image from "next/image";

const Partner = () => {
  return (
    <section className="mb-28 md:mb-40">
      <aside className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14 xl:gap-28 max-w-[1210px]">
        <div className="relative w-full lg:w-[300px] h-[60px] lg:h-[100px]">
          <Image
            src="/images/buffer.png"
            alt="buffer"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="relative w-full lg:w-[364px] h-[60px] lg:h-[100px]">
          <Image
            src="/images/big-commerce.png"
            alt="big-commerce"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="relative w-full lg:w-[362px] h-[60px] lg:h-[100px]">
          <Image
            src="/images/uon.png"
            alt="uon"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="relative w-[90px] mx-[20%] sm:mx-[30%] md:mx-[40%] h-[60px] lg:h-[90px]">
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
