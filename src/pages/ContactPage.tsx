
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ContactPage;
