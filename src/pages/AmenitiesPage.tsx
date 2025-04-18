
import Navbar from '../components/Navbar';
import Amenities from '../components/Amenities';
import Footer from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

const AmenitiesPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <Amenities />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AmenitiesPage;
