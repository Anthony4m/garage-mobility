import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Team from '../Team';
import Testimonial from '../Testimonials';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Team/>
      <Testimonial/>
      <Footer />
    </>
  );
}

export default Home;
