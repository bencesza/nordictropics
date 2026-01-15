import Image from 'next/image';
import { Leaf, Droplet, Users, TrendingUp, QrCode, Package } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';

const initiatives = [
  {
    icon: Leaf,
    title: 'Sustainable Farming',
    description: 'Working with certified farms that prioritize soil health, water conservation, and biodiversity. Our agricultural specialist Rock ensures every farm maintains optimal environmental standards.',
    impact: '100% of our partner farms use sustainable practices',
  },
  {
    icon: Droplet,
    title: 'Water & Soil Management',
    description: 'Advanced water sanitation systems and soil quality monitoring ensure long-term land productivity while minimizing environmental impact. Precision irrigation reduces water waste by up to 40%.',
    impact: '40% reduction in water usage vs. traditional methods',
  },
  {
    icon: Users,
    title: 'Smallholder Support',
    description: 'We provide fair wages, training, and resources to over 100 smallholder farmers. Our partnership model ensures farmers receive equitable compensation and have access to modern agricultural techniques.',
    impact: 'Supporting 100+ smallholder farming families',
  },
  {
    icon: Package,
    title: 'Cold-Chain Excellence',
    description: 'Optimized reefer container logistics from Mombasa to Aarhus minimize spoilage and energy consumption. Our route planning reduces transit time and maintains perfect temperature control.',
    impact: '<2% spoilage rate through optimized logistics',
  },
  {
    icon: QrCode,
    title: 'Complete Traceability',
    description: 'Every fruit can be traced from specific farm plots to end consumers. Our digital system tracks harvest dates, quality checks, transport conditions, and arrival times for full transparency.',
    impact: 'Farm-to-fork tracking for every shipment',
  },
  {
    icon: TrendingUp,
    title: 'Carbon Footprint Reduction',
    description: 'Consolidated shipping, route optimization, and efficient cold storage reduce our carbon footprint. We continuously invest in greener logistics solutions and offset remaining emissions.',
    impact: '25% carbon reduction target by 2027',
  },
];

const certifications = [
  {
    name: 'GlobalG.A.P.',
    description: 'Ensures good agricultural practices, food safety, worker welfare, and environmental protection',
    image: '/images/a49ac33d-9827-4161-9c13-f789c49f5cab.png',
  },
  {
    name: 'HACCP',
    description: 'Hazard Analysis Critical Control Points for food safety throughout the supply chain',
    image: '/images/a42cd8e3-7654-4ed3-81d8-1184fcae9817.png',
  },
  {
    name: 'SMETA/GRASP',
    description: 'Social compliance and responsible agricultural practices protecting workers and communities',
    image: '/images/f50be4a0-87a1-4f6c-b492-b37a7cf05b1f.png',
  },
];

export default function SustainabilityPage() {
  return (
    <div className="w-full">
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
        <div className="absolute inset-0 art-deco-pattern opacity-30" />
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
                Sustainability <span className="text-primary">Commitment</span>
              </h1>
              <p className="text-xl text-muted-foreground text-balance">
                Building a responsible supply chain that benefits farmers, consumers, and the environment for generations to come.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                From Farm to Fork <span className="text-primary">Transparency</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe sustainability starts with transparency. Every step of our supply chain—from the specific farm plot in Kenya to your customers in Northern Europe—is tracked, documented, and verified. This isn't just about compliance; it's about accountability and trust.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives?.map((initiative, index) => (
              <AnimatedSection key={initiative?.title} delay={index * 0.1}>
                <div className="group h-full p-8 bg-gradient-to-br from-white to-muted/20 rounded-lg card-shadow hover-lift border border-border">
                  <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <initiative.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {initiative?.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {initiative?.description}
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-primary">{initiative?.impact}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection>
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Traceability <span className="text-primary">System</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our digital traceability system provides complete visibility into every shipment. From the moment fruit is harvested, we track:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-muted-foreground">
                    <span className="text-primary mr-3 mt-1">✔</span>
                    <span>Specific farm location and plot identification</span>
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="text-primary mr-3 mt-1">✔</span>
                    <span>Harvest date, quality grade, and packing details</span>
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="text-primary mr-3 mt-1">✔</span>
                    <span>Cold-chain temperature logs throughout transport</span>
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="text-primary mr-3 mt-1">✔</span>
                    <span>Certification documentation and compliance records</span>
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="text-primary mr-3 mt-1">✔</span>
                    <span>Arrival dates and final distribution destinations</span>
                  </li>
                </ul>
                <p className="text-muted-foreground italic">
                  Future enhancement: QR code scanning for consumers to view complete journey of their fruit.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden card-shadow">
                <Image
                  src="/images/79b178d4-1b08-475a-8c66-b24bf6969ddb.png"
                  alt="Kenyan farm operations"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our <span className="text-primary">Certifications</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meeting and exceeding international standards for quality, safety, and social responsibility
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {cert?.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cert?.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative aspect-video rounded-lg overflow-hidden card-shadow">
                <Image
                  src="/images/7917aabb-1d0c-42e0-87af-d3cb976ea9b3.png"
                  alt="Cold chain logistics"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Optimized <span className="text-primary">Logistics</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our logistics route from Mombasa through Rotterdam/Hamburg to Aarhus cold storage is carefully designed to minimize environmental impact while ensuring fruit quality:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start text-muted-foreground">
                    <span className="text-primary mr-3 mt-1">✔</span>
                    <span>Consolidated reefer containers maximize load efficiency</span>
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="text-primary mr-3 mt-1">✔</span>
                    <span>Temperature-controlled transport maintains 2-8°C throughout</span>
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="text-primary mr-3 mt-1">✔</span>
                    <span>Route optimization reduces transit time and fuel consumption</span>
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="text-primary mr-3 mt-1">✔</span>
                    <span>Aarhus cold storage ensures quality preservation until distribution</span>
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="text-primary mr-3 mt-1">✔</span>
                    <span>Less than 2% spoilage rate thanks to careful handling</span>
                  </li>
                </ul>
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
                Working Toward a Better Future
              </h2>
              <p className="text-xl text-white/90 mb-8">
                We're on a journey toward Organic (EU) and FairTrade certifications, further solidifying our commitment to environmental stewardship and social responsibility.
              </p>
              <a
                href="/images/partners"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary hover:bg-accent hover:text-white font-semibold rounded-md transition-all hover-lift"
              >
                Partner With Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
