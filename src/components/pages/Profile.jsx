import React from 'react'
import TopBar from '../organisms/TopBar'
import First from '../organisms/First'
import Footer from '../organisms/Footer';
import "../organisms/Profile/Profile.css";
import Card1 from '../organisms/Profile/Card1';
import Card2 from '../organisms/Profile/Card2';
export default function Profile() {
  return (
    <section className="profile-root">
          <TopBar/>
          <First/>
          <div className='card-container'>
            <Card1/>
            <Card2/>
          </div>
          <Footer/>
        </section>
  )
}
