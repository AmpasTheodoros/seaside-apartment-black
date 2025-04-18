
import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

const GalleryPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <Gallery />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default GalleryPage;
