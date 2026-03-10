import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  // Estado para saber si la imagen principal ya se descargó
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="hero" id='inicio'>
      <div className='hero-background'>

        {/* --- CAPA DEL LOADER --- */}
        {/* Usamos una clase dinámica que se activa cuando la imagen carga */}
        <div className={`hero-loader-overlay ${imgLoaded ? 'fade-out' : ''}`}>
          <div className="hero-spinner"></div>
        </div>

        {/* --- NUEVA IMAGEN DE FONDO CON EVENTO onLoad --- */}
        <img 
          src="/hero-img-2.png" 
          alt="Fondo Fénix Propiedades" 
          className={`hero-img-bg ${imgLoaded ? 'img-zoom-in' : ''}`} 
          onLoad={() => setImgLoaded(true)} 
        />

        {/* Columna Izquierda */}
        <div className={`hero-content ${imgLoaded ? 'content-fade-up' : ''}`}>
          <h1 className="hero-title">
            Conectándote con el <br />
            <span className="hero-light-text">lugar</span> que amas
          </h1>

          {/* Buscador interactivo */}
          <div className="hero-search-box">
            <div className="hero-search-tabs">
              <span className="hero-active">Comprar</span>
              <span>Alquilar</span>
              <span>Vender</span>
            </div>

            <div className="hero-search-input-container">
              <input
                type="text"
                placeholder="Dirección, Loteo o Ciudad"
              />
              <button className="hero-btn-search">
                <FiSearch size={20} />
              </button>
            </div>
          </div>

          <p className="hero-quote">
            "Convirtiendo tus sueños en realidad, un terreno a la vez. Déjanos guiarte a tu lugar perfecto."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;