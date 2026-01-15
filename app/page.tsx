import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  const products = [
    { name: 'Kent Mango', image: '/mango-kent.jpg', description: 'Sweet, fiberless, and aromatic.' },
    { name: 'Hass Avocado', image: '/avocado-hass.jpg', description: 'Creamy texture and rich flavor.' },
    { name: 'MD2 Pineapple', image: '/pineapple-md2.jpg', description: 'Extra sweet and golden.' },
    { name: 'Passionfruit', image: '/passionfruit-purple.jpg', description: 'Intense tropical aroma.' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - High End Design */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: "url('/hero-kenyan-farm.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/30 z-1" />
        
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight leading-tight">
            From African Sun to <br /> Nordic Tables
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-light">
            Connecting certified African farmers with Nordic consumers through sustainable, traceable trade in premium mangoes, avocados, pineapples, and passionfruit.
          </p>
          <Link 
            href="/contact" 
            className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-12 py-4 rounded-full text-xl font-medium transition-all transform hover:scale-105 inline-block shadow-xl"
          >
            Trade With Us
          </Link>
        </div>
      </section>

      {/* Premium Selection */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Premium Selection</h2>
            <p className="text-gray-600 text-xl">Nature's finest tropical superfoods, carefully selected and delivered fresh</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {products.map((product) => (
              <div key={product.name} className="group">
                <div className="relative h-80 mb-6 overflow-hidden rounded-3xl bg-gray-50 shadow-sm">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
