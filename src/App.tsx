import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Accommodation from './components/Accommodation';
import Facilities from './components/Facilities';
import Testimonials from './components/Testimonials';
import Attractions from './components/Attractions';
import Map from './components/Map';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Accommodation />
      <Facilities />
      <Testimonials />
      <Attractions />
      <Map />
      <Footer />
    </div>
  );
}

export default App;