import mynulPhoto from "@/assets/mynul.jpg";

const About = () => {
  const specialties = [
    "Frontend Development",
    "Backend Development",
    "Mobile App Development",
    "AI & Machine Learning",
    "Blockchain Technology",
    "UI/UX Design",
  ];

  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-sm text-muted-foreground mb-16 text-center">
          * About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left side - Large stat */}
            <div className="space-y-8">
              <div className="bg-muted rounded-lg p-8">
                <div className="text-6xl font-light mb-4">3.51</div>
                <p className="text-foreground/70">
                  CGPA in B.Sc. in Computer Science and Engineering from Daffodil International University
                </p>
              </div>
            </div>

            {/* Right side - Photo and content */}
            <div className="space-y-8">
              <div className="aspect-square w-48 overflow-hidden rounded-lg">
                <img
                  src={mynulPhoto}
                  alt="Md. Mynul Islam"
                  className="w-full h-full object-cover grayscale"
                />
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-foreground flex-shrink-0 mt-1"></div>
                  <div>
                    <p className="text-foreground leading-relaxed">
                      A versatile software developer with expertise in web development, mobile applications (Flutter), AI, Machine Learning, and Blockchain technologies. As the CEO of Blend and Bite Foodcart and Co-founder of GooseUp, I've demonstrated leadership in both technical development and business operations.
                    </p>
                  </div>
                </div>              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-foreground flex-shrink-0 mt-1"></div>
                <div>
                  <p className="text-foreground leading-relaxed">
                    Proven track record in creating web platforms, designing mobile apps, and building design systems that scale thoughtfully-researched design strategies.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                {specialties.map((specialty, index) => (
                  <div key={index} className="bg-muted rounded-md p-3 text-sm">
                    {specialty}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
