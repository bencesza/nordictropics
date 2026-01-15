import React from 'react';
import Link from 'next/link';

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
      {/* Hero Section - Full Width like nordictropics.com */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: "url('/images/hero-kenyan-farm.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/30 z-1" />
        
        <div className="container-custom relative z-10 text-white py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            From African Sun to <br /> Nordic Tables
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto drop-shadow-md">
            Connecting certified African farmers with Nordic consumers through sustainable, traceable trade.
          </p>
          <Link 
            href="/contact" 
            className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full text-xl font-semibold transition-all transform hover:scale-105 inline-block"
          >
            Trade With Us
          </Link>
        </div>
      </section>

      {/* Premium Selection Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16">Our Premium Selection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {products.map((product) => (
              <div key={product.name} className="group cursor-pointer">
                <div className="relative h-80 mb-6 overflow-hidden rounded-2xl shadow-sm">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-lg">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
