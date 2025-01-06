import { dmSerifFont } from "../util/font";

const Contact = () => {
  return (
    <section className="mt-20">
      <div className="flex justify-center items-center">
        <h1
          className={`${dmSerifFont.className} text-[#292F36] text-[1.5rem] md:text-[1.875rem] lg:text-[2.5rem]`}
        >
          We love meeting new people and helping them.
        </h1>
      </div>
      <article>
        <aside>
          {/* email */}
          <div>
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="26" cy="26" r="26" fill="white" />
              <path
                d="M18 20.9999L26 27.9999L34 20.9999M17.1154 17.9999H34.8846C36.0529 17.9999 37 18.9513 37 20.1249V32.8749C37 34.0485 36.0529 34.9999 34.8846 34.9999H17.1154C15.9471 34.9999 15 34.0485 15 32.8749V20.1249C15 18.9513 15.9471 17.9999 17.1154 17.9999Z"
                stroke="#CDA274"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h3 aria-label="selhono-email">info@selhono.com</h3>
          </div>

          {/* email */}
          <div>
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="26" cy="26" r="26" fill="white" />
              <path
                d="M18 20.9999L26 27.9999L34 20.9999M17.1154 17.9999H34.8846C36.0529 17.9999 37 18.9513 37 20.1249V32.8749C37 34.0485 36.0529 34.9999 34.8846 34.9999H17.1154C15.9471 34.9999 15 34.0485 15 32.8749V20.1249C15 18.9513 15.9471 17.9999 17.1154 17.9999Z"
                stroke="#CDA274"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h3 aria-label="selhono-email">info@selhono.com</h3>
          </div>
        </aside>
        <form></form>
      </article>
    </section>
  );
};
export default Contact;
