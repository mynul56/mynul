import { ArrowRight } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      image: project1,
      category: "Web Development",
      link: "https://mynul56.github.io/mynulportfolio/",
    },
    {
      title: "Smart Home UI",
      image: project2,
      category: "Flutter Development",
      link: "https://github.com/mynul56/flutter_smart_home_ui",
    },
    {
      title: "Next.js Matrimony Website",
      image: project3,
      category: "Full-Stack Development",
      link: "https://github.com/mynul56",
    },
  ];

  return (
    <section className="py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer block transition-transform hover:-translate-y-1"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/5] mb-4 bg-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium mb-1">{project.title}</h3>
                  <p className="text-xs text-muted-foreground">{project.category}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
