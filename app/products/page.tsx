import Image from 'next/image';
import { Droplet, Sun, ThermometerSun, Award, Leaf, Heart } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';

const products = [
  {
    name: 'Premium Mango',
    varieties: 'Kent & Tommy Atkins',
    image: '/images/images/images/mango-kent.jpg',
    description: 'Our mangoes are hand-selected from certified Kenyan orchards, sun-ripened to perfection. Kent mangoes offer exceptional sweetness with minimal fiber, while Tommy Atkins provides vibrant color and excellent shelf life.',
    specs: [
      'Varieties: Kent, Tommy Atkins',
      'Season: November to March (peak)',
      'Pack sizes: 4-6 kg cartons',
      'Ripeness programs available',
    ],
    nutrition: [
      'Rich in Vitamin C and A',
      'High in dietary fiber',
      'Contains antioxidants',
      'Supports immune health',
    ],
    icon: Sun,
  },
  {
    name: 'Hass Avocado',
    varieties: 'Grade 16-24',
    image: 'https://cdn.abacus.ai/images/f74252a2-90ed-40a4-abc4-55c298973799.png',
    description: 'Kenyan Hass avocados are renowned worldwide for their creamy texture, rich flavor, and exceptional quality. Our avocados are grown at optimal altitudes with perfect climate conditions.',
    specs: [
      'Grades: 16, 18, 20, 22, 24',
      'Year-round availability',
      'Pack sizes: 4 kg cartons',
      'Custom ripeness programs',
    ],
    nutrition: [
      'Healthy monounsaturated fats',
      'High in potassium',
      'Rich in vitamins E and K',
      'Supports heart health',
    ],
    icon: Droplet,
  },
  {
    name: 'MD2 Pineapple',
    varieties: 'Golden Sweet',
    image: '/images/images/images/pineapple-md2.jpg',
    description: 'The MD2 variety, also known as Super Sweet, delivers exceptional sweetness with low acidity. Perfect for retail and HoReCa applications, our pineapples maintain quality throughout transportation.',
    specs: [
      'Variety: MD2 (Super Sweet)',
      'Size: 1.2-2.0 kg per fruit',
      'Year-round supply',
      'Optimal brix levels 14-16°',
    ],
    nutrition: [
      'Excellent source of Vitamin C',
      'Contains bromelain enzyme',
      'Anti-inflammatory properties',
      'Aids digestion',
    ],
    icon: ThermometerSun,
  },
  {
    name: 'Passionfruit',
    varieties: 'Purple & Yellow',
    image: 'https://cdn.abacus.ai/images/2f30cc4d-608c-4ee4-a673-8ab9f1193ec3.png',
    description: 'Our premium passionfruit offers intense tropical flavor and aroma. Purple variety provides rich taste for fresh consumption, while yellow variety is ideal for juice and processing.',
    specs: [
      'Varieties: Purple, Yellow',
      'Size: 40-80g per fruit',
      'Seasonal availability',
      'Premium export grade',
    ],
    nutrition: [
      'High in dietary fiber',
      'Rich in antioxidants',
      'Contains vitamin A and C',
      'Supports gut health',
    ],
    icon: Heart,
  },
];

const qualities = [
  {
    icon: Award,
    title: 'Certified Quality',
    description: 'All fruits meet GlobalG.A.P., HACCP, and SMETA standards',
  },
  {
    icon: Leaf,
    title: 'Sustainable Sourcing',
    description: 'Grown using eco-friendly practices with proper soil and water management',
  },
  {
    icon: ThermometerSun,
    title: 'Perfect Ripeness',
    description: 'Custom ripeness programs to match your distribution timeline',
  },
];

export default function ProductsPage() {
  return (
    <div className="w-full">
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
        <div className="absolute inset-0 art-deco-pattern opacity-30" />
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
                Premium <span className="text-primary">Products</span>
              </h1>
              <p className="text-xl text-muted-foreground text-balance">
                Nature's finest tropical superfoods, carefully selected from certified Kenyan farms and delivered fresh to Nordic markets.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {qualities?.map((quality, index) => (
              <AnimatedSection key={quality?.title} delay={index * 0.1}>
                <div className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    <quality.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {quality?.title}
                  </h3>
                  <p className="text-muted-foreground">{quality?.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="space-y-20">
            {products?.map((product, index) => (
              <AnimatedSection key={product?.name}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 card-shadow">
                      <Image
                        src={product?.image ?? ''}
                        alt={product?.name ?? 'Product'}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                        <product.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                          {product?.name}
                        </h2>
                        <p className="text-primary font-medium">{product?.varieties}</p>
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {product?.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h3 className="font-semibold text-foreground mb-3 flex items-center">
                          <Award className="h-5 w-5 text-primary mr-2" />
                          Specifications
                        </h3>
                        <ul className="space-y-2">
                          {product?.specs?.map((spec) => (
                            <li key={spec} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold text-foreground mb-3 flex items-center">
                          <Heart className="h-5 w-5 text-primary mr-2" />
                          Nutritional Benefits
                        </h3>
                        <ul className="space-y-2">
                          {product?.nutrition?.map((benefit) => (
                            <li key={benefit} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Ready to Order?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Contact our team to discuss volumes, specifications, and delivery schedules tailored to your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/images/images/trade"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary hover:bg-accent hover:text-white font-semibold rounded-md transition-all hover-lift"
                >
                  Trade With Us
                </a>
                <a
                  href="/images/images/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-md transition-all hover-lift border border-white/30"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
