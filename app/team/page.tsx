import Head from "next/head";
import TeamHero from "./team-components/TeamHero";
import TeamSection from "./team-components/TeamSection";

const page = () => {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="https://res.cloudinary.com/thirtythree/image/upload/q_auto,f_auto/v1736508374/team_adryuo.jpg"
          as="image"
          type="image/jpeg"
          crossOrigin="anonymous"
        />
      </Head>

      <main>
        <TeamHero />
        <div className="xl:px-20 px-5 lg:px-16 2xl:flex 2xl:justify-center 2xl:items-center sm:px-10">
          <TeamSection />
        </div>
      </main>
    </>
  );
};
export default page;

export const generateMetadata = () => {
  return {
    title: "Team",
    description: "Selhono Interior Designs Team",
  };
};
