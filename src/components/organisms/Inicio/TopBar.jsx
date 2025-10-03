import React from 'react';
import { Link } from 'react-router-dom';

export default function TopBar() {
  return (
    <div id="top-bar">
      <p>Teléfono: +56 9 1567 9890</p>
      <div className="social-icons">
        <Link to="#"><i className="fab fa-instagram"></i></Link>
        <Link to="#"><i className="fab fa-facebook"></i></Link>
      </div>
    </div>
  );
}
