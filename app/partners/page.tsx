import Image from 'next/image';
import AnimatedSection from '@/components/animated-section';

const partnerCategories = [
  {
    title: 'Retail Partners',
    description: 'We supply major supermarket chains and independent retailers across the Nordic region with premium, shelf-ready tropical fruits.',
    icon: '🛒'
  },
  {
    title: 'Wholesale & Distribution',
    description: 'Partnering with regional wholesalers and fruit specialists to ensure wide availability of our Kenyan produce.',
    icon: '🚛'
  },
  {
    title: 'Foodservice & Horeca',
    description: 'Providing high-quality ingredients to restaurant groups, hotel chains, and catering companies that prioritize flavor and sustainability.',
    icon: '🍽️'
  }
];

export default function PartnersPage() {
  return (
    <div className="w-full">
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
        <div className="absolute inset-0 art-deco-pattern opacity-30" />
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Partners</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Building a sustainable ecosystem with trusted partners across the globe.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {partnerCategories.map((category, index) => (
              <AnimatedSection key={category.title} delay={index * 0.1}>
                <div className="p-8 bg-white rounded-lg border border-border hover:border-primary/30 transition-all duration-300 card-shadow hover-lift">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">{category.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
