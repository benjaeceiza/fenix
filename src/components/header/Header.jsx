import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import './Header.css';
import logo from "../../assets/logos/logo-2.png"

const Header = () => {
    // Este estado controla si el sidebar de celulares está abierto (true) o cerrado (false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {/* El header es "sticky", se queda pegado arriba al hacer scroll */}
            <header className="header-fixed">
                <div className="header-content">

                    {/* Logo */}
                    <div className="header-logo">
                        <img src={logo} className='header-logo-img' alt="Logo Fenix Propiedades" />
                        <span className="header-logo-accent">Fénix</span> Propiedades
                    </div>

                    {/* Navegación de Escritorio (Oculta en celulares) */}
                    <nav className="header-nav-desktop">
                        <a href="#nosotros">Nosotros</a>
                        <a href="#servicios">Servicios</a>
                        <a href="#contacto">Contacto</a>
                        {/* Reemplazá el enlace con el link real de tu catálogo de WhatsApp */}
                        <a
                            href="https://wa.me/c/5492657301932"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="header-btn-catalogo"
                        >
                            <FaWhatsapp size={18} /> Catálogo
                        </a>
                    </nav>

                    {/* Botón de Menú Hamburguesa para Celulares */}
                    <button className="header-mobile-toggle" onClick={toggleSidebar}>
                        <FiMenu size={28} />
                    </button>

                </div>
            </header>

            {/* =========================================
          SIDEBAR PARA MÓVILES
          ========================================= */}

            {/* Fondo oscuro transparente cuando el menú está abierto */}
            <div
                className={`header-overlay ${isSidebarOpen ? 'header-overlay-open' : ''}`}
                onClick={toggleSidebar}
            ></div>

            {/* El menú lateral en sí */}
            <div className={`header-sidebar ${isSidebarOpen ? 'header-sidebar-open' : ''}`}>

                <div className="header-sidebar-top">
                    <div className="header-logo">
                        <span className="header-logo-accent">Fénix</span>Propiedades
                    </div>
                    <button className="header-close-btn" onClick={toggleSidebar}>
                        <FiX size={28} />
                    </button>
                </div>

                <nav className="header-nav-mobile">
                    <a href="#nosotros" onClick={toggleSidebar}>Nosotros</a>
                    <a href="#servicios" onClick={toggleSidebar}>Servicios</a>
                    <a href="#contacto" onClick={toggleSidebar}>Contacto</a>

                    <a
                        href="https://wa.me/c/5492657301932"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="header-btn-catalogo-mobile"
                    >
                        <FaWhatsapp size={22} /> Ver Catálogo
                    </a>
                </nav>
            </div>
        </>
    );
};

export default Header;