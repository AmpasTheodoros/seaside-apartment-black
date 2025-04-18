
import Navbar from '../components/Navbar';
import Location from '../components/Location';
import Footer from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

const LocationPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <Location />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default LocationPage;
