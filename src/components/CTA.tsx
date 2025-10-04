import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-light text-4xl md:text-5xl mb-6">
            Got a Vision? Let's Bring It to Life!
          </h2>
          
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always open to discussing product design work or partnership opportunities
          </p>
          
          <div className="space-y-4">
            <Button 
              size="lg" 
              className="bg-foreground hover:bg-foreground/90 text-background px-8"
              onClick={() => window.location.href = 'mailto:mynulislamtanim@gmail.com?subject=Collaboration%20Opportunity&body=Hi%20Mynul,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20potential%20collaboration.%0A%0AProject%20Details:%0A-%20Type:%0A-%20Timeline:%0A-%20Requirements:%0A%0ALooking%20forward%20to%20your%20response.%0A%0ABest%20regards,'}
            >
              Let's Collaborate →
            </Button>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <a href="tel:+8801735968803" className="hover:text-foreground transition-colors">
                +880 173-596-8803
              </a>
              <span>•</span>
              <a href="https://github.com/mynul56" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                GitHub
              </a>
              <span>•</span>
              <a href="https://bd.linkedin.com/in/mynulislam56" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
