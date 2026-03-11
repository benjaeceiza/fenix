
import { FaWhatsapp, FaExternalLinkAlt } from 'react-icons/fa';
import imgTelefono from '../../assets/telefono.png';
import './Catalog.css';

const Catalog = () => {
  // Enlace al catálogo de WhatsApp de Fénix Propiedades
  const catalogUrl = "https://wa.me/c/5492657301932"; 

  return (
    <section className="catalog-section" id="catalogo">
      <div className="main-container catalog-container">
        
        <div className="catalog-content">
          <h2 className="catalog-title">
            Explorá nuestro <br />
            <span className="catalog-highlight">Catálogo Completo</span>
          </h2>
          <p className="catalog-description">
            Encontrá todas nuestras propiedades disponibles, con precios actualizados y disponibilidad inmediata directamente en nuestro WhatsApp Business.
          </p>
          
          <div className="catalog-actions">
            <a 
              href={catalogUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="catalog-btn-main"
            >
              <FaWhatsapp size={22} /> Ver Catálogo Ahora
            </a>
            <span className="catalog-note">
              <FaExternalLinkAlt size={12} /> Se abre en una nueva pestaña
            </span>
          </div>
        </div>

        {/* Imagen decorativa o Mockup del celular */}
        <div className="catalog-visual">
          <div className="catalog-circle-bg"></div>
          <img 
            src={imgTelefono} 
            alt="Catálogo WhatsApp" 
            className="catalog-img" 
          />
        </div>

      </div>
    </section>
  );
};

export default Catalog;