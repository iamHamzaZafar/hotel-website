import React, { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'An absolutely magical experience! The staff was incredibly attentive, the rooms were luxurious, and the ocean view was breathtaking. This is definitely a place I would return to.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Singapore',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'The Paradise Hotel exceeded all my expectations. From the moment I arrived, I felt like royalty. The spa treatments were world-class and the dining experience was unforgettable.',
    },
    {
      id: 3,
      name: 'Emma Williams',
      location: 'London, UK',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Perfect honeymoon destination! The private beach access, romantic dinners, and impeccable service made our stay truly special. We are already planning our anniversary trip back.',
    },
    {
      id: 4,
      name: 'David Rodriguez',
      location: 'Madrid, Spain',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Outstanding luxury hotel with attention to every detail. The facilities are top-notch, the location is perfect, and the staff goes above and beyond to ensure a memorable stay.',
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      location: 'Sydney, Australia',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'A five-star experience from start to finish. The sunset views from our suite were incredible, and the concierge helped us discover amazing local attractions. Highly recommended!',
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