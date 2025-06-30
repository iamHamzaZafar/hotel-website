import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  // const [email, setEmail] = useState('');

  // const handleNewsletterSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle newsletter signup
  //   console.log('Newsletter signup:', email);
  //   setEmail('');
  //   alert('Thank you for subscribing to our newsletter!');
  // };

  const quickLinks = [
    'About Us', 'Rooms & Suites', 'Dining', 'Spa & Wellness', 'Activities', 'Events'
  ];

  const services = [
    'Airport Transfer', 'Concierge', 'Room Service', 'Laundry', 'Business Center', 'Pet Services'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              {/* <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center"> */}
                {/* <MapPin className="w-6 h-6 text-white" /> */}
              <img src="/logo.png" alt="Hotel Logo" className="h-44 w-40" />

              {/* </div> */}
              <span className="text-2xl font-bold">Rgonsa Hotel</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience luxury and comfort in paradise. Your unforgettable journey begins at Paradise Hotel, where every detail is crafted for your perfect getaway.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400" />
                    Skardu - Lower Kachura Hotel
                <span className="text-gray-300"></span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">+92 (300) 494-0451</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">info@paradisehotel.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Stay Connected</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            {/* <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-white placeholder-gray-400"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-500 hover:bg-yellow-600 p-2 rounded-md transition-colors"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </form> */}

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="bg-gray-800 p-3 rounded-full hover:bg-yellow-500 transition-colors"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Rgonsa Hotel. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;