
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scrolling when menu is open
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className="bg-black/90 text-white fixed top-0 left-0 right-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <Link to="/" className="text-2xl font-bold text-white font-playfair flex items-center">
          Seaside Apartment
          <span className="text-sm ml-1">📍</span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="text-white"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Full screen overlay menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex flex-col justify-center items-center">
            <div className="absolute top-4 right-4">
              <button onClick={closeMenu} className="text-white p-2">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col items-center space-y-8 text-center">
              <Link 
                to="/" 
                onClick={closeMenu}
                className="text-3xl font-bold text-white hover:text-gray-300 transition-colors"
              >
                HOME
              </Link>
              <Link 
                to="/welcome" 
                onClick={closeMenu}
                className="text-3xl font-bold text-white hover:text-gray-300 transition-colors"
              >
                WELCOME
              </Link>
              <Link 
                to="/house-rules" 
                onClick={closeMenu}
                className="text-3xl font-bold text-white hover:text-gray-300 transition-colors"
              >
                HOUSE RULES
              </Link>
              <Link 
                to="/amenities" 
                onClick={closeMenu}
                className="text-3xl font-bold text-white hover:text-gray-300 transition-colors"
              >
                AMENITIES
              </Link>
              <Link 
                to="/explore" 
                onClick={closeMenu}
                className="text-3xl font-bold text-white hover:text-gray-300 transition-colors"
              >
                EXPLORE
              </Link>
              <Link 
                to="/gallery" 
                onClick={closeMenu}
                className="text-3xl font-bold text-white hover:text-gray-300 transition-colors"
              >
                GALLERY
              </Link>
              <Link 
                to="/testimonials" 
                onClick={closeMenu}
                className="text-3xl font-bold text-white hover:text-gray-300 transition-colors"
              >
                TESTIMONIALS
              </Link>
              <Link 
                to="/location" 
                onClick={closeMenu}
                className="text-3xl font-bold text-white hover:text-gray-300 transition-colors"
              >
                LOCATION
              </Link>
              <Link 
                to="/contact" 
                onClick={closeMenu}
                className="text-3xl font-bold text-white hover:text-gray-300 transition-colors"
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
