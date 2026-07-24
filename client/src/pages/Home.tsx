import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Projects from "@/components/portfolio/Projects";
import About from "@/components/portfolio/About";
import Services from "@/components/portfolio/Services";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import { useReveal } from "@/hooks/useReveal";

export default function Home() {
  useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
