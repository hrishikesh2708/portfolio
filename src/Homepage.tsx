import ProjectHero from "@/components/project/ProjectHero.tsx";
import Introduction from "@/components/introduction/Introduction";
import Skills from "./components/skills/Skills";
import AboutMeHero from "@/components/about/AboutMeHero";

export default function HomePage() {
  return (
    <>
      <Introduction />
      <AboutMeHero />
      <Skills />
      <ProjectHero />
    </>
  );
}