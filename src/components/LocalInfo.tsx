import { useNavigate } from "react-router-dom";
import {
  Utensils,
  Palmtree,
  Anchor,
  PhoneCall,
  Car,
  Activity,
  Droplets,
  Pill,
  Building,
  MapPin,
  Star,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

const LocalInfo = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Local Restaurants & Cafe",
      icon: Utensils,
      id: "restaurants",
      bgImage:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "Discover the best local cuisine and cafes within walking distance",
      url: "/explore/restaurants",
    },
    {
      name: "Places to Visit",
      icon: Palmtree,
      id: "places",
      bgImage:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Must-see attractions and hidden gems in the area",
      url: "/explore/places",
    },
    {
      name: "Best Beaches",
      icon: Anchor,
      id: "beaches",
      bgImage:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "Crystal clear waters and beautiful sandy beaches to explore",
      url: "/explore/beaches",
    },
    {
      name: "Emergency Numbers",
      icon: PhoneCall,
      id: "emergency",
      bgImage:
        "https://images.unsplash.com/photo-1626259987952-77c56d5a9ed2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Important contacts for any emergency situation",
      url: "/explore/emergency",
    },
    {
      name: "Auto/Moto Rentals",
      icon: Car,
      id: "rentals",
      bgImage:
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Reliable vehicle rental services for exploring the region",
      url: "/explore/rentals",
    },
    {
      name: "Activities",
      icon: Activity,
      id: "activities",
      bgImage:
        "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Fun things to do during your stay in Chalkidiki",
      url: "/explore/activities",
    },
    {
      name: "Gas Stations",
      icon: Droplets,
      id: "gas",
      bgImage:
        "https://images.unsplash.com/photo-1545459650-3548b34e5110?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Nearby fuel stations and operating hours",
      url: "/explore/gas",
    },
    {
      name: "Pharmacy",
      icon: Pill,
      id: "pharmacy",
      bgImage:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Local pharmacies and medical services",
      url: "/explore/pharmacy",
    },
    {
      name: "Other Places",
      icon: Building,
      id: "other",
      bgImage:
        "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Additional points of interest in the surrounding area",
      url: "/explore/other",
    },
  ];

  const handleCardClick = (url: string) => {
    navigate(url);
  };

  return (
    <section id="local-info" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">Explore</h2>
        <p className="text-center text-gray-700 mb-16 max-w-2xl mx-auto">
          Discover everything Chalkidiki has to offer with our local
          recommendations
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <Card
                  className="hover:shadow-xl transition-all duration-500 overflow-hidden h-72 relative group cursor-pointer border-0"
                  onClick={() => handleCardClick(category.url)}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${category.bgImage})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent group-hover:from-black/70 transition-all duration-500"></div>
                  </div>
                  <CardContent className="p-8 flex flex-col items-center text-center relative z-10 h-full justify-end">
                    <div className="bg-white bg-opacity-10 backdrop-blur-md p-3 rounded-full mb-4 border border-white/20">
                      <category.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-medium mb-3 text-white drop-shadow-md">
                      {category.name}
                    </h3>
                    <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-xs">
                      {category.description}
                    </p>
                    <div className="text-white mt-2 flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
                      <span>View details</span>
                      <MapPin size={16} />
                    </div>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 p-4">
                <h4 className="font-semibold text-lg mb-2">{category.name}</h4>
                <p className="text-gray-600">{category.description}</p>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg overflow-hidden border-0">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-ocean-deepblue to-ocean-dark text-white p-8">
                <h3 className="text-xl font-bold mb-2">Rate Us</h3>
                <p className="text-white text-opacity-90">
                  We'd love to hear about your stay! Please consider rating us
                  on:
                </p>
              </div>
              <div className="p-8 grid gap-6">
                <div className="flex items-center">
                  <div className="flex text-yellow-400 gap-1">
                    <Star size={24} fill="currentColor" />
                    <Star size={24} fill="currentColor" />
                    <Star size={24} fill="currentColor" />
                    <Star size={24} fill="currentColor" />
                    <Star size={24} fill="currentColor" />
                  </div>
                  <span className="ml-3 text-gray-700 font-medium">Airbnb</span>
                </div>
                <div className="flex items-center">
                  <div className="flex text-yellow-400 gap-1">
                    <Star size={24} fill="currentColor" />
                    <Star size={24} fill="currentColor" />
                    <Star size={24} fill="currentColor" />
                    <Star size={24} fill="currentColor" />
                    <Star size={24} fill="currentColor" />
                  </div>
                  <span className="ml-3 text-gray-700 font-medium">
                    Booking.com
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardContent className="p-8 bg-gradient-to-br rounded-lg from-coral h-full flex flex-col to-coral/70 text-white">
              <h3 className="text-2xl font-bold mb-4">Enjoy your stay!</h3>
              <p className="mb-6">
                We hope you have a wonderful time at our Seaside Apartment. If
                you need anything during your stay, don't hesitate to reach out
                to your host, Daniil.
              </p>
              <p className="text-white/70 text-sm mt-auto">
                Powered by Tapg.Gr
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LocalInfo;
