import React, { useEffect, useState } from 'react';
import { ArrowLeft, Users, Bed, Bath, Wifi, Snowflake, Droplets, Flame, Coffee, Phone, Mail, MapPin, ChevronLeft, ChevronRight } from 'lucide-react' ;

interface Room {
  id: string;
  name: string;
  roomNumber: string;
  images: string[];
  description: string;
  price: number;
  bedConfiguration: string;
  features: string[];
  amenities: any[];
  capacity: number;
  hasAC: boolean;
}

const RoomDetails = () => {
  const [room, setRoom] = useState<Room | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Get room data from localStorage
    const roomData = localStorage.getItem('selectedRoom');
    if (roomData) {
      const parsedRoom = JSON.parse(roomData);
      // Ensure we have the images array
      if (!parsedRoom.images) {
        parsedRoom.images = [
          parsedRoom.image || 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
        ];
      }
      setRoom(parsedRoom);
    }
  }, []);

  const handleBackClick = () => {
    window.history.back();
  };

  const handleContact = () => {
    // You can implement contact functionality here
    alert('Contact functionality - you can integrate with your booking system or contact form');
  };

  const handleImageNavigation = (direction: 'prev' | 'next') => {
    if (!room) return;
    
    if (direction === 'next') {
      setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
    } else {
      setCurrentImageIndex((prev) => prev === 0 ? room.images.length - 1 : prev - 1);
    }
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Room not found</h2>
          <button
            onClick={handleBackClick}
            className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const serviceIcons = {
    'AC (Inverter)': Snowflake,
    'Hot Water': Droplets,
    'Free Wi-Fi': Wifi,
    'Heaters': Flame,
    'Extra Mattresses': Bed,
    'Breakfast': Coffee,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={handleBackClick}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Rooms</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Image Gallery */}
          <div className="space-y-4">
            {/* Main Image with Navigation */}
            <div className="relative group">
              <img
                src={room.images[currentImageIndex]}
                alt={`${room.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-96 object-cover rounded-2xl transition-all duration-500"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={() => handleImageNavigation('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={() => handleImageNavigation('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {room.images.length}
              </div>

              {/* Room Labels */}
              <div className="absolute top-4 left-4 bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Room {room.roomNumber}
              </div>
              {room.hasAC && (
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  <Snowflake className="w-4 h-4 mr-1" />
                  AC Available
                </div>
              )}

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {room.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-5 gap-2">
              {room.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'ring-2 ring-yellow-500 ring-offset-2' 
                      : 'hover:opacity-75'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Room view ${index + 1}`}
                    className="w-full h-16 object-cover"
                  />
                  {index === currentImageIndex && (
                    <div className="absolute inset-0 bg-yellow-500/20" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Room Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{room.name}</h1>
              <p className="text-xl text-gray-600 mb-4">{room.bedConfiguration}</p>
              <p className="text-gray-700 leading-relaxed">{room.description}</p>
            </div>

            {/* Room Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Room Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-700">Up to {room.capacity} guests</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bed className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-700">{room.bedConfiguration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bath className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-700">Private Bathroom</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-700">Room {room.roomNumber}</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Available Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {room.features.map((feature, index) => {
                  const IconComponent = serviceIcons[feature as keyof typeof serviceIcons];
                  return (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      {IconComponent && <IconComponent className="w-5 h-5 text-yellow-500" />}
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Pricing & Contact */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <div className="text-3xl font-bold text-gray-900">
                    ₹{room.price}
                    <span className="text-base font-normal text-gray-500">/night</span>
                  </div>
                  <p className="text-gray-600">Best rate guaranteed</p>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={handleContact}
                  className="w-full px-6 py-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Contact for Booking</span>
                </button>
                
                <div className="text-center text-gray-600">
                  <p className="mb-2">For reservations and inquiries:</p>
                  <div className="flex items-center justify-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Phone className="w-4 h-4" />
                      <span>+92 (300) 494-0451</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Mail className="w-4 h-4" />
                      <span>info@rgonsahotel.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
