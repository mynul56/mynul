import { Button } from "@/components/ui/button";

const Featured = () => {
  return (
    <section className="py-24 bg-[hsl(var(--dark-section))] text-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-light text-4xl md:text-5xl mb-6">
            Exclusive Winter Deal Days Get a Free Consultation!
          </h2>
          
          <p className="text-background/70 text-lg mb-8">
            Transform your digital presence with expert design and development. 
            Limited time offer - book your free consultation now!
          </p>
          
          <Button 
            size="lg" 
            className="bg-background text-foreground hover:bg-background/90 px-8"
          >
            Schedule Your Call →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
