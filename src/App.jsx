

import './App.css'; // Tu CSS global
import AboutUs from './components/about-us/AboutUs';
import Catalog from './components/catalog/Catalog';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Services from './components/our-services/Services';
import WspFloating from './components/wts-floating/WspFloating';

function App() {
  return (

      <div className="top-section">
        <Header />
        <div className="main-container">
          <Hero />
          <AboutUs />
          <Services/>
          <Catalog/>
          <Contact/>
          <WspFloating/>
        </div>
          <Footer/>
      </div>
  );
}

export default App;