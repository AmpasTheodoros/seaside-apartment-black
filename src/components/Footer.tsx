
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ocean-deepblue text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 font-playfair">Seaside Apartment</h3>
            <p className="mb-6 text-gray-300">
              Your perfect beachfront getaway with stunning ocean views and modern amenities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-ocean-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-ocean-light transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-ocean-light transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#amenities" className="text-gray-300 hover:text-white transition-colors">Amenities</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#location" className="text-gray-300 hover:text-white transition-colors">Location</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Book Now</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-ocean-light flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-300">123 Seaside Boulevard, Coastal Town, CT 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-ocean-light flex-shrink-0" size={18} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-ocean-light flex-shrink-0" size={18} />
                <span className="text-gray-300">booking@seasideapartment.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 mb-8" />
        
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Seaside Apartment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
