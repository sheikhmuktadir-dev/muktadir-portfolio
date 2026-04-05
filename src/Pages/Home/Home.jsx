import About from "../../Components/About/About";
import Experience from "../../Components/Experience/Experience";
import Hero from "../../Components/Hero/Hero";
import Skills from "../../Components/Skills/Skills";
import Work from "../../Components/Work/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Experience />
      <Skills />
    </>
  );
}
