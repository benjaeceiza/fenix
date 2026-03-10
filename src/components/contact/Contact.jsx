import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Reemplaza estos valores con los de tu cuenta de EmailJS
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        console.log(result.text);
        alert("¡Mensaje enviado con éxito a Fénix Propiedades!");
        e.target.reset(); // Limpia el formulario
      }, (error) => {
        console.log(error.text);
        alert("Hubo un error al enviar el mensaje, intentá de nuevo.");
      });
  };

  return (
    <section className="contact-section" id="contacto">
      <div className="main-container contact-container">
        {/* Información de Contacto (Mantenemos la estética) */}
        <div className="contact-info">
          <h2 className="contact-title">¿Hablamos de tu <br /><span className="contact-highlight">próximo proyecto?</span></h2>
          <p className="contact-subtitle">
            Estamos en Villa Mercedes para asesorarte en la compra, venta o administración de tus propiedades.
          </p>

          <a href="https://maps.app.goo.gl/72ffozSWA7F4VHz96" target='_blank' className='map-link'><div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon"><FiMapPin /></div>
              <div>
                <h4>Nuestra Oficina</h4>
                <p>Belgrano 486, Villa Mercedes, San Luis</p>
              </div>
            </div>

            {/* ... resto de los items de contacto ... */}
          </div>
          </a>
        </div>

        {/* Formulario Vinculado a EmailJS */}
        <div className="contact-form-container">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label>Nombre Completo</label>
              {/* El atributo 'name' debe coincidir con los tags en tu template de EmailJS */}
              <input type="text" name="user_name" placeholder="Tu nombre" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="user_email" placeholder="email@ejemplo.com" required />
            </div>
            <div className="form-group">
              <label>Mensaje</label>
              <textarea name="message" placeholder="¿En qué podemos ayudarte?" rows="4" required></textarea>
            </div>
            <button type="submit" className="contact-btn">
              Enviar Mensaje <FiSend />
            </button>
          </form>
        </div>

      </div>
    </section >
  );
};

export default Contact;