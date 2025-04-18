
import { User } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Welcome = () => {
  return (
    <section id="welcome" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">Welcome!</h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Please, make yourself at home!
        </p>
        
        <div className="mb-16">
          <Card className="overflow-hidden shadow-md">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-ocean bg-opacity-5 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4 text-ocean-deepblue">Meet the host</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-ocean-light p-3 rounded-full">
                      <User className="text-ocean-deepblue" size={24} />
                    </div>
                    <p className="font-medium text-ocean-deepblue">Daniil</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Say hello to Daniil, your warm and welcoming host who's passionate about sharing the beauty of Chalkidiki with travelers from around the globe.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    With a smile that lights up the room and a heart full of hospitality, Daniil is more than just your host – he's your personal guide to all things local. As a seasoned traveler himself, he understands the importance of feeling at home wherever you go, and he's committed to ensuring that your stay is nothing short of exceptional.
                  </p>
                </div>
                <div className="relative h-full min-h-[300px]">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                    alt="Your host" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-ocean-deepblue">Check-in & Check-out</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <span className="font-medium">Check-in:</span> From 15:00 - 20:00
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Check-out:</span> Before 11:00
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-ocean-deepblue">Wi-Fi Information</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <span className="font-medium">Network:</span> TP-Link_85CC
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Password:</span> 6945396538
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
