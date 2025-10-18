import React from 'react';
import Follow from '../organisms/FollowUp/Follow';
import Footer from '../organisms/Footer';
import "../organisms/FollowUp/Follow.css";
import FirstFollow from '../organisms/FollowUp/FirstFollow';

export default function FollowPage() {
  return (
    <>
    <div className="followup-root">
      <FirstFollow/>
      <Follow/>
      <Footer/>
    </div>
    </>
  );
}
