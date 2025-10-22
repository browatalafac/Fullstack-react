import React from 'react';

import "../organisms/Blogs/Blogs.css";
import Header from '../organisms/Blogs/Header';
import Main from '../organisms/Blogs/Main';
import First from '../organisms/First';
import Footer from '../organisms/Footer';
import TopBar from '../organisms/TopBar';

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

export default Blogs;
