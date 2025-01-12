import Head from "next/head";
import ProjectHero from "./project-components/ProjectHero";
import ProjectTab from "./project-components/ProjectTab";

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
      <main>
        <ProjectHero />
        <div className="xl:px-20 px-5 lg:px-16 xl:flex xl:flex-col xl:justify-center xl:items-center sm:px-10">
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
