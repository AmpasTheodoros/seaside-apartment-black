import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { path: "/", label: "HOME" },
  { path: "/welcome", label: "WELCOME" },
  { path: "/house-rules", label: "HOUSE RULES" },
  { path: "/amenities", label: "AMENITIES" },
  { path: "/explore", label: "EXPLORE" },
  { path: "/gallery", label: "GALLERY" },
  { path: "/testimonials", label: "TESTIMONIALS" },
  { path: "/location", label: "LOCATION" },
  { path: "/contact", label: "CONTACT" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      setShowMenu(true);
      document.body.style.overflow = "hidden";
    } else {
      closeMenu();
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
    setTimeout(() => setShowMenu(false), 200);
  };

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <nav className="bg-black/90 text-white fixed top-0 left-0 right-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-white font-geologica flex items-center"
        >
          <img src="logo.png" alt="" className="w-44" />
        </Link>

        <button
          className="text-white"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <AnimatePresence>
          {showMenu && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/90 z-50 flex flex-col justify-center items-center"
            >
              <div className="absolute top-4 right-4">
                <button onClick={closeMenu} className="text-white p-2">
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col items-center space-y-8 text-center">
                <img src="logo.png" alt="" className="w-80 mr-10" />
                {navItems.map(({ path, label }, index) => {
                  const isActive = location.pathname === path;
                  return (
                    <motion.span
                      key={path}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.2 + index * 0.05,
                      }}
                    >
                      <Link
                        to={path}
                        onClick={closeMenu}
                        className={`text-3xl font-bold transition-colors ${
                          isActive
                            ? "text-ocean"
                            : "text-white hover:text-gray-300"
                        }`}
                      >
                        {label}
                      </Link>
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
