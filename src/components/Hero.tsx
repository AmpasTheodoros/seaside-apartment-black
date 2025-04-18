
import { Info, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-[100vh] bg-cover bg-center flex flex-col items-center justify-center" style={{ 
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')" 
    }}>
      <div className="container-custom text-center max-w-4xl">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-white font-playfair">
            Seaside
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90">APARTMENT</p>
        </div>
        
        <div className="flex flex-col space-y-6 items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Link to="/welcome" className="w-full text-3xl md:text-4xl font-bold text-white hover:text-gray-300 transition-colors">
            WELCOME
          </Link>
          <Link to="/house-rules" className="w-full text-3xl md:text-4xl font-bold text-white hover:text-gray-300 transition-colors">
            HOUSE RULES
          </Link>
          <Link to="/amenities" className="w-full text-3xl md:text-4xl font-bold text-white hover:text-gray-300 transition-colors">
            AMENITIES
          </Link>
          <Link to="/explore" className="w-full text-3xl md:text-4xl font-bold text-white hover:text-gray-300 transition-colors">
            EXPLORE
          </Link>
          <Link to="/gallery" className="w-full text-3xl md:text-4xl font-bold text-white hover:text-gray-300 transition-colors">
            GALLERY
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-8">
        <div className="flex space-x-4">
          <Link to="/location" className="flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200 font-medium py-2 px-6 rounded-full transition-colors duration-300">
            <MapPin size={18} />
            Location
          </Link>
          <Link to="/contact" className="flex items-center justify-center gap-2 bg-ocean text-white hover:bg-ocean-deepblue font-medium py-2 px-6 rounded-full transition-colors duration-300">
            <Info size={18} />
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
