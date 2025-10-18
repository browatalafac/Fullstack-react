import React from 'react';
import TopBar from '../organisms/TopBar';
import First from '../organisms/First';
import Follow from '../organisms/FollowUp/Follow';
import Footer from '../organisms/Footer';
import "../organisms/FollowUp/Follow.css";

export default function FollowPage() {
  return (
    <>
    <div className="follow-root">
      <TopBar />
      <First />
      <Follow/>
      <Footer />
    </div>
    </>
  );
}
