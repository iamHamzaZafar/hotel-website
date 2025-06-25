import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Droplets, Snowflake, Flame, Wifi, Bed, Coffee } from 'lucide-react';

const Facilities = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const facilities = [
    {
      icon: Droplets,
      name: 'Hot Water',
      description: '24/7 hot water supply in all rooms',
      image: 'https://images.pexels.com/photos/6969831/pexels-photo-6969831.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      icon: Snowflake,
      name: 'AC (Inverter)',
      description: 'Air conditioning available in rooms 101 & 102',
      image: 'https://images.pexels.com/photos/4050344/pexels-photo-4050344.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      icon: Flame,
      name: 'Heaters',
      description: 'Room heaters for comfortable stay',
      image: 'https://images.pexels.com/photos/6969826/pexels-photo-6969826.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      icon: Wifi,
      name: 'Free Wi-Fi',
      description: 'High-speed internet throughout the property',
      image: 'https://images.pexels.com/photos/4050344/pexels-photo-4050344.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      icon: Bed,
      name: 'Extra Mattresses',
      description: 'Additional bedding available on request',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      icon: Coffee,
      name: 'Breakfast',
      description: 'Complimentary breakfast service',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our essential services designed to make your stay comfortable and memorable.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <div
                  key={index}
                  className="flex-none w-80 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative">
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-yellow-500 p-3 rounded-full mb-2">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.name}</h3>
                    <p className="text-gray-600">{facility.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;