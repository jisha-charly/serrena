import './App.css';
import { Routes, Route } from 'react-router-dom';
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

// Import route pages
import ShopPage from './components/ShopPage';  
import MenPage from './components/MenPage';
import WomenPage from './components/WomenPage';
import KidsPage from './components/KidsPage';
import About from './components/About';
import ContactUs from './components/contactUs';

function App() {
  return (
    <div>
      <Routes>
        {/* HomePage with all components */}
        <Route
          path="/"
          element={
            <>
              <TopBanner />
             
              <HomePage />
              <LogoDisplay />
              <BestSeller />
              <HeroSection />
              <FeaturedProducts />
              <ProductCarousel />
              <Footer />
            </>
          }
        />

        {/* Only ShopPage without NavBar, TopBanner, and others */}
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/men" element={<MenPage/>} />
        <Route path="/women" element={<WomenPage/>} />
        <Route path="/kids" element={<KidsPage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/Contact" element={<ContactUs/>} />
      </Routes>
    </div>
  );
}

export default App;
