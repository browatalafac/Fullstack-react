import React from 'react'

export default function Footer() {
  return (
    <footer id="pie">
        <div class="footer-content">
        <div class="footer-section contacto">
            <h3>Contacto</h3>
            <p>+56 9 1567 9890</p>
            <p>contacto@mil-sabores.cl</p>
            <p>Santiago, Chile</p>
        </div>
        <div class="footer-section enlaces">
            <h3>Enlaces útiles</h3>
            <a href="index.html">Inicio</a>
            <a href="about.html">Sobre nosotros</a>
            <a href="#">Nuestras redes sociales</a>
        </div>
        <div class="footer-section redes">
            <h3>Síguenos</h3>
            <p>Instagram: @mil_sabores</p>
            <p>Facebook: Pastelería Mil Sabores</p>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2025 Pastelería Mil Sabores. Todos los derechos reservados.</p>
    </div>
    </footer>
  )
}
