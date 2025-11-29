import ProjectHero from "@/components/project/ProjectHero.tsx";
import Introduction from "@/components/introduction/Introduction";
import AboutMe from "@/components/about/AboutMe.tsx";
import Skills from "./components/skills/Skills";

export default function HomePage() {
  return (
    <>
      <Introduction />
      <AboutMe />
      <Skills />
      <ProjectHero />
    </>
  );
}