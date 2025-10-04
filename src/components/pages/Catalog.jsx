import React from 'react'
import TopBar from '../organisms/Catalogo/TopBar'
import First from '../organisms/Catalogo/First'
import Header from '../organisms/Catalogo/Header'
import Container from '../organisms/Catalogo/Container'
import Footer from '../organisms/Catalogo/Footer'
import "../organisms/Catalogo/Catalogo.css";
export default function Catalog() {
  return (
    <>
      <section className="catalog-root">
      <TopBar/>
      <First/>
      <Header/>
      <Container/>
      <Footer/>
      </section>
    </>
  )
}
