import React from 'react'

import Second from '../organisms/About/Second'
import "../organisms/About/About.css";
import First from '../organisms/First';
import Footer from '../organisms/Footer';
import TopBar from '../organisms/TopBar';

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
