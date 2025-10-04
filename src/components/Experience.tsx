const Experience = () => {
  const experiences = [
    {
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      position: "Senior Full-Stack Developer",
      duration: "2022 - Present",
      description: "Leading development of scalable web applications and mentoring junior developers.",
      tags: ["React", "Node.js", "TypeScript"],
    },
    {
      company: "Creative Studio Lab",
      location: "New York, NY",
      position: "UX/UI Designer & Developer",
      duration: "2020 - 2022",
      description: "Designed and developed user-centric interfaces for Fortune 500 clients.",
      tags: ["UX", "UI", "Design Systems"],
    },
    {
      company: "StartUp Ventures",
      location: "Remote",
      position: "Freelance Developer",
      duration: "2018 - 2020",
      description: "Helped 30+ startups launch their MVPs with stunning designs and robust code.",
      tags: ["Branding", "Full-Stack", "Consulting"],
    },
  ];

  return (
    <section id="experience" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex items-start justify-between mb-16 max-w-6xl mx-auto">
          <h2 className="text-sm text-muted-foreground">* Experience</h2>
          <p className="text-sm text-muted-foreground max-w-md">
            Over the years, I've built expertise in modern web applications, creating
            intuitive interfaces and powerful backends
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-t border-border pt-6 grid md:grid-cols-12 gap-6 hover:bg-muted/30 transition-colors p-6 -mx-6"
            >
              <div className="md:col-span-4">
                <h3 className="font-medium text-lg mb-1">{exp.company}</h3>
                <p className="text-sm text-muted-foreground">{exp.location}</p>
              </div>
              
              <div className="md:col-span-5">
                <p className="font-medium mb-2">{exp.position}</p>
                <p className="text-sm text-muted-foreground">{exp.description}</p>
              </div>

              <div className="md:col-span-3 flex flex-wrap gap-2 content-start">
                {exp.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-muted text-foreground rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
                <span className="text-xs text-muted-foreground self-end md:w-full md:text-right mt-2">
                  {exp.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
