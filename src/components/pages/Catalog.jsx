import React from 'react'

import Header from '../organisms/Catalogo/Header'
import Container from '../organisms/Catalogo/Container'
import "../organisms/Catalogo/Catalogo.css";
import First from '../organisms/First'
import Footer from '../organisms/Footer';
import TopBar from '../organisms/TopBar';
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
