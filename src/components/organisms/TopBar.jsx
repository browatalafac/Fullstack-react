import React from 'react'
import './TopBar.css'

export default function TopBar() {
  return (
    <div id="top-bar">
    <p>Teléfono: +56940754456</p>
        <div className="social-icons">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
        </div>
    </div>
  )
}
