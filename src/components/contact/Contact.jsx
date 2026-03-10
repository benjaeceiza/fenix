import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiSend, FiCheckCircle } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    const serviceID = 'service_saiuowe';
    const templateID = 'template_xu5aa4m'; // El ID que se ve en tu captura
    const publicKey = 'wQKiSjnmmbuHFTPUf';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {
        setStatus('success');
        e.target.reset();
        
        // Volver al formulario después de 3 segundos
        setTimeout(() => {
          setStatus('idle');
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      });
  };

  return (
    <section className="contact-section" id="contacto">
      <div className="main-container contact-container">
        <div className="contact-info">
          <h2 className="contact-title">¿Hablamos de tu <br /><span className="contact-highlight">próximo proyecto?</span></h2>
          <p className="contact-subtitle">
            Estamos en Villa Mercedes para asesorarte en la compra, venta o administración de tus propiedades.
          </p>
          {/* ... resto de tu info de contacto ... */}
        </div>

        <div className="contact-form-container">
          {status === 'idle' || status === 'sending' ? (
            <form ref={form} onSubmit={sendEmail} className={`contact-form ${status === 'sending' ? 'loading-blur' : ''}`}>
              <div className="form-group">
                <label>Nombre Completo</label>
                <input type="text" name="user_name" placeholder="Tu nombre" required />
              </div>
              <div className="form-group">
                <label>Teléfono</label>
                <input type="tel" name="user_phone" placeholder="Ej: 2657..." required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="user_email" placeholder="email@ejemplo.com" required />
              </div>
              <div className="form-group">
                <label>Mensaje</label>
                <textarea name="message" placeholder="¿En qué podemos ayudarte?" rows="4" required></textarea>
              </div>
              
              <button type="submit" className="contact-btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando...' : <>Enviar Mensaje <FiSend /></>}
              </button>

              {status === 'sending' && (
                <div className="loader-overlay">
                  <div className="spinner"></div>
                </div>
              )}
            </form>
          ) : status === 'success' ? (
            <div className="status-message success">
              <FiCheckCircle className="status-icon" />
              <h3>¡Mensaje Enviado!</h3>
              <p>Gracias por contactar a Fénix Propiedades. Te responderemos a la brevedad.</p>
            </div>
          ) : (
            <div className="status-message error">
              <h3>Ups, algo salió mal</h3>
              <p>Intentalo de nuevo en unos segundos.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;