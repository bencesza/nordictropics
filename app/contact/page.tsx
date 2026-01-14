import { Mail, MapPin, Clock, Phone } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';
import ContactForm from '@/components/contact-form';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Locations',
    details: [
      'Denmark Office: Copenhagen Area',
      'Kenya Operations: Nairobi & Mombasa',
    ],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['Use the contact form below', 'We respond within 24-48 hours'],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Friday: 8:00 - 17:00 CET', 'Response within 1-2 business days'],
  },
  {
    icon: Phone,
    title: 'Get In Touch',
    details: ['Submit inquiry via contact form', 'For trade inquiries, visit Trade page'],
  },
];

export default function ContactPage() {
  return (
    <div className="w-full">
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
        <div className="absolute inset-0 art-deco-pattern opacity-30" />
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
                Contact <span className="text-primary">Us</span>
              </h1>
              <p className="text-xl text-muted-foreground text-balance">
                Have questions about our products, services, or sustainability practices? We'd love to hear from you.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo?.map((info, index) => (
              <AnimatedSection key={info?.title} delay={index * 0.1}>
                <div className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                    <info.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-3">
                    {info?.title}
                  </h3>
                  <div className="space-y-1">
                    {info?.details?.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-muted/30 to-white rounded-lg p-8 card-shadow">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h3>
                <ContactForm />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                    About Nordic Tropics
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Nordic Tropics ApS is a Danish company specializing in importing premium tropical fruits from Kenya to Northern Europe. We bridge the gap between certified African farmers and quality-conscious Nordic consumers.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    With operations in both Denmark and Kenya, we ensure complete control over quality, traceability, and sustainability throughout our supply chain.
                  </p>
                </div>

                <div className="border-t border-border pt-8">
                  <h4 className="font-semibold text-foreground mb-4">Looking to Partner?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    If you're interested in trading with us or becoming a distribution partner, please use our dedicated partnership inquiry form for faster processing.
                  </p>
                  <a
                    href="/trade"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-md transition-all hover-lift"
                  >
                    Trade With Us
                  </a>
                </div>

                <div className="border-t border-border pt-8">
                  <h4 className="font-semibold text-foreground mb-4">General Inquiries</h4>
                  <p className="text-sm text-muted-foreground">
                    For media inquiries, supplier applications, career opportunities, or any other questions, please use the contact form on this page. We'll route your message to the appropriate team member.
                  </p>
                </div>
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
                Visit Our <span className="text-primary">Operations</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                While we primarily operate through B2B partnerships, we welcome scheduled visits to our operations in Denmark and Kenya. Contact us to arrange a tour of our facilities or meet with our team.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="p-6 bg-white rounded-lg card-shadow">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    Denmark Office
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">Copenhagen Area</p>
                  <p className="text-sm text-muted-foreground">Distribution & Sales Operations</p>
                </div>
                <div className="p-6 bg-white rounded-lg card-shadow">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    Kenya Operations
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">Nairobi & Mombasa</p>
                  <p className="text-sm text-muted-foreground">Production & Export Facilities</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
