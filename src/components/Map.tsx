import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Map = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
            Location
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find Rgonsa Hotel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in the heart of paradise, our hotel offers easy access to all major attractions and stunning natural beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">123 Rgonsa Boulevard<br />Tropical Island, TI 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+92 (300) 494-0451</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@rgonsahotel.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Reception Hours</h4>
                    <p className="text-gray-600">24/7 Front Desk Service</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Getting Here</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {/* <li>• 15 minutes from Paradise International Airport</li> */}
                  <li>• Complimentary shuttle service available</li>
                  <li>• Taxi and ride-sharing services</li>
                  <li>• Car rental available on-site</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-96 lg:h-full min-h-[400px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.1234567890123!2d-156.68123456789012!3d20.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDA3JzI0LjQiTiAxNTbCsDQwJzUyLjQiVw!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Paradise Hotel Location"
              />
              
              {/* Fallback content */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600">
                <div className="text-center text-white">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Rgonsa Hotel</h3>
                  <p className="text-blue-100">123 Rgonsa Boulevard, Tropical Island</p>
                  <p className="text-blue-100 mt-2">Interactive map loading...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;