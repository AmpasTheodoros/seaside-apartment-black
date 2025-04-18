
import Navbar from '../components/Navbar';
import LocalInfo from '../components/LocalInfo';
import Footer from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

const ExplorePage = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <LocalInfo />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ExplorePage;
