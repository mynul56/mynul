import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Me", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Experience", href: "#experience" },
    { name: "Blog", href: "#blog" },
  ];

  const socialLinks = [
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
  ];

  return (
    <footer className="bg-[hsl(var(--dark-section))] text-background py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12 max-w-6xl mx-auto">
          {/* Left side */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-background rounded-md flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-foreground"></div>
              </div>
            </div>
            
            <a
              href="mailto:hello@mynul.dev"
              className="text-2xl md:text-3xl hover:text-background/70 transition-colors"
            >
              hello@dnova.com
            </a>
          </div>

          {/* Right side */}
          <div className="flex flex-col md:flex-row gap-12">
            {/* Navigation */}
            <div>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <ul className="space-y-2">
                {socialLinks.map((social, index) => (
                  <li key={index}>
                    <a
                      href={social.href}
                      className="text-sm text-background/70 hover:text-background transition-colors flex items-center gap-2"
                    >
                      <social.icon size={16} />
                      {social.icon === Github && "Github"}
                      {social.icon === Linkedin && "LinkedIn"}
                      {social.icon === Twitter && "Twitter"}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
