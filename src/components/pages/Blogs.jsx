import React from 'react';
import TopBar from '../organisms/Blogs/TopBar';
import First from '../organisms/Blogs/First';
import Footer from '../organisms/Blogs/Footer';
import "../organisms/Blogs/Blogs.css";
import Header from '../organisms/Blogs/Header';
import Main from '../organisms/Blogs/Main';

const Blogs = () => {
  return (
    <>
      <section className="blogs-root">
      <TopBar/>
      <First/>
      <Header/>
      <Main/>
      <Footer/>
      </section>
    </>
  );
};

export default Blogs;  // Esta es la exportación por defecto
