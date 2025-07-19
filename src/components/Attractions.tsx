import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Clock } from 'lucide-react';

const Attractions = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const attractions = [
    {
      id: 1,
      name: 'Lower Kachura Lake',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLStonjJ4n-B8a42WuA5ZlY9fcdl6PtUzwoA&s',
      description: 'Scenic lake right by the stay — perfect for boating, dining, and relaxing.',
      distance: 'Right by stay',
      duration: '1-2 hours',
      highlights: ['Boating', 'Dining', 'Photo Ops', 'Relaxing'],
    },
    {
      id: 2,
      name: 'Upper Kachura Lake',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHNOxSNJK2gDQZHYJjY9dJyTlSqbKmoI6uAg&s',
      description: 'Peaceful lake with hiking trails and trout fishing opportunities.',
      distance: '~2 km / 15–30 min',
      duration: '2-3 hours',
      highlights: ['Hiking', 'Trout Fishing', 'Serene Views'],
    },
    {
      id: 3,
      name: 'Soq Valley',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfmyznTV1MognreLWUmbLhsv-C8y3UvL0PYg&s',
      description: 'Off-road valley ideal for trekking, camping, and photography.',
      distance: 'Off road nearby',
      duration: 'Half day',
      highlights: ['Trekking', 'Camping', 'Photography'],
    },
    {
      id: 4,
      name: 'Satpara Lake',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRosbJ88VXkKW7xjuFUQ3ViR9EXHy_aKeCQvg&s',
      description: 'A large lake surrounded by mountains, perfect for scenic boating and leisure.',
      distance: '~6 mi by road',
      duration: '1-2 hours',
      highlights: ['Boating', 'Scenic Leisure'],
    },
    {
      id: 5,
      name: 'Deosai National Park',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOXa880po1MfDrxTdu4lBK9rGfHHEwrkByIw&s',
      description: 'High-altitude plains with wildlife, wildflowers, and panoramic views.',
      distance: '~2 hrs by road',
      duration: 'Full day',
      highlights: ['Wildlife', 'Plains', 'High-Altitude Views'],
    },
    {
      id: 6,
      name: 'Skardu / Shigar Forts',
      image: 'https://res.cloudinary.com/www-travelpakistani-com/image/upload/v1660911387/Shigar_Fort_-_Skardu.jpg',
      description: 'Explore Baltistan’s cultural legacy through preserved forts and architecture.',
      distance: '~20–30 km',
      duration: '2-3 hours',
      highlights: ['Cultural Heritage', 'Architecture'],
    },
    {
      id: 7,
      name: 'Manthal Buddha Rock',
      image: 'https://res.cloudinary.com/www-travelpakistani-com/image/upload/w_900,h_360,c_fill,g_auto,q_30,dpr_1.0,f_auto/blogs/hn7ppd2vtamauhc6u40a.webp',
      description: 'Ancient Buddhist carving from the 8th century etched into rock.',
      distance: '~3 km from Satpara road',
      duration: '1 hour',
      highlights: ['Historic Relic'],
    },
    {
      id: 8,
      name: 'Manthokha Waterfall',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGxnz3-FlXtmZBThhhjbh0XLWWY-jRyI5zNw&s',
      description: 'Majestic waterfall perfect for a day trip, with nearby trout farms.',
      distance: '~80 km (day trip)',
      duration: 'Full day',
      highlights: ['Waterfalls', 'Nature', 'Trout Farming'],
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

                  {/* <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                    <Camera className="w-4 h-4" />
                    <span>Learn More</span>
                  </button> */}
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
