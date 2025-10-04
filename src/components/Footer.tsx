import { Mail, Github, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Me", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Experience", href: "#experience" },
    { name: "Blog", href: "#blog" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/mynul56" },
    { icon: Linkedin, href: "https://bd.linkedin.com/in/mynulislam56" },
    { icon: Mail, href: "mailto:mynulislamtanim@gmail.com" },
  ];

  return (
    <footer className="bg-[hsl(var(--dark-section))] text-background py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12 max-w-6xl mx-auto">
          {/* Left side */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-8">
              <img src={logo} alt="Mynul Islam" className="h-24 w-auto brightness-0 invert" />
            </div>
            
            <div className="space-y-4">
              <a
                href="mailto:mynulislamtanim@gmail.com"
                className="text-xl md:text-2xl hover:text-background/70 transition-colors block"
              >
                mynulislamtanim@gmail.com
              </a>
              <p className="text-background/70">
                Uttara Sector 12, Dhaka, Bangladesh
              </p>
              <p className="text-background/70">
                +880 173-596-8803
              </p>
            </div>
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-background/70 hover:text-background transition-all flex items-center gap-2 group hover:translate-x-1"
                    >
                      <social.icon size={16} className="group-hover:scale-110 transition-transform" />
                      {social.icon === Github && "Github"}
                      {social.icon === Linkedin && "LinkedIn"}
                      {social.icon === Mail && "Email Me"}
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
