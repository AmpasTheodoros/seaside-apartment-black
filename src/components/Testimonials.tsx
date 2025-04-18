
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah & David",
      date: "August 2023",
      rating: 5,
      text: "This seaside apartment exceeded all our expectations! The views are breathtaking, and the location is perfect - just steps from the beach. Everything was clean and modern. We'll definitely be back!"
    },
    {
      name: "Michael J.",
      date: "June 2023",
      rating: 5,
      text: "We had a wonderful family vacation at this beautiful apartment. The kids loved being so close to the beach, and we enjoyed the stunning sunsets from the balcony. The host was very responsive and helpful."
    },
    {
      name: "Jennifer T.",
      date: "May 2023",
      rating: 4,
      text: "A lovely getaway spot with gorgeous ocean views. The apartment was clean and well-equipped. It's a perfect retreat for couples or small families. The only reason for 4 stars is the parking was sometimes difficult."
    }
  ];

  return (
    <section className="py-20 bg-ocean-light bg-opacity-30">
      <div className="container-custom">
        <h2 className="section-title text-center">Guest Experiences</h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our previous guests have to say about their stay.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
              <div className="flex justify-between items-center">
                <p className="font-medium text-ocean-deepblue">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
