
import { FaInstagram, FaFacebook, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { FiPhone, FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-crema">
      <div className="main-container footer-container">

        {/* Columna 1: Logo y Marca */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-accent">Fénix</span> Propiedades
          </div>
          <p className="footer-description">
            Líderes en gestión inmobiliaria en San Luis. <br />
            Tu confianza es nuestra mayor propiedad.
          </p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/fenixpropiedades_vm/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://www.facebook.com/profile.php?id=61577725291257&locale=es_LA" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://wa.me/5492657301932" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Columna 2: Navegación */}
        <div className="footer-links">
          <h4>Navegación</h4>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="#catalogo">Catálogo</a></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div className="footer-links">
          <h4>Contacto</h4>
          <ul className="footer-contact-list">
            <li>
              <a href="tel:2657529368" className="footer-contact-link">
                <FiPhone className="footer-contact-icon" />
                <span>2657-529368</span>
              </a>
            </li>
            <li>
              <a href="mailto:contacto@fenixpropiedades.com" className="footer-contact-link">
                <FiMail className="footer-contact-icon" />
                <span>fenixpropiedaessrl@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 4: Ubicación en Villa Mercedes */}
        <div className="footer-contact">
          <h4>Encontranos</h4>
          <p className="footer-address">
            <FaMapMarkerAlt className="footer-icon-map" />
            Belgrano 486, Villa Mercedes  <br />San Luis
          </p>
          <div className="footer-map-placeholder">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.9822683272996!2d-65.47052132342714!3d-33.68352330948763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d16a84c71f9fa3%3A0xb7ac5243af0cc331!2sFenix%20Propiedades%20SRL!5e0!3m2!1ses-419!2sar!4v1772903455863!5m2!1ses-419!2sar"
              width="100%" /* Te recomiendo 100% para que se adapte al contenedor */
              height="100%" /* Y 100% acá también, o un alto fijo como 200px */
              style={{ border: 0 }} /* Acá está la corrección del estilo */
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="main-container footer-bottom-content">
          <p>&copy; {currentYear} Fénix Propiedades. Todos los derechos reservados.</p>
          <p>Powered By BE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;