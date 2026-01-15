import Image from 'next/image';
import { Target, Eye, Heart, Globe } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';

const team = [
  {
    name: 'Bernard',
    role: 'Supply & Production',
    location: 'Kenya',
    image: 'https://cdn.abacus.ai/images/4cfc4735-2c78-4877-bd13-242ae087c6a1.png',
    bio: 'Based in Kenya, Bernard owns Broadcom, a successful telecommunications infrastructure company. His passion for agriculture and fruit growing, combined with extensive agricultural land holdings in Kenya, makes him our anchor for supply and production excellence.',
  },
  {
    name: 'Bence',
    role: 'Business Development & Investment',
    location: 'Denmark',
    image: 'https://cdn.abacus.ai/images/ed8dd774-14eb-40de-89dc-738aba973c53.png',
    bio: 'Based in Denmark, Bence brings 3 years of experience from Dagrofa in the fruit and green section. As an entrepreneur and investor with a passion for healthy food, he drives business strategy and investment decisions that fuel our growth.',
  },
  {
    name: 'Henry',
    role: 'Quality Assurance & EU Logistics',
    location: 'Denmark',
    image: '/henry-v10.jpg',
    bio: 'Experienced supply chain and operations professional with a background in FMCG and retail consumer goods while working at one of Denmarks most prominent retail grocist -Dagrofa. Strong experience in logistics coordination, production planning, and ensuring product availability in fast-paced retail environments. Used to working across sales, warehouse, and distribution teams to meet consumer demand efficiently. Structured, reliable, and execution-focused.',
  },
  {
    name: 'Rock',
    role: 'Sustainable Agricultural Operations',
    location: 'Kenya',
    image: 'https://cdn.abacus.ai/images/b3e585c1-4639-4fd4-8145-a1798816a759.png',
    bio: 'Based in Kenya, Rock is an agriculture specialist focused on land handling, water sanitation, and soil quality management. His expertise ensures our farming practices are not only productive but also environmentally sustainable for generations to come.',
  },
];

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To connect certified African farmers with Nordic consumers through fair, traceable, and sustainable trade in premium tropical fruits, creating value across the entire supply chain.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To become the leading trusted partner for premium African tropical fruits in Northern Europe, recognized for uncompromising quality, complete transparency, and positive social impact.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    description: 'Quality in every fruit. Traceability from farm to table. Sustainability in our practices. Partnership with farmers and clients alike. These principles guide every decision we make.',
  },
  {
    icon: Globe,
    title: 'Our Impact',
    description: 'Supporting over 100 smallholder farmers in Kenya, reducing food waste through efficient logistics, and bringing nutrition-rich superfoods to Nordic families while ensuring fair compensation throughout the value chain.',
  },
];

export default function AboutPage() {
  return (
    <div className="w-full">
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
        <div className="absolute inset-0 art-deco-pattern opacity-30" />
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
                About <span className="text-primary">Nordic Tropics</span>
              </h1>
              <p className="text-xl text-muted-foreground text-balance">
                Bridging continents through exceptional tropical fruits, sustainable practices, and meaningful partnerships.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-4">
                  The idea for Nordic Tropics was born when <strong className="text-primary">Bernard</strong>, a successful telecommunications entrepreneur in Kenya with a deep passion for fruit growing, connected with <strong className="text-primary">Bence</strong> and <strong className="text-primary">Henry</strong>—both experienced professionals from Dagrofa with intimate knowledge of the Danish fruit market.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  Together, they identified a significant gap: Denmark and Northern Europe were missing out on the exceptional quality of Kenyan tropical fruits like mango, avocado, pineapple, and passionfruit. Research revealed these fruits are among the most nutrition-rich superfoods available, yet they were underrepresented in Nordic markets.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  With <strong className="text-primary">Rock's</strong> expertise in sustainable agriculture—ensuring optimal soil and water quality—the team combines Kenyan production excellence with Danish market intelligence. This unique blend of African agricultural prowess and Nordic business acumen enables us to deliver premium tropical fruits while maintaining the highest standards of quality, traceability, and sustainability.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, Nordic Tropics stands at the intersection of two worlds: the sun-drenched farms of East Africa and the quality-conscious markets of Northern Europe. We're not just importing fruit—we're building bridges, supporting communities, and bringing the best of African agriculture to Nordic tables.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Meet Our <span className="text-primary">Founding Team</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A unique blend of African agricultural expertise and Nordic market knowledge
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {team?.map((member, index) => (
              <AnimatedSection key={member?.name} delay={index * 0.1}>
                <div className="group bg-white rounded-lg overflow-hidden card-shadow hover-lift">
                  <div className="relative aspect-square bg-gradient-to-br from-primary/5 to-accent/5">
                    <Image
                      src={member?.image ?? ''}
                      alt={member?.name ?? 'Team member'}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-display text-2xl font-bold text-foreground">
                          {member?.name}
                        </h3>
                        <p className="text-sm text-primary font-medium">{member?.role}</p>
                      </div>
                      <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">
                        {member?.location}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{member?.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {values?.map((item, index) => (
              <AnimatedSection key={item?.title} delay={index * 0.1}>
                <div className="group p-8 bg-gradient-to-br from-white to-muted/20 rounded-lg card-shadow hover-lift border border-border">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    {item?.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item?.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 art-deco-pattern opacity-10" />
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Join Us on This Journey
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Whether you're a retailer, importer, or foodservice buyer, we invite you to be part of a supply chain that values quality, transparency, and positive impact.
              </p>
              <a
                href="/trade"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary hover:bg-accent hover:text-white font-semibold rounded-md transition-all hover-lift"
              >
                Start Trading With Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
