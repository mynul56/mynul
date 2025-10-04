import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const Portfolio = () => {
  const portfolioItems = [
    { title: "Brand Identity Design", image: project1 },
    { title: "SaaS Platform UI", image: project2 },
    { title: "Mobile Banking App", image: project3 },
    { title: "E-learning Platform", image: project1 },
    { title: "Portfolio Website", image: project2 },
    { title: "Dashboard Analytics", image: project3 },
  ];

  return (
    <section id="portfolio" className="py-32 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-sm text-muted-foreground mb-16 text-center">
          * Portfolio
        </h2>

        <h3 className="text-3xl md:text-4xl font-light text-center mb-16">
          Latest Works
        </h3>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4 bg-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start">
                <p className="text-sm">{item.title}</p>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="text-sm text-foreground hover:text-muted-foreground transition-colors flex items-center gap-2 mx-auto">
            <span>→ View More</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
