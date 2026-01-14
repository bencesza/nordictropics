import { Clock, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';
import TradeForm from '@/components/trade-form';

const steps = [
  {
    number: '01',
    title: 'Submit Your Interest',
    description: 'Fill out the partnership form with your business details, product interests, and requirements.',
    icon: Users,
  },
  {
    number: '02',
    title: 'Initial Consultation',
    description: 'Our team will review your inquiry and schedule a call to discuss your specific needs and volumes.',
    icon: Clock,
  },
  {
    number: '03',
    title: 'Terms & Agreement',
    description: 'We will work together to establish pricing, delivery schedules, quality specifications, and payment terms.',
    icon: ShieldCheck,
  },
  {
    number: '04',
    title: 'Start Trading',
    description: 'Once agreements are in place, we will coordinate your first shipment and provide ongoing support.',
    icon: TrendingUp,
  },
];

export default function TradePage() {
  return (
    <div className="w-full">
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
        <div className="absolute inset-0 art-deco-pattern opacity-30" />
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
                Trade With <span className="text-primary">Nordic Tropics</span>
              </h1>
              <p className="text-xl text-muted-foreground text-balance">
                Start your partnership journey today. Connect with certified African farmers and bring premium tropical fruits to your customers.
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
                How It <span className="text-primary">Works</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our streamlined partnership process gets you from inquiry to delivery quickly and efficiently
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {steps?.map((step, index) => (
              <AnimatedSection key={step?.number} delay={index * 0.1}>
                <div className="relative">
                  <div className="text-center">
                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary relative">
                      <step.icon className="h-8 w-8" />
                      <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">
                        {step?.number}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">
                      {step?.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{step?.description}</p>
                  </div>
                  {index < steps?.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-muted/30 to-white rounded-lg p-8 card-shadow sticky top-24">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  What to Expect
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">✔</span>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Flexible Volumes</p>
                      <p className="text-sm text-muted-foreground">
                        Whether you need a single container or regular shipments, we can accommodate your requirements.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">✔</span>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Competitive Pricing</p>
                      <p className="text-sm text-muted-foreground">
                        Direct from source pricing without unnecessary middlemen. Volume discounts available.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">✔</span>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Quality Guarantee</p>
                      <p className="text-sm text-muted-foreground">
                        All fruits meet EU standards and our certifications (GlobalG.A.P., HACCP, SMETA).
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">✔</span>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Dedicated Support</p>
                      <p className="text-sm text-muted-foreground">
                        Assigned account manager to handle your orders, logistics, and any questions.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">✔</span>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Custom Solutions</p>
                      <p className="text-sm text-muted-foreground">
                        Ripeness programs, packaging options, and delivery schedules tailored to your needs.
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-3">Response Time</h4>
                  <p className="text-sm text-muted-foreground">
                    We typically respond to partnership inquiries within 24-48 business hours. For urgent requests, please mention this in your message.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-lg p-8 card-shadow">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Partnership Inquiry Form
                </h3>
                <TradeForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Questions Before You Start?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Not quite ready to submit a partnership inquiry? Feel free to reach out with any questions you have about our products, certifications, logistics, or pricing.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-md transition-all hover-lift"
              >
                Contact Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
