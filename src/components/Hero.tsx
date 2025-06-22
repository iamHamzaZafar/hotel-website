import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, ArrowDown } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const scrollToNext = () => {
    const accommodationSection = document.querySelector('#accommodation');
    if (accommodationSection) {
      accommodationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        >
          <source
            src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
          {/* Fallback image if video doesn't load */}
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
            }}
          />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Social Media Links */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col space-y-4">
          <div className="w-px h-16 bg-white/30 mx-auto" />
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-yellow-500 hover:scale-110 transition-all duration-300"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
          <div className="w-px h-16 bg-white/30 mx-auto" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-6 animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full text-yellow-300 text-sm font-medium mb-4">
              Welcome to Paradise
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
            Paradise
            <span className="block text-yellow-400">Hotel</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            Experience luxury and comfort in the heart of paradise. Your unforgettable journey begins here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <button className="px-8 py-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Book Now
            </button>
            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-300">
              Explore Rooms
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;