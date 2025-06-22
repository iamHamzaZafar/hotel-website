import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Clock, Camera } from 'lucide-react';

const Attractions = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const attractions = [
    {
      id: 1,
      name: 'Paradise Beach',
      image: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Crystal clear waters and white sandy beaches perfect for swimming and sunbathing.',
      distance: '2 minutes walk',
      duration: '2-3 hours',
      highlights: ['Snorkeling', 'Beach Volleyball', 'Sunset Views'],
    },
    {
      id: 2,
      name: 'Coral Reef Diving',
      image: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Explore vibrant coral reefs and tropical marine life in pristine waters.',
      distance: '10 minutes boat ride',
      duration: 'Half day',
      highlights: ['Scuba Diving', 'Snorkeling', 'Marine Photography'],
    },
    {
      id: 3,
      name: 'Tropical Rainforest',
      image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Lush rainforest trails with exotic wildlife and breathtaking waterfalls.',
      distance: '30 minutes drive',
      duration: 'Full day',
      highlights: ['Hiking', 'Wildlife Spotting', 'Waterfall Swimming'],
    },
    {
      id: 4,
      name: 'Historic Old Town',
      image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Charming colonial architecture and local markets with traditional crafts.',
      distance: '15 minutes drive',
      duration: '3-4 hours',
      highlights: ['Architecture', 'Shopping', 'Local Cuisine'],
    },
    {
      id: 5,
      name: 'Sunset Cruise',
      image: 'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Romantic sunset sailing with champagne and panoramic ocean views.',
      distance: '5 minutes walk to marina',
      duration: '2 hours',
      highlights: ['Sailing', 'Sunset Views', 'Dolphin Watching'],
    },
    {
      id: 6,
      name: 'Mountain Observatory',
      image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Panoramic island views and stargazing experience at the highest peak.',
      distance: '45 minutes drive',
      duration: 'Half day',
      highlights: ['Panoramic Views', 'Stargazing', 'Photography'],
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
    <section id="attractions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
            Explore
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nearby Attractions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the beauty and adventure that surrounds our paradise location.
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
            {attractions.map((attraction) => (
              <div
                key={attraction.id}
                className="flex-none w-80 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-1 text-sm text-gray-700">
                      <MapPin className="w-4 h-4" />
                      <span>{attraction.distance}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-yellow-500 px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-1 text-sm text-white font-medium">
                      <Clock className="w-4 h-4" />
                      <span>{attraction.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{attraction.name}</h3>
                  <p className="text-gray-600 mb-4">{attraction.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {attraction.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                    <Camera className="w-4 h-4" />
                    <span>Learn More</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attractions;