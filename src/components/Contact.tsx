
import { Phone, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">Contact Your Host</h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Need assistance during your stay? Don't hesitate to reach out to your host, Daniil.
        </p>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-ocean bg-opacity-5 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-ocean-deepblue">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-ocean-light p-3 rounded-full">
                  <Phone className="text-ocean-deepblue" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium text-ocean-deepblue">+30 694 539 6538</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-ocean-light p-3 rounded-full">
                  <Mail className="text-ocean-deepblue" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium text-ocean-deepblue">contact@seasideapartment.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-ocean-light p-3 rounded-full">
                  <MessageSquare className="text-ocean-deepblue" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">WhatsApp</p>
                  <p className="font-medium text-ocean-deepblue">+30 694 539 6538</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
              <h4 className="text-lg font-medium mb-4 text-ocean-deepblue">Emergency Contacts</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Emergency Services: <strong>112</strong></li>
                <li>• Police: <strong>100</strong></li>
                <li>• Ambulance: <strong>166</strong></li>
                <li>• Fire Department: <strong>199</strong></li>
                <li>• Local Clinic: <strong>+30 23740 23333</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
