import React from 'react'
import TopBar from '../organisms/About/TopBar'
import First from '../organisms/About/First'
import Second from '../organisms/About/Second'
import Footer from '../organisms/About/Footer'
import "../organisms/About/About.css";

export default function About() {
  return (
    <>
        <section className="about-root">
        <TopBar/>
        <First/>
        <Second/>
        <Footer/>
        </section>
    </>
  )
}
