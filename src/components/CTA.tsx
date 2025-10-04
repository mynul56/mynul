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
          
          <Button 
            size="lg" 
            className="bg-foreground hover:bg-foreground/90 text-background px-8"
          >
            Book a Call →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
