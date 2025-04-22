import { Star, AlertTriangle } from "lucide-react";

const HouseRules = () => {
  const rules = [
    "Please refrain from throwing anything into the toilet basin or littering as there are bins provided for this in every bathroom. Pipes tend to get clogged in summer houses and so you would be making us a great favour if you really attended to this.",
    "Please observe silence between 15.30 - 17.30 which is the typical time frame when families in residential areas tend to take their afternoon nap - within reason, please try to keep it down, they actually try to do the same for you.",
    "Smoking is strictly not permitted inside the entire property. You can use the terrace where ashtrays are also provided.",
    "Please remember to switch the air-conditions off when you are away or when you actually do not need them.",
    "The tap water is strictly NON potable throughout the village so please make sure you do not forget this - only bottled water to be consumed.",
  ];

  return (
    <section id="house-rules" className="py-20">
      <div className="container-custom">
        <h2 className="section-title text-center">House Rules</h2>
        <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
          🫡 (not to worry, just the standard ones)
        </p>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="space-y-6">
            {rules.map((rule, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Star className="text-coral" size={20} />
                </div>
                <p className="text-gray-700">{rule}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-coral bg-opacity-10 rounded-lg flex gap-4">
            <AlertTriangle
              className="text-coral flex-shrink-0 mt-1"
              size={24}
            />
            <p className="text-gray-800">
              <span className="font-bold">Important reminder:</span> The tap
              water is strictly NON potable throughout the village. Please only
              consume bottled water during your stay.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HouseRules;
