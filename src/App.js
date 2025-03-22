
import './App.css';
import BestSeller from './components/BestSeller';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import HomePage from './components/HomePage';
import LogoDisplay from './components/LogoDisplay';
import NavBar from './components/NavBar';
import ProductCarousel from './components/ProductCarousel';
import ShopSection from './components/ShopSection';
import "bootstrap/dist/css/bootstrap.min.css";
import TopBanner from './components/TopBanner';
import Product from './components/Product';

function App() {
  return (
    <div >
      <TopBanner/>
     
    
    <HomePage/>
     
     <LogoDisplay/>
     <BestSeller/>
     <HeroSection/>
     <FeaturedProducts/>
     <ShopSection/>
     <ProductCarousel/> 
    
    <Footer/>
    </div>
  );
}

export default App;
