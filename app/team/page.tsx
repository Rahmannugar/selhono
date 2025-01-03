import TeamHero from "./team-components/TeamHero";
import TeamSection from "./team-components/TeamSection";

const page = () => {
  return (
    <main>
      <TeamHero />
      <div className="xl:px-20 px-5 lg:px-16 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center sm:px-10">
        <TeamSection />
      </div>
    </main>
  );
};
export default page;

export const generateMetadata = () => {
  return {
    title: "Team",
    description: "Selhono interior Designs Team",
  };
};
