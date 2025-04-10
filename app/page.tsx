import AboutMe from "@/components/ui/home/about-me";
import EarthSparkles from "@/components/ui/home/earth-sparkles";
import HelloParticles from "@/components/ui/home/hello-section";
import MySkills from "@/components/ui/home/my-skills";
import ProjectsSection from "@/components/ui/home/project/project-section";

export default function Home() {
  return (
    <>
      <HelloParticles />
      <AboutMe />
      <MySkills />
      <ProjectsSection />
      {/* <ContactMe /> */}
      <EarthSparkles />

    </>
  );
}
