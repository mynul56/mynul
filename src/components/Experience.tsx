const Experience = () => {
  const experiences = [
    {
      company: "Blend and Bite Foodcart",
      location: "Dhaka, Bangladesh",
      position: "CEO & Founder",
      duration: "2023 - Present",
      description: "Managing daily operations, implementing digital solutions for ordering and inventory management, leading business strategy and growth.",
      tags: ["Leadership", "Operations", "Digital Solutions"],
    },
    {
      company: "GooseUp",
      location: "Dhaka, Bangladesh",
      position: "Co-founder & Technical Lead",
      duration: "2022 - 2023",
      description: "Developed business strategies and managed early-stage product development, implementing technical solutions for business growth.",
      tags: ["Product Development", "Technical Leadership", "Strategy"],
    },
    {
      company: "Better Future Bangladesh (BFB)",
      location: "Dhaka, Bangladesh",
      position: "Community Developer",
      duration: "2016 - 2019",
      description: "Engaged in community development and social initiatives, implementing technology solutions for social impact.",
      tags: ["Community Development", "Social Impact", "Tech for Good"],
    },
    {
      company: "Freelance",
      location: "Remote",
      position: "Web & App Developer",
      duration: "2020 - Present",
      description: "Building websites and Flutter applications for various sectors, handling both frontend and backend development, creating smart home UI interfaces.",
      tags: ["Flutter", "Web Development", "Full-Stack"],
    },
  ];

  return (
    <section id="experience" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex items-start justify-between mb-16 max-w-6xl mx-auto">
          <h2 className="text-sm text-muted-foreground">* Experience</h2>
          <p className="text-sm text-muted-foreground max-w-md">
            Experienced in full-stack development, mobile applications, AI/ML, and blockchain technologies,
            with a proven track record in business leadership and technical innovation
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
