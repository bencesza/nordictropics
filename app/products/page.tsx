import React from 'react';

export default function ProductsPage() {
  const products = [
    { name: 'Kent Mango', image: '/images/mango-kent.jpg', origin: 'Kenya', availability: 'November - March' },
    { name: 'Hass Avocado', image: '/images/avocado-hass.jpg', origin: 'Kenya', availability: 'Year-round' },
    { name: 'MD2 Pineapple', image: '/images/pineapple-md2.jpg', origin: 'Kenya', availability: 'Year-round' },
    { name: 'Passionfruit', image: '/images/passionfruit-purple.jpg', origin: 'Kenya', availability: 'Seasonal' }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {products.map((product) => (
            <div key={product.name} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="h-80 bg-gray-200">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                <div className="flex justify-between text-gray-600">
                  <span>Origin: {product.origin}</span>
                  <span>Availability: {product.availability}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
