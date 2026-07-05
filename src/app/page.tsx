import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import ServicesWithLinks from '@/components/ServicesWithLinks';
import PortfolioWithLinks from '@/components/PortfolioWithLinks';
import ShopWithLinks from '@/components/ShopWithLinks';
import BookingForm from '@/components/BookingForm';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <ServicesWithLinks />
      <PortfolioWithLinks />
      <ShopWithLinks />
      <BookingForm />
      <Testimonials />
      <Contact />
    </>
  );
}
