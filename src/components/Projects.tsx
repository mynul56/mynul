import { Github, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import placeholder from "@/assets/placeholder.svg";

interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  language: string;
  stargazers_count: number;
  forks_count: number;
}

const Projects = () => {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/users/mynul56/repos?sort=updated");
        if (!response.ok) throw new Error("Failed to fetch projects");
        const repos = await response.json();
        setProjects(repos);
      } catch (err) {
        setError("Failed to load projects");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="py-32 bg-muted">
      <div className="container mx-auto px-6">
        {isLoading ? (
          <div className="text-center text-muted-foreground">Loading projects...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="space-y-8 max-w-6xl mx-auto">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Featured Projects</h2>
              <a 
                href="https://github.com/mynul56" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                title="View All GitHub Projects"
                aria-label="View all projects on GitHub profile"
              >
                <Github size={16} />
                View All Projects
              </a>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={project.name + index}
                  className="group bg-card rounded-lg p-4 hover:shadow-lg transition-all"
                >
                  <div className="mb-4">
                    <h3 className="text-lg font-medium mb-2">{project.name.replace(/-/g, " ")}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description || "No description available"}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.topics.map((topic) => (
                      <span 
                        key={topic} 
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                    {project.language && (
                      <span className="text-xs bg-muted px-2 py-1 rounded-full">
                        {project.language}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        ⭐ {project.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        🔄 {project.forks_count}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:text-foreground text-muted-foreground transition-colors"
                        title="View Source Code"
                        aria-label="View project source code on GitHub"
                      >
                        <Github size={16} />
                      </a>
                      {project.homepage && (
                        <a
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:text-foreground text-muted-foreground transition-colors"
                          title="View Live Demo"
                          aria-label="View live demo of the project"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
