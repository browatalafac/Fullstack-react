// src/.../Home.jsx
import React from 'react'
import TopBar from '../organisms/TopBar'
import Second from '../organisms/Inicio/Second'
import Third from '../organisms/Inicio/Third'
import "../organisms/Inicio/Inicio.css";
import First from '../organisms/First'
import Footer from '../organisms/Footer';

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
