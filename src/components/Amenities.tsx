
import { Check, Wifi, Tv, Bath, UtensilsCrossed, Palmtree, Car, ShowerHead, Utensils, Wind } from 'lucide-react';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { Card, CardContent } from './ui/card';

const Amenities = () => {
  const amenities = [
    { 
      icon: Wifi, 
      title: "High-Speed WiFi", 
      description: "Stay connected with complimentary high-speed internet",
      details: (
        <div className="space-y-2">
          <p className="font-semibold">Network Details:</p>
          <div className="space-y-1">
            <p><span className="font-medium">Network:</span> TP-Link_85CC</p>
            <p><span className="font-medium">Password:</span> 6945396538</p>
          </div>
          <div className="mt-3 flex justify-center">
            <div className="bg-black p-3 inline-block">
              {/* This is a placeholder for QR code - ideally you'd generate an actual QR code */}
              <div className="w-24 h-24 bg-white grid grid-cols-4 grid-rows-4 gap-0.5">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className={`${Math.random() > 0.5 ? 'bg-black' : 'bg-white'}`}></div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-xs text-center mt-2">Scan to connect automatically</p>
        </div>
      )
    },
    { 
      icon: Tv, 
      title: "Smart TV", 
      description: "55-inch smart TV with Netflix and streaming services",
      details: (
        <div className="space-y-2">
          <p className="font-semibold">TV Instructions:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Press the red power button to turn TV on/off</li>
            <li>Use source button to switch between HDMI inputs</li>
            <li>Netflix app is pre-installed - just press the Netflix button</li>
            <li>Smart Hub button accesses all streaming apps</li>
            <li>Volume controls are on the right side of the remote</li>
          </ul>
        </div>
      )
    },
    { 
      icon: Bath, 
      title: "Full Bathroom", 
      description: "Modern bathroom with shower and premium toiletries",
      details: (
        <div className="space-y-2">
          <p className="font-semibold">Bathroom Notes:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Hot water takes about 30 seconds to reach the shower</li>
            <li>Please turn the shower knob to the left for hot water</li>
            <li>Extra towels are in the cabinet under the sink</li>
            <li>Hairdryer is located in the top drawer</li>
          </ul>
        </div>
      )
    },
    { 
      icon: UtensilsCrossed, 
      title: "Fully Equipped Kitchen", 
      description: "Modern kitchen with all necessary appliances",
      details: (
        <div className="space-y-2">
          <p className="font-semibold">Kitchen Equipment:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Coffee maker - instructions in the drawer below</li>
            <li>Microwave - press 'Quick Start' for 30-second intervals</li>
            <li>Refrigerator - lower compartment is the freezer</li>
            <li>Dishwasher - tablets are under the sink</li>
            <li>Stove - turn knobs and press ignite button for gas burners</li>
          </ul>
        </div>
      )
    },
    { 
      icon: Palmtree, 
      title: "Beach Access", 
      description: "Direct access to the beach just steps away",
      details: (
        <div className="space-y-2">
          <p className="font-semibold">Beach Information:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Beach is 50 meters from the apartment</li>
            <li>Beach chairs and umbrella are available in the storage closet</li>
            <li>Best times to visit: early morning or late afternoon</li>
            <li>Beach towels are provided (blue ones in the hallway cabinet)</li>
          </ul>
        </div>
      )
    },
    { 
      icon: Car, 
      title: "Free Parking", 
      description: "Complimentary parking space for one vehicle",
      details: (
        <div className="space-y-2">
          <p className="font-semibold">Parking Details:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Your designated parking spot is #7</li>
            <li>Please display the parking permit on your dashboard</li>
            <li>Additional street parking is available if needed</li>
            <li>For large vehicles, please use the spots at the end of the lot</li>
          </ul>
        </div>
      )
    },
    { 
      icon: ShowerHead, 
      title: "Hot Water", 
      description: "Continuous hot water supply in bathroom and kitchen",
      details: (
        <div className="space-y-2">
          <p className="font-semibold">Hot Water System:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>On-demand water heater provides continuous hot water</li>
            <li>If water isn't getting hot, check the water heater switch in the utility closet</li>
            <li>For issues, please contact host immediately</li>
          </ul>
        </div>
      )
    },
    { 
      icon: Utensils, 
      title: "Dining Area", 
      description: "Comfortable dining space for up to 4 guests",
      details: (
        <div className="space-y-2">
          <p className="font-semibold">Dining Information:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Extendable table can seat up to 6 guests when fully opened</li>
            <li>Extra chairs are in the storage closet if needed</li>
            <li>Placemats and napkins are in the left drawer</li>
            <li>Wine glasses and special dinnerware in the cabinet above the sink</li>
          </ul>
        </div>
      )
    },
    { 
      icon: Wind, 
      title: "Air Conditioning", 
      description: "Climate control to keep you comfortable year-round",
      details: (
        <div className="space-y-2">
          <p className="font-semibold">AC Instructions:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Remote control is on the wall holder next to the unit</li>
            <li>Recommended temperature: 24-26°C (75-78°F)</li>
            <li>Please turn off when leaving the apartment</li>
            <li>For heating in winter, press the Mode button until the sun icon appears</li>
            <li>Clean filters button resets the filter indicator light</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-sand-light">
      <div className="container-custom">
        <h2 className="section-title text-center">Apartment Amenities</h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Our seaside apartment offers everything you need for a comfortable and enjoyable stay. Here are some of the amenities you'll enjoy:
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <Popover key={index}>
              <PopoverTrigger asChild>
                <div className="feature-card flex flex-col items-start cursor-pointer hover:shadow-md transition-all">
                  <div className="bg-ocean bg-opacity-10 p-3 rounded-full mb-4">
                    <amenity.icon className="text-ocean" size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-ocean-deepblue">{amenity.title}</h3>
                  <p className="text-gray-600">{amenity.description}</p>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-4 shadow-lg">
                {amenity.details}
              </PopoverContent>
            </Popover>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-md p-6 md:p-8">
          <h3 className="text-2xl font-bold mb-4 text-ocean-deepblue">What's Included</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Bed linens and towels", "Coffee maker and basic supplies", 
              "Dishware and utensils", "Refrigerator and microwave",
              "Shampoo and body wash", "Hair dryer",
              "Iron and ironing board", "Beach towels and chairs"
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Check className="text-coral" size={18} />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
