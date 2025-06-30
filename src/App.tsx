import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Accommodation from './components/Accommodation';
import Facilities from './components/Facilities';
import Testimonials from './components/Testimonials';
import Attractions from './components/Attractions';
import Map from './components/Map';
import Footer from './components/Footer';
import RoomDetails from './components/RoomDetails';

function HomePage() {
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/room-details" element={<RoomDetails />} />
      </Routes>
    </Router>
  );
}

export default App;