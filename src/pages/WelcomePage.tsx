
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

const WelcomePage = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <Welcome />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default WelcomePage;
