import ProjectHero from "./project-components/ProjectHero";

const page = () => {
  return (
    <main>
      <ProjectHero />
      <div className="xl:px-20 px-5 lg:px-16 xl:flex xl:flex-col xl:justify-center xl:items-center sm:px-10"></div>
    </main>
  );
};
export default page;

export const generateMetadata = () => {
  return {
    title: "Project",
    description: "New and existing projects crafted by Selhono Interior Designs",
  };
};
