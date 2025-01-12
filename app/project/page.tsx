import Head from "next/head";
import ProjectHero from "./project-components/ProjectHero";
import ProjectTab from "./project-components/ProjectTab";
import ImagePreloader from "./project-components/ImagePreloader";

const page = () => {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736523942/project_xo3tjq.jpg"
          as="image"
          type="image/jpeg"
          crossOrigin="anonymous"
        />
      </Head>
      <ImagePreloader />
      <main>
        <ProjectHero />
        <div className="xl:px-20 px-5 lg:px-16 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center sm:px-10">
          <ProjectTab />
        </div>
      </main>
    </>
  );
};
export default page;

export const generateMetadata = () => {
  return {
    title: "Project",
    description:
      "New and existing projects crafted by Selhono Interior Designs",
  };
};
