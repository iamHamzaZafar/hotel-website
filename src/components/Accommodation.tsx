import React, { useState } from 'react';
import { Users, Bed, Bath, Wifi, Snowflake, Droplets, ChevronLeft, ChevronRight } from 'lucide-react';

const Accommodation = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: string]: number}>({});

  const rooms = [
    {
      id: '101',
      name: 'Executive Room',
      roomNumber: '101',
      images: [
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      description: 'Luxurious executive room with modern amenities and air conditioning.',
      price: 3500,
      bedConfiguration: '1 Double Bed',
      features: ['AC (Inverter)', 'Hot Water', 'Free Wi-Fi', 'Heaters'],
      amenities: [Snowflake, Droplets, Wifi, Bed],
      capacity: 2,
      hasAC: true,
    },
    {
      id: '102',
      name: 'Executive Room',
      roomNumber: '102',
      images: [
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1743230/pexels-photo-1743230.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      description: 'Spacious executive room with double and single bed, featuring air conditioning.',
      price: 4000,
      bedConfiguration: '1 Double Bed, 1 Single Bed',
      features: ['AC (Inverter)', 'Hot Water', 'Free Wi-Fi', 'Heaters'],
      amenities: [Snowflake, Droplets, Wifi, Bed],
      capacity: 3,
      hasAC: true,
    },
    {
      id: '103',
      name: 'Deluxe Room',
      roomNumber: '103',
      images: [
        'https://images.pexels.com/photos/1743230/pexels-photo-1743230.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      description: 'Comfortable deluxe room with essential amenities for a pleasant stay.',
      price: 2500,
      bedConfiguration: '1 Double Bed',
      features: ['Hot Water', 'Free Wi-Fi', 'Heaters', 'Extra Mattresses'],
      amenities: [Droplets, Wifi, Bed, Bath],
      capacity: 2,
      hasAC: false,
    },
    {
      id: '104',
      name: 'Deluxe Plus Room',
      roomNumber: '104',
      images: [
        'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      description: 'Enhanced deluxe room with double and single bed configuration.',
      price: 3000,
      bedConfiguration: '1 Double Bed, 1 Single Bed',
      features: ['Hot Water', 'Free Wi-Fi', 'Heaters', 'Extra Mattresses'],
      amenities: [Droplets, Wifi, Bed, Bath],
      capacity: 3,
      hasAC: false,
    },
    {
      id: '105',
      name: 'Deluxe Room',
      roomNumber: '105',
      images: [
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1743230/pexels-photo-1743230.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      description: 'Cozy deluxe room with double bed and all essential amenities.',
      price: 2500,
      bedConfiguration: '1 Double Bed',
      features: ['Hot Water', 'Free Wi-Fi', 'Heaters', 'Extra Mattresses'],
      amenities: [Droplets, Wifi, Bed, Bath],
      capacity: 2,
      hasAC: false,
    },
  ];

  const handleRoomClick = (room: any) => {
    // Store room data in localStorage for the details page
    const roomWithCurrentImage = {
      ...room,
      image: room.images[currentImageIndex[room.id] || 0]
    };
    localStorage.setItem('selectedRoom', JSON.stringify(roomWithCurrentImage));
    // Navigate to room details page
    window.location.href = `/room-details?room=${room.id}`;
  };

  const handleImageNavigation = (roomId: string, direction: 'prev' | 'next', totalImages: number, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent room card click
    
    const currentIndex = currentImageIndex[roomId] || 0;
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % totalImages;
    } else {
      newIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
    }
    
    setCurrentImageIndex(prev => ({
      ...prev,
      [roomId]: newIndex
    }));
  };

  return (
    <section id="accommodation" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
            Our Rooms
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comfortable Accommodation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully designed rooms, each offering comfort and essential amenities for your perfect stay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => {
            const currentIndex = currentImageIndex[room.id] || 0;
            const currentImage = room.images[currentIndex];
            
            return (
              <div
                key={room.id}
                onClick={() => handleRoomClick(room)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative group">
                  <img
                    src={currentImage}
                    alt={room.name}
                    className="w-full h-64 object-cover transition-all duration-300"
                  />
                  
                  {/* Image Navigation Buttons */}
                  <button
                    onClick={(e) => handleImageNavigation(room.id, 'prev', room.images.length, e)}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  
                  <button
                    onClick={(e) => handleImageNavigation(room.id, 'next', room.images.length, e)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    {room.images.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="absolute top-4 left-4 bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Room {room.roomNumber}
                  </div>
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ₹{room.price}/night
                  </div>
                  {room.hasAC && (
                    <div className="absolute top-16 right-4 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                      <Snowflake className="w-3 h-3 mr-1" />
                      AC
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{room.name}</h3>
                  <p className="text-gray-600 mb-2">{room.bedConfiguration}</p>
                  <p className="text-gray-600 mb-4">{room.description}</p>

                  <div className="flex items-center mb-4">
                    {room.amenities.map((Icon, index) => (
                      <div key={index} className="flex items-center mr-4">
                        <Icon className="w-5 h-5 text-yellow-500 mr-1" />
                      </div>
                    ))}
                    <span className="text-sm text-gray-500">Up to {room.capacity} guests</span>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {room.features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-3xl font-bold text-gray-900">
                      ₹{room.price}
                      <span className="text-base font-normal text-gray-500">/night</span>
                    </div>
                    <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transform hover:scale-105 transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Accommodation;