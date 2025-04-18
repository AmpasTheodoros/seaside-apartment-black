
import Navbar from '../components/Navbar';
import HouseRules from '../components/HouseRules';
import Footer from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

const HouseRulesPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <HouseRules />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default HouseRulesPage;
