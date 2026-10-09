import CloudField from "./components/CloudField";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Activity from "./components/Activity";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-sky-100">
      <CloudField />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Activity />
      <Contact />
    </main>
  );
}
