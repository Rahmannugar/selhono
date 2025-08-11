import ProjectHero from "./project-components/ProjectHero";
import ProjectTab from "./project-components/ProjectTab";

export const dynamic = "force-static";

const ProjectPage = () => {
  return (
    <main>
      <ProjectHero />
      <div className="xl:px-20 px-5 lg:px-16 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center sm:px-10">
        <ProjectTab />
      </div>
    </main>
  );
};
export default ProjectPage;

export const generateMetadata = () => {
  return {
    title: "Project",
    description:
      "New and existing projects crafted by Selhono Interior Designs",
  };
};
