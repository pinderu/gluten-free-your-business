import About from "@/components/about";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Portfolio from "@/components/portfolio";
import SectionDivider from "@/components/section-divider";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </main>
  );
}
