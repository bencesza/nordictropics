import React from 'react';
import Link from 'react-router-dom';
import { ArrowRight, CheckCircle2, Globe, ShieldCheck, Leaf } from 'lucide-react';

export default function HomePage() {
  const products = [
    {
      name: 'Kent Mango',
      image: '/images/mango-kent.jpg',
      description: 'Sweet, fiberless, and aromatic.'
    },
    {
      name: 'Hass Avocado',
      image: '/images/avocado-hass.jpg',
      description: 'Creamy texture and rich flavor.'
    },
    {
      name: 'MD2 Pineapple',
      image: '/images/pineapple-md2.jpg',
      description: 'Extra sweet and golden.'
    },
    {
      name: 'Passionfruit',
      image: '/images/passionfruit-purple.jpg',
      description: 'Intense tropical aroma.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: "url('/images/hero-kenyan-farm.jpg')",
            filter: "brightness(0.6)"
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">From African Sun to Nordic Tables</h1>
          <p className="text-xl md:text-2xl mb-8">Connecting certified African farmers with Nordic consumers through sustainable, traceable trade.</p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
            Trade With Us
          </button>
        </div>
      </section>

      {/* Product Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Premium Selection</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.name} className="group cursor-pointer">
                <div className="relative h-64 mb-4 overflow-hidden rounded-xl">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
