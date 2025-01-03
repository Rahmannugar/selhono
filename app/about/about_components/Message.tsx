import { dmSerifFont, jostFont } from "@/app/util/font";

const Message = () => {
  return (
    <section className="flex flex-col space-y-12 md:space-y-16 mb-10">
      <div className="flex justify-center items-center">
        <h1
          className={`${dmSerifFont.className} text-[#292F36] max-w-[37.5rem] text-center text-[1.5rem] md:text-[1.875rem] lg:text-[2.5rem]`}
        >
          Creative project? Let's have a productive talk.
        </h1>
      </div>
      <form className={`${jostFont.className}`}>
        <div className="sm:flex space-y-16 sm:space-y-0 sm:space-x-10">
          <input
            type="text"
            placeholder="Name"
            id="name"
            aria-label="Name"
            className="border-[#000000] border-b md:text-[1.125rem] pb-1 lg:text-[1.25rem] text-[#4D5053] placeholder:text-[#4D5053] w-full focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            aria-label="Email"
            className="border-[#000000] border-b md:text-[1.125rem] pb-1 lg:text-[1.25rem] text-[#4D5053] placeholder:text-[#4D5053] w-full focus:outline-none"
          />
        </div>
        <input
          type="text"
          id="message"
          placeholder="Message"
          aria-label="Message"
          className="border-[#000000] border-b md:text-[1.125rem] pb-1 lg:text-[1.25rem] text-[#4D5053] mt-16 placeholder:text-[#4D5053] align-bottom pt w-full focus:outline-none"
        />
        <div className="flex justify-center items-center mt-8">
          <button className="bg-[#292F36] text-[0.875rem] lg:text-[1.125rem] text-white shadow-md rounded-[1.125rem] py-3 px-5">
            Send Now
          </button>
        </div>
      </form>
    </section>
  );
};
export default Message;
