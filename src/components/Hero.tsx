import { Info, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const navLinks = [
    { to: "/welcome", label: "WELCOME" },
    { to: "/house-rules", label: "HOUSE RULES" },
    { to: "/amenities", label: "AMENITIES" },
    { to: "/explore", label: "EXPLORE" },
    { to: "/gallery", label: "GALLERY" },
  ];

  const bottomLinks = [
    {
      to: "/location",
      label: "Location",
      icon: <MapPin size={18} />,
      className:
        "flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200 font-medium py-2 px-6 rounded-full transition-colors duration-300",
    },
    {
      to: "/contact",
      label: "Contact",
      icon: <Info size={18} />,
      className:
        "flex items-center justify-center gap-2 bg-ocean text-white hover:bg-ocean-deepblue font-medium py-2 px-6 rounded-full transition-colors duration-300",
    },
  ];

  return (
    <div
      className="relative h-[100vh] bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
      }}
    >
      <div className="container-custom text-center max-w-6xl">
        <div className="mb-12 flex flex-col justify-center items-center">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-md lg:text-xl font-normal mb-1 text-white font-geologica"
          >
            Καλωσήρθες στο
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl md:text-2xl lg:text-5xl font-semibold mb-5 text-white font-geologica"
          >
            Seaside Apartment Χαλκιδική
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-base md:text-lg max-w-md font-thin text-gray-200 opacity-90"
          >
            Ο προσωπικός σου οδηγός για τοπικές εμπειρίες, προορισμούς και όλες
            τις απαραίτητες πληροφορίες για τη διαμονή σου!
          </motion.p>
        </div>

        <div className="flex flex-col space-y-6 items-center">
          {navLinks.map(({ to, label }, index) => (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + 0.2 * index, duration: 0.5 }}
            >
              <Link
                key={to}
                to={to}
                className="w-full text-3xl md:text-4xl font-bold text-white hover:text-gray-300 transition-colors"
              >
                {label}
              </Link>
            </motion.span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-8">
        <div className="flex space-x-4">
          {bottomLinks.map(({ to, label, icon, className }, index) => (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 + 0.3 * index, duration: 0.3 }}
            >
              <Link key={to} to={to} className={className}>
                {icon}
                {label}
              </Link>
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
