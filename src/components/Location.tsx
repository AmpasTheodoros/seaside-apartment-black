import { MapPin, Bus, Car, Train } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-20 ">
      <div className="container-custom">
        <h2 className="section-title text-center">Location</h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Our apartment is perfectly situated to enjoy everything the area has
          to offer, from pristine beaches to local attractions.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4 text-ocean-deepblue">
                Our Address
              </h3>
              <div className="flex items-start space-x-3">
                <MapPin className="text-coral mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">
                  123 Seaside Boulevard
                  <br />
                  Coastal Town, CT 12345
                  <br />
                  United States
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-ocean-deepblue">
                Getting Here
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Car className="text-ocean mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">By Car</p>
                    <p className="text-gray-700">
                      30 minutes from Highway 101, free parking on premises
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Bus className="text-ocean mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">By Bus</p>
                    <p className="text-gray-700">
                      Bus station 10 minutes walking distance
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Train className="text-ocean mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">By Train</p>
                    <p className="text-gray-700">
                      Coastal Town Station is 15 minutes by taxi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full">
            <div className="bg-white p-2 rounded-lg shadow-md h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586haeccf8c21%3A0x549d8617dd34890a!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1619749383247!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  borderRadius: "0.5rem",
                  minHeight: "400px",
                }}
                allowFullScreen={false}
                loading="lazy"
                title="Location map"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-ocean-deepblue">
            Nearby Attractions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Sandy Beach", distance: "2 minute walk" },
              { name: "Ocean Boardwalk", distance: "5 minute walk" },
              { name: "Seaside Market", distance: "10 minute walk" },
              { name: "Coastal Town Center", distance: "15 minute walk" },
              { name: "Oceanview Restaurant", distance: "8 minute walk" },
              { name: "Water Sports Center", distance: "12 minute walk" },
            ].map((attraction, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="bg-ocean-light p-2 rounded-full">
                  <MapPin className="text-ocean" size={16} />
                </div>
                <div>
                  <p className="font-medium">{attraction.name}</p>
                  <p className="text-sm text-gray-600">{attraction.distance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
