import React from 'react'

export default function Main() {
  return (
    <main>
        <section class="blog">
        <h2>🍰 Recetas destacadas</h2>
        <article>
            <h3>Torta de chocolate casera</h3>
            <p>Aprende a preparar una torta de chocolate esponjosa y deliciosa, perfecta para toda ocasión.</p>
            <a href="#">Leer más</a>
        </article>

        <article>
            <h3>Galletas con chips de chocolate</h3>
            <p>Consejos para lograr galletas crujientes por fuera y suaves por dentro, con mucho sabor.</p>
            <a href="#">Leer más</a>
        </article>
        </section>

        <section class="news">
        <h2>📰 Noticias y comunidad</h2>
        <article>
            <h3>Concurso de Repostería 2025</h3>
            <p>Los estudiantes de gastronomía de Duoc participan en un concurso lleno de creatividad y dulzura.</p>
            <a href="#">Ver detalles</a>
        </article>

        <article>
            <h3>Taller gratuito de panadería</h3>
            <p>Inscríbete al nuevo taller práctico sobre masas, organizado por los alumnos avanzados.</p>
            <a href="#">Inscribirse</a>
        </article>
        </section>
    </main>
  )
}
