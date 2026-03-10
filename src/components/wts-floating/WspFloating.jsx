
import { FaWhatsapp } from 'react-icons/fa';
import './WspFloating.css';

const WspFloating = () => {
  // Poné acá el número de la inmobiliaria (con código de área, sin el +)
  // Ejemplo para Argentina: 5492657XXXXXX
  const phoneNumber = "5492657301932"; 
  const message = "Hola Fénix Propiedades! Vi la web y me gustaría recibir información sobre los loteos.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      className="wsp-floating-btn" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <div className="wsp-tooltip">¿En qué podemos ayudarte?</div>
      <FaWhatsapp size={35} />
    </a>
  );
};

export default WspFloating;