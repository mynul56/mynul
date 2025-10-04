import { ArrowRight } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Halo Digital Agency",
      image: project1,
      category: "Web Design",
    },
    {
      title: "ShopFlow E-commerce",
      image: project2,
      category: "Full-Stack",
    },
    {
      title: "FinTrack Mobile App",
      image: project3,
      category: "UX/UI",
    },
  ];

  return (
    <section className="py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
