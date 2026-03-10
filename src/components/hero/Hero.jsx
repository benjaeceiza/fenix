import { FiSearch } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className='hero-background'>

        {/* Columna Izquierda */}
        <div className="hero-content">
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

          {/* Cita debajo del buscador */}
          <p className="hero-quote">
            "Convirtiendo tus sueños en realidad, un terreno a la vez. Déjanos guiarte a tu lugar perfecto."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;