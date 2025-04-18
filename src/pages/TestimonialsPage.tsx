
import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <Testimonials />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default TestimonialsPage;
