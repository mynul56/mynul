import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Featured from "@/components/Featured";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Featured />
      <Portfolio />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
