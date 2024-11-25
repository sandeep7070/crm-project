import React from 'react';

const CardsCollection = () => {
  const cards = [
    {
      title: "Basic Card",
      description: "A simple card with basic information and styling.",
      image: '/hiibeg.webp',
      tag: "Basic"
    },
    {
      title: "Featured Card",
      description: "A card with enhanced styling and hover effects.",
      image: "/api/placeholder/300/200",
      tag: "Featured"
    },
    {
      title: "Interactive Card",
      description: "A card with interactive elements and shadow effects.",
      image: "/api/placeholder/300/200",
      tag: "Interactive"
    } 
  ];
  return (
    <div className="p-8  min-h-screen bg-[#182638] ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-white">Card Examples</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Basic Card */}
          <div className="bg-[#2c4366] rounded-lg overflow-hidden shadow">
            <img 
              src="/api/placeholder/300/200" 
              alt="Card image" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-xs font-semibold bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                Basic
              </span>
              <h2 className="mt-4 text-xl font-semibold text-white">Basic Card</h2>
              <p className="mt-2 text-white">A simple card with basic information and styling.</p>
            </div>
          </div>

          {/* Featured Card */}
          <div className="bg-[#2c4366] rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-1">
            <img 
              src="/api/placeholder/300/200" 
              alt="Card image" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-xs font-semibold bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
                Featured
              </span>
              <h2 className="mt-4 text-xl font-semibold text-white">Featured Card</h2>
              <p className="mt-2 text-white">A card with enhanced styling and hover effects.</p>
              <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Interactive Card */}
          <div className="bg-[#2c4366] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
            <div className="relative">
              <img 
                src="/api/placeholder/300/200" 
                alt="Card image" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className="text-xs font-semibold bg-green-100 text-green-600 px-3 py-1 rounded-full">
                  Interactive
                </span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white">Interactive Card</h2>
              <p className="mt-2 text-white">A card with interactive elements and shadow effects.</p>
              <div className="mt-4 flex justify-between items-center">
                <button className="text-green-600 hover:text-green-700 font-medium">
                  View Details
                </button>
                <div className="flex space-x-2">
                  <span className="text-gray-400 hover:text-gray-600 cursor-pointer">
                    ♥
                  </span>
                  <span className="text-gray-400 hover:text-gray-600 cursor-pointer">
                    ↗
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsCollection;