import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, Leaf, TrendingUp, Users } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';
import Counter from '@/components/counter';

const products = [
  {
    name: 'Premium Mango',
    varieties: 'Kent & Tommy Atkins',
    image: '/images/images/images/mango-kent.jpg',
    description: 'Sun-ripened perfection from Kenyan orchards',
  },
  {
    name: 'Hass Avocado',
    varieties: 'Grade 16-24',
    image: 'https://cdn.abacus.ai/images/f74252a2-90ed-40a4-abc4-55c298973799.png',
    description: 'Creamy, nutrient-rich superfood',
  },
  {
    name: 'MD2 Pineapple',
    varieties: 'Golden Sweet',
    image: '/images/images/images/pineapple-md2.jpg',
    description: 'Tropical sweetness in every slice',
  },
  {
    name: 'Passionfruit',
    varieties: 'Purple & Yellow',
    image: 'https://cdn.abacus.ai/images/2f30cc4d-608c-4ee4-a673-8ab9f1193ec3.png',
    description: 'Exotic flavor, premium quality',
  },
];

const values = [
  {
    icon: Award,
    title: 'Quality',
    description: 'Premium grade fruits meeting EU standards',
  },
  {
    icon: TrendingUp,
    title: 'Traceability',
    description: 'Complete farm-to-fork transparency',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Eco-friendly practices at every step',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'Fair trade supporting smallholder farmers',
  },
];

const certifications = [
  {
    name: 'GlobalG.A.P.',
    image: 'https://cdn.abacus.ai/images/a49ac33d-9827-4161-9c13-f789c49f5cab.png',
  },
  {
    name: 'HACCP',
    image: 'https://cdn.abacus.ai/images/a42cd8e3-7654-4ed3-81d8-1184fcae9817.png',
  },
  {
    name: 'SMETA',
    image: 'https://cdn.abacus.ai/images/f50be4a0-87a1-4f6c-b492-b37a7cf05b1f.png',
  },
];

export default function HomePage() {
  return (
    <div className="w-full">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://cdn.abacus.ai/images/79b178d4-1b08-475a-8c66-b24bf6969ddb.png"
            alt="Lush Kenyan farm"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="container-custom relative z-10 text-white py-20">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="inline-block mb-4 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
                <p className="text-sm font-medium text-accent">Premium Tropical Fruits from Kenya</p>
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-balance">
                From African Sun to <span className="text-accent">Nordic</span> Tables
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl text-balance">
                Connecting certified African farmers with Nordic consumers through sustainable, traceable trade in premium mangoes, avocados, pineapples, and passionfruit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/images/images/trade"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-md transition-all hover-lift group"
                >
                  Trade With Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/images/images/products"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-md transition-all hover-lift border border-white/30"
                >
                  View Products
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our Core <span className="text-primary">Values</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Built on a foundation of excellence, transparency, and responsibility
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values?.map((value, index) => (
              <AnimatedSection key={value?.title} delay={index * 0.1}>
                <div className="group p-8 bg-gradient-to-br from-white to-muted/30 rounded-lg card-shadow hover-lift border border-border">
                  <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {value?.title}
                  </h3>
                  <p className="text-muted-foreground">{value?.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-muted/30 to-white art-deco-pattern">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Premium <span className="text-primary">Products</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nature's finest tropical superfoods, carefully selected and delivered fresh
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {products?.map((product, index) => (
              <AnimatedSection key={product?.name} delay={index * 0.1}>
                <Link href="/images/images/products" className="group block">
                  <div className="bg-white rounded-lg overflow-hidden card-shadow hover-lift">
                    <div className="relative aspect-square bg-muted">
                      <Image
                        src={product?.image ?? ''}
                        alt={product?.name ?? 'Product'}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold text-foreground mb-1">
                        {product?.name}
                      </h3>
                      <p className="text-sm text-primary font-medium mb-2">{product?.varieties}</p>
                      <p className="text-sm text-muted-foreground">{product?.description}</p>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="text-center">
              <Link
                href="/images/images/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-md transition-all hover-lift"
              >
                Explore All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Certified <span className="text-primary">Excellence</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                Meeting and exceeding international quality and safety standards
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {certifications?.map((cert, index) => (
              <AnimatedSection key={cert?.name} delay={index * 0.15}>
                <div className="bg-gradient-to-br from-white to-muted/20 rounded-lg p-8 card-shadow hover-lift flex items-center justify-center min-h-[200px] border border-border">
                  <div className="relative w-full h-32">
                    <Image
                      src={cert?.image ?? ''}
                      alt={`${cert?.name} certification`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 art-deco-pattern opacity-10" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <AnimatedSection>
              <div>
                <div className="font-display text-5xl md:text-6xl font-bold mb-2">
                  <Counter end={10} suffix="+" />
                </div>
                <p className="text-xl text-white/90">Years Combined Experience</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div>
                <div className="font-display text-5xl md:text-6xl font-bold mb-2">
                  <Counter end={100} suffix="+" />
                </div>
                <p className="text-xl text-white/90">Smallholder Farmers</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div>
                <div className="font-display text-5xl md:text-6xl font-bold mb-2">
                  <Counter end={5} />
                </div>
                <p className="text-xl text-white/90">Nordic Markets Served</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-muted/30">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join leading Nordic retailers and importers in bringing premium African tropical fruits to your customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/images/images/trade"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-md transition-all hover-lift"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/images/images/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-muted text-foreground font-semibold rounded-md transition-all hover-lift border border-border"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
