
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface Place {
  name: string;
  address: string;
  description: string;
  rating?: number;
  imageUrl?: string;
  website?: string;
  phone?: string;
}

interface CategoryContent {
  title: string;
  description: string;
  headerImage: string;
  places: Place[];
}

const ExploreDetail = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const categoriesContent: Record<string, CategoryContent> = {
    restaurants: {
      title: "Local Restaurants & Cafe",
      description: "Discover the best local cuisine and cafes within walking distance of our seaside apartment. From traditional Greek tavernas to modern cafés, there's something for every taste.",
      headerImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      places: [
        {
          name: "Taverna Ammos",
          address: "Beachfront, Halkidiki",
          description: "Authentic Greek cuisine with ocean views. Try their fresh seafood and traditional moussaka.",
          rating: 4.8,
          imageUrl: "https://images.unsplash.com/photo-1523294587484-bae6cc870010?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          website: "https://example.com/ammos",
          phone: "+30 2310 123456"
        },
        {
          name: "Coffee Island",
          address: "Central Square, 500m from apartment",
          description: "Great coffee shop with a variety of hot and cold beverages. Perfect for morning coffee or afternoon refreshment.",
          rating: 4.5,
          imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          website: "https://example.com/coffee-island",
          phone: "+30 2310 234567"
        },
        {
          name: "Gyros Corner",
          address: "Main Street, 300m from apartment",
          description: "The best gyros in the area. Quick, delicious and affordable street food option.",
          rating: 4.7,
          imageUrl: "https://images.unsplash.com/photo-1529059997568-3d847b1154f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          website: "https://example.com/gyros",
          phone: "+30 2310 345678"
        }
      ]
    },
    places: {
      title: "Places to Visit",
      description: "Must-see attractions and hidden gems in the area. From historical sites to natural wonders, make the most of your stay in Chalkidiki.",
      headerImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      places: [
        {
          name: "Ancient Stagira",
          address: "Stagira, Halkidiki",
          description: "Birthplace of Aristotle with archaeological ruins dating back to 655 BC.",
          imageUrl: "https://images.unsplash.com/photo-1608781905692-1b4b7b7f54a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Blue Lagoon",
          address: "East coast, 15min drive",
          description: "Crystal clear water perfect for swimming and snorkeling.",
          imageUrl: "https://images.unsplash.com/photo-1518790382-a7c1cfaaf55e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Mount Athos Cruise",
          address: "Ouranoupoli port",
          description: "Boat tour around the monastic peninsula of Mount Athos.",
          imageUrl: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    beaches: {
      title: "Best Beaches",
      description: "Crystal clear waters and beautiful sandy beaches to explore. Find your perfect spot to relax and enjoy the Mediterranean sun.",
      headerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      places: [
        {
          name: "Orange Beach",
          address: "5min walk from apartment",
          description: "Sandy beach with shallow waters, perfect for families.",
          imageUrl: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Blue Flag Beach",
          address: "10min drive north",
          description: "Award-winning beach with excellent facilities and water sports.",
          imageUrl: "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Secret Cove",
          address: "15min drive south",
          description: "Hidden gem with privacy and natural beauty.",
          imageUrl: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    emergency: {
      title: "Emergency Numbers",
      description: "Important contacts for any emergency situation. Save these numbers to your phone for quick access in case of need.",
      headerImage: "https://images.unsplash.com/photo-1626259987952-77c56d5a9ed2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      places: [
        {
          name: "European Emergency Number",
          phone: "112",
          description: "General emergency number for police, fire, or medical emergencies."
        },
        {
          name: "Local Hospital",
          phone: "+30 2310 123456",
          address: "Main Road, 15min drive",
          description: "24-hour emergency medical services."
        },
        {
          name: "Police Station",
          phone: "+30 2310 234567",
          address: "Town center, 10min drive",
          description: "Local police department."
        },
        {
          name: "Apartment Manager",
          phone: "+30 6900 123456",
          description: "Contact for any issues with the apartment."
        }
      ]
    },
    rentals: {
      title: "Auto/Moto Rentals",
      description: "Reliable vehicle rental services for exploring the region. Get the best deals on cars, motorbikes, and scooters.",
      headerImage: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      places: [
        {
          name: "Halkidiki Cars",
          address: "Town center, 5min walk",
          phone: "+30 2310 123456",
          description: "Wide range of vehicles at competitive prices.",
          website: "https://example.com/halkidiki-cars"
        },
        {
          name: "Scooter Hire",
          address: "Beach road, 10min walk",
          phone: "+30 2310 234567",
          description: "Affordable scooter and motorbike rentals.",
          website: "https://example.com/scooter-hire"
        },
        {
          name: "Premium Cars",
          address: "Main road, 15min drive",
          phone: "+30 2310 345678",
          description: "Luxury and sports car rentals.",
          website: "https://example.com/premium-cars"
        }
      ]
    }
  };

  // Default to restaurants if categoryId doesn't match any category
  const category = categoriesContent[categoryId || ''] || categoriesContent.restaurants;

  return (
    <div className="min-h-screen">
      {/* Header with background image */}
      <div className="relative h-64 md:h-80 w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${category.headerImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        </div>
        <div className="container-custom relative z-10 h-full flex flex-col justify-between py-8">
          <Button 
            onClick={() => navigate('/explore')}
            variant="ghost"
            className="text-white self-start hover:bg-white/20"
          >
            <ArrowLeft className="mr-2" size={18} /> Back to Explore
          </Button>
          <div>
            <h1 className="text-3xl md:text-5xl text-white font-bold drop-shadow-md">
              {category.title}
            </h1>
            <p className="text-white/90 mt-2 max-w-2xl drop-shadow-md">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.places.map((place, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-0">
              {place.imageUrl && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={place.imageUrl} 
                    alt={place.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              )}
              <CardContent className={place.imageUrl ? "p-6" : "p-6 pt-6"}>
                <h3 className="text-xl font-bold mb-2">{place.name}</h3>
                {place.rating && (
                  <div className="flex items-center mb-2">
                    {[...Array(Math.floor(place.rating))].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                    {place.rating % 1 > 0 && (
                      <Star size={16} className="text-yellow-400" />
                    )}
                    <span className="text-sm text-gray-600 ml-2">{place.rating}/5</span>
                  </div>
                )}
                {place.address && (
                  <p className="text-gray-600 text-sm mb-2">{place.address}</p>
                )}
                <p className="text-gray-700 mb-4">{place.description}</p>
                <div className="flex flex-wrap gap-2">
                  {place.phone && (
                    <Button variant="outline" size="sm" className="text-xs">
                      Call: {place.phone}
                    </Button>
                  )}
                  {place.website && (
                    <Button size="sm" className="text-xs" onClick={() => window.open(place.website, '_blank')}>
                      Visit Website
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreDetail;
