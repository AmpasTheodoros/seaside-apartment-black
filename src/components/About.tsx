
import { Wifi, Tv, Bath, Home, Coffee, Waves } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">About the Apartment</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Our beautiful seaside apartment offers the perfect blend of comfort, convenience, and stunning ocean views. Located just steps from the beach, you'll enjoy the sound of waves and the refreshing sea breeze throughout your stay.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This spacious apartment features modern amenities and comfortable furnishings to ensure your vacation is relaxing and memorable. The open floor plan creates a bright, airy atmosphere that perfectly complements the coastal setting.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With 2 bedrooms and 1 bathroom, the apartment comfortably accommodates up to 4 guests, perfect for families or small groups of friends.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="feature-card flex items-center gap-3">
                <Wifi className="text-ocean" size={20} />
                <span>Free WiFi</span>
              </div>
              <div className="feature-card flex items-center gap-3">
                <Tv className="text-ocean" size={20} />
                <span>Smart TV</span>
              </div>
              <div className="feature-card flex items-center gap-3">
                <Bath className="text-ocean" size={20} />
                <span>Full Bath</span>
              </div>
              <div className="feature-card flex items-center gap-3">
                <Home className="text-ocean" size={20} />
                <span>2 Bedrooms</span>
              </div>
              <div className="feature-card flex items-center gap-3">
                <Coffee className="text-ocean" size={20} />
                <span>Kitchen</span>
              </div>
              <div className="feature-card flex items-center gap-3">
                <Waves className="text-ocean" size={20} />
                <span>Ocean View</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Apartment interior" 
              className="rounded-lg shadow-lg object-cover h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
