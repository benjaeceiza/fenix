import React from 'react';
import { FiHome, FiKey, FiBriefcase, FiUsers, FiTrendingUp } from 'react-icons/fi';
import './Services.css';

const Services = () => {
  // Armamos un arreglo con los servicios para que el código quede más limpio y sea fácil agregar más después
  const servicesData = [
    {
      id: 1,
      icon: <FiHome size={28} />,
      title: 'Venta de Propiedades',
      description: 'Comercializamos tu casa, departamento o loteo con las mejores estrategias de marketing para llegar al comprador ideal.'
    },
    {
      id: 2,
      icon: <FiKey size={28} />,
      title: 'Alquileres',
      description: 'Encontramos al inquilino perfecto y redactamos contratos blindados para proteger tu inversión en todo momento.'
    },
    {
      id: 3,
      icon: <FiBriefcase size={28} />,
      title: 'Administración',
      description: 'Nos ocupamos de los cobros, el mantenimiento y la relación con el inquilino para que vos solo disfrutes de tu renta.'
    },
    {
      id: 4,
      icon: <FiUsers size={28} />,
      title: 'Asesoramiento Integral',
      description: 'Te guiamos paso a paso en el desarrollo de proyectos inmobiliarios y en la compra de tu primer terreno o vivienda.'
    },
    {
      id: 5,
      icon: <FiTrendingUp size={28} />,
      title: 'Tasaciones Exactas',
      description: 'Evaluamos tu propiedad con precisión, basándonos en el mercado actual para garantizarte el precio más justo y competitivo.'
    }
  ];

  return (
    <section className="services-section" id="servicios">
      <div className="main-container">
        
        {/* Encabezado de la sección */}
        <div className="services-header">
          <h2 className="services-title">
            Soluciones <span className="services-highlight">Integrales</span>
          </h2>
          <p className="services-subtitle">
            Todo lo que necesitas para tu patrimonio en un solo lugar. Confianza, gestión y resultados comprobados.
          </p>
        </div>

        {/* Grilla de tarjetas */}
        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="services-card">
              <div className="services-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="services-card-title">{service.title}</h3>
              <p className="services-card-description">{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;