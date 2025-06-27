
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import FeaturedDrinks from '../components/FeaturedDrinks';
import PromoBanners from '../components/PromoBanners';
import DailyDeals from '../components/DailyDeals';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedDrinks />
      <PromoBanners />
      <DailyDeals />
      <Footer />
    </div>
  );
};

export default Index;
