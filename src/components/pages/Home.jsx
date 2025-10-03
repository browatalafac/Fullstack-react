// src/.../Home.jsx
import React from 'react'
import TopBar from '../organisms/Inicio/TopBar'
import First from '../organisms/Inicio/First'
import Second from '../organisms/Inicio/Second'
import Third from '../organisms/Inicio/Third'
import Footer from '../organisms/Inicio/Footer'
import "../organisms/Inicio/Inicio.css";

export default function Home() {
  return (
    <section className="inicio-root">
      <TopBar/>
      <First/>
      <Second/>
      <Third/>
      <Footer/>
    </section>
  )
}
