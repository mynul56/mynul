import { ArrowDown } from "lucide-react";
import mynulPhoto from "@/assets/mynul.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-background flex items-center overflow-hidden">
      <div className="container mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Stats */}
            <div className="flex gap-12 text-sm">
              <div>
                <div className="text-3xl font-light mb-1">4+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-light mb-1">3.51</div>
                <div className="text-muted-foreground">CGPA in CSE</div>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="font-heading font-light text-7xl md:text-8xl lg:text-9xl tracking-tight">
                Hello
              </h1>
              <p className="text-lg text-foreground/70 max-w-md">
                — I'm Md. Mynul Islam, a Software Developer specializing in Web, Mobile, AI specialst
              </p>
            </div>

            {/* Scroll Down */}
            <button 
              onClick={() => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                  const offsetTop = aboutSection.offsetTop;
                  window.scrollTo({
                    top: offsetTop - 80, // Account for fixed header
                    behavior: 'smooth'
                  });
                }
              }}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group animate-bounce"
            >
              <ArrowDown className="w-4 h-4" />
              Discover More
            </button>
          </div>

          {/* Right side - Photo */}
          <div className="relative animate-fade-in transform lg:translate-y-[-100px]">
            <div className="aspect-[3/4] relative overflow-hidden rounded-2xl">
              <img
                src={mynulPhoto}
                alt="Md. Mynul Islam - Software Developer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 animate-bounce">
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
