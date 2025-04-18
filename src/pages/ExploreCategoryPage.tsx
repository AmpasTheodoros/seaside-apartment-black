
import Navbar from '../components/Navbar';
import ExploreDetail from '../components/ExploreDetail';
import Footer from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

const ExploreCategoryPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <ExploreDetail />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ExploreCategoryPage;
