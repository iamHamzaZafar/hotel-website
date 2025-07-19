import React, { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

const testimonials = [
  {
    id: 1,
    name: 'Ayesha Khan',
    location: 'Lahore, Pakistan',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQDM2QI8oYQB0dBArDmsVEcT8BicXlSaHTA&s',
    rating: 5,
    text: 'Truly a mesmerizing experience! The views were surreal, the hospitality unmatched, and the food reminded me of home with a touch of luxury. Can’t wait to visit again.',
  },
  {
    id: 2,
    name: 'Bilal Ahmed',
    location: 'Karachi, Pakistan',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'From the scenic landscape to the comfortable rooms, everything was perfect. The staff was extremely courteous and made our family trip unforgettable.',
  },
  {
    id: 3,
    name: 'Zainab Fatima',
    location: 'Islamabad, Pakistan',
    image: 'https://i.pinimg.com/736x/27/d4/c8/27d4c833b80d767b5cdc7ab22b52c8bd.jpg',
    rating: 5,
    text: 'A perfect getaway spot! The calmness of the lake, the luxury of the resort, and the warmth of the staff made it feel like a dream. Highly recommended for couples and families.',
  },
  {
    id: 4,
    name: 'Hassan Raza',
    location: 'Rawalpindi, Pakistan',
    image: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'What an exceptional stay! The natural beauty surrounding the hotel is unmatched. The management has truly done a great job maintaining such high standards.',
  },
  {
    id: 5,
    name: 'Maria Yousuf',
    location: 'Faisalabad, Pakistan',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'Everything was picture-perfect — from the room service to the guided tours. It was a luxurious retreat that gave us beautiful memories to cherish.',
  },
];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Guests Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued guests have to say about their experience.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {getVisibleTestimonials().map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-yellow-200" />
                    <p className="text-gray-700 italic leading-relaxed pl-6">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-yellow-500 w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;