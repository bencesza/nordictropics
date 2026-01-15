import Image from 'next/image';
import Link from 'next/link';
import { Award, Truck, Shield, TrendingUp, Users, Clock } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';

const benefits = [
  {
    icon: Award,
    title: 'Certified Quality',
    description: 'All products meet GlobalG.A.P., HACCP, and SMETA standards. Regular quality audits and compliance checks ensure consistency.',
  },
  {
    icon: Truck,
    title: 'Reliable Logistics',
    description: 'Optimized cold-chain from Kenya to your warehouse. Temperature-controlled reefer containers and proven route efficiency.',
  },
  {
    icon: Shield,
    title: 'Supply Assurance',
    description: 'Year-round availability for avocado and pineapple. Seasonal mango and passionfruit with advance planning support.',
  },
  {
    icon: TrendingUp,
    title: 'Competitive Pricing',
    description: 'Direct from source pricing without unnecessary middlemen. Volume discounts and flexible payment terms available.',
  },
  {
    icon: Users,
    title: 'Partnership Approach',
    description: 'Dedicated account management and responsive support. We grow when you grow—true collaboration.',
  },
  {
    icon: Clock,
    title: 'Custom Solutions',
    description: 'Ripeness programs tailored to your distribution timeline. Custom packaging and labeling options available.',
  },
];

const certifications = [
  {
    name: 'GlobalG.A.P.',
    image: '/images/a49ac33d-9827-4161-9c13-f789c49f5cab.png',
    description: 'Good Agricultural Practices',
  },
  {
    name: 'HACCP',
    image: '/images/a42cd8e3-7654-4ed3-81d8-1184fcae9817.png',
    description: 'Food Safety Management',
  },
  {
    name: 'SMETA',
    image: '/images/f50be4a0-87a1-4f6c-b492-b37a7cf05b1f.png',
    description: 'Ethical Compliance',
  },
];

const targetPartners = [
  {
    title: 'Retailers & Supermarkets',
    description: 'Premium tropical fruits for your fresh produce section. Consistent quality, reliable supply, and attractive margins.',
    examples: ['Coop', 'Salling Group', 'Rema 1000', 'Independent retailers'],
  },
  {
    title: 'Importers & Distributors',
    description: 'Add high-demand African fruits to your portfolio. Competitive pricing and flexible volumes to support your distribution network.',
    examples: ['GASA Group', 'Dagrofa', 'Regional wholesalers', 'Fruit specialists'],
  },
  {
    title: 'Foodservice & HoReCa',
    description: 'Premium ingredients for restaurants, hotels, and catering. Consistent grade and custom specifications available.',
    examples: ['Restaurant groups', 'Hotel chains', 'Catering companies', 'Food processors'],
  },
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
                Partner With <span className="text-primary">Nordic Tropics</span>
              </h1>
              <p className="text-xl text-muted-foreground text-balance">
                Join leading Nordic businesses bringing premium African tropical fruits to discerning consumers.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose <span className="text-primary">Nordic Tropics</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We combine Kenyan production excellence with Danish market expertise. Our team's deep experience in both agriculture and Nordic retail means we understand your needs and can deliver consistently.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits?.map((benefit, index) => (
              <AnimatedSection key={benefit?.title} delay={index * 0.1}>
                <div className="group h-full p-8 bg-gradient-to-br from-white to-muted/20 rounded-lg card-shadow hover-lift border border-border">
                  <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <benefit.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {benefit?.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit?.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Certified <span className="text-primary">Standards</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our certifications demonstrate our commitment to quality, safety, and ethical practices
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {certifications?.map((cert, index) => (
              <AnimatedSection key={cert?.name} delay={index * 0.1}>
                <div className="bg-white rounded-lg p-8 card-shadow hover-lift text-center">
                  <div className="relative h-32 mb-6">
                    <Image
                      src={cert?.image ?? ''}
                      alt={`${cert?.name} certification`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {cert?.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cert?.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="text-center">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Currently pursuing:</span> Organic (EU) & FairTrade certifications
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Who We <span className="text-primary">Partner With</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From large retail chains to boutique foodservice operations, we scale to meet your needs
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {targetPartners?.map((partner, index) => (
              <AnimatedSection key={partner?.title} delay={index * 0.1}>
                <div className="h-full p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-primary/20">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                    {partner?.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {partner?.description}
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-primary mb-2">Examples:</p>
                    <ul className="space-y-1">
                      {partner?.examples?.map((example) => (
                        <li key={example} className="text-sm text-muted-foreground flex items-center">
                          <span className="text-primary mr-2">•</span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden card-shadow">
                <Image
                  src="/images/87c38d33-3c92-4251-aa10-d8247cf02a26.png"
                  alt="Premium tropical fruits"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our <span className="text-primary">Logistics</span> Capability
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  With our optimized supply chain, we ensure your products arrive fresh and ready for market:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-muted-foreground">
                    <span className="text-primary mr-3 mt-1">✔</span>
                    <span><strong>Route:</strong> Mombasa → Rotterdam/Hamburg → Aarhus cold storage</span>
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="text-primary mr-3 mt-1">✔</span>
                    <span><strong>Temperature:</strong> Controlled 2-8°C throughout transport</span>
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="text-primary mr-3 mt-1">✔</span>
                    <span><strong>Transit time:</strong> Optimized for freshness (typically 10-14 days)</span>
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="text-primary mr-3 mt-1">✔</span>
                    <span><strong>Quality:</strong> Less than 2% spoilage rate</span>
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="text-primary mr-3 mt-1">✔</span>
                    <span><strong>Flexibility:</strong> Distribution to Denmark, Sweden, Norway, Finland, Netherlands</span>
                  </li>
                </ul>
                <p className="text-muted-foreground italic">
                  Our team's experience at Dagrofa means we understand Nordic distribution requirements inside and out.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 art-deco-pattern opacity-10" />
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Let's discuss how Nordic Tropics can support your business with premium African tropical fruits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/trade"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary hover:bg-accent hover:text-white font-semibold rounded-md transition-all hover-lift"
                >
                  Trade With Us
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-md transition-all hover-lift border border-white/30"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
