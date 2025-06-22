import React from 'react';
import { Users, Bed, Bath, Wifi, Car, Coffee } from 'lucide-react';

const Accommodation = () => {
  const rooms = [
    {
      id: 1,
      name: 'Deluxe Ocean View',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Spacious room with breathtaking ocean views and modern amenities.',
      price: 299,
      features: ['Ocean View', 'King Bed', 'Private Bathroom', 'Balcony'],
      amenities: [Users, Bed, Bath, Wifi],
      capacity: 2,
    },
    {
      id: 2,
      name: 'Premium Suite',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Luxurious suite with separate living area and premium facilities.',
      price: 449,
      features: ['Living Area', 'King Bed', 'Marble Bathroom', 'Mini Bar'],
      amenities: [Users, Bed, Bath, Coffee],
      capacity: 4,
    },
    {
      id: 3,
      name: 'Garden Villa',
      image: 'https://images.pexels.com/photos/1743230/pexels-photo-1743230.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Private villa surrounded by tropical gardens with pool access.',
      price: 599,
      features: ['Private Pool', 'Garden View', 'Terrace', 'Kitchenette'],
      amenities: [Users, Bed, Bath, Car],
      capacity: 4,
    },
    {
      id: 4,
      name: 'Presidential Suite',
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'The ultimate luxury experience with panoramic views and butler service.',
      price: 899,
      features: ['Butler Service', 'Panoramic View', 'Jacuzzi', 'Private Dining'],
      amenities: [Users, Bed, Bath, Wifi],
      capacity: 6,
    },
  ];

  return (
    <section id="accommodation" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
            Our Rooms
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Luxury Accommodation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully designed rooms and suites, each offering unique experiences and premium comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ${room.price}/night
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{room.name}</h3>
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
                    ${room.price}
                    <span className="text-base font-normal text-gray-500">/night</span>
                  </div>
                  <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transform hover:scale-105 transition-all duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodation;