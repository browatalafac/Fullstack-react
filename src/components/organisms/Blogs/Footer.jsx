import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="pie">
      <div className="footer-content">
        <div className="footer-section contacto">
          <h3>Contacto</h3>
          <p>+56 9 1567 9890</p>
          <p>contacto@mil-sabores.cl</p>
          <p>Santiago, Chile</p>
        </div>
        <div className="footer-section enlaces">
          <h3>Enlaces útiles</h3>
          <Link to="/">Inicio</Link>
          <Link to="/about">Sobre nosotros</Link>
          <Link to="/redes">Nuestras redes sociales</Link>
        </div>
        <div className="footer-section redes">
          <h3>Síguenos</h3>
          <p>Instagram: @mil_sabores</p>
          <p>Facebook: Pastelería Mil Sabores</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Pastelería Mil Sabores. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
