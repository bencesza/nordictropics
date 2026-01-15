import React from 'react';

export default function ProductsPage() {
  const products = [
    { name: 'Kent Mango', image: '/images/mango-kent.jpg', origin: 'Kenya', availability: 'Nov - Mar' },
    { name: 'Hass Avocado', image: '/images/avocado-hass.jpg', origin: 'Kenya', availability: 'Year-round' },
    { name: 'MD2 Pineapple', image: '/images/pineapple-md2.jpg', origin: 'Kenya', availability: 'Year-round' },
    { name: 'Passionfruit', image: '/images/passionfruit-purple.jpg', origin: 'Kenya', availability: 'Seasonal' }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-20">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {products.map((p) => (
            <div key={p.name} className="bg-white rounded-[2rem] overflow-hidden shadow-lg">
              <div className="h-[400px]"><img src={p.image} alt={p.name} className="w-full h-full object-cover" /></div>
              <div className="p-10">
                <h2 className="text-3xl font-bold mb-4">{p.name}</h2>
                <div className="flex justify-between text-xl text-gray-600">
                  <span>Origin: {p.origin}</span>
                  <span>Availability: {p.availability}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
