
import { FiMap, FiStar, FiShield, FiArrowRight } from 'react-icons/fi';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section id='nosotros' className="about-section">
      <div className="main-container about-container">
        
        {/* Columna Izquierda: Título y Estadísticas */}
        <div className="about-left">
          <h2 className="about-title">
            Elegidos por <br />
            <span className="about-highlight">cientos de familias</span>
          </h2>
          <p className="about-description">
            Solo nosotros te conectamos directamente con los expertos que más conocen sobre cada terreno y propiedad en venta. Tu inversión, en manos seguras.
          </p>

          {/* Bloque de métricas (tipo la imagen original) */}
          <div className="about-stats">
            <div className="about-stat-item">
              <span className="about-stat-number">+500</span>
              <span className="about-stat-label">Familias felices</span>
            </div>
            <div className="about-stat-item">
              <span className="about-stat-number">10</span>
              <span className="about-stat-label">Años de exp.</span>
            </div>
            <div className="about-stat-item">
              <span className="about-stat-number">4.9</span>
              <span className="about-stat-label">Calificación</span>
            </div>
          </div>
        </div>

        {/* Separador vertical (opcional, como en el diseño) */}
        <div className="about-divider"></div>

        {/* Columna Derecha: Tarjetas de Beneficios */}
        <div className="about-right">
          
          {/* Tarjeta 1 */}
          <div className="about-feature-card">
            <div className="about-icon-wrapper">
              <FiMap size={24} />
            </div>
            <div className="about-feature-text">
              <h3>Explorá las mejores zonas</h3>
              <p>Descubrí propiedades y terrenos con asesoramiento integral.</p>
            </div>
      
          </div>

          {/* Tarjeta 2 */}
          <div className="about-feature-card">
            <div className="about-icon-wrapper">
              <FiStar size={24} />
            </div>
            <div className="about-feature-text">
              <h3>Encontrá la propiedad ideal</h3>
              <p>Te mostramos las mejores opciones filtradas por expertos para tu proyecto.</p>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="about-feature-card">
            <div className="about-icon-wrapper">
              <FiShield size={24} />
            </div>
            <div className="about-feature-text">
              <h3>Inversión 100% segura</h3>
              <p>Acompañamiento legal y comercial en cada etapa de tu compra o venta.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;