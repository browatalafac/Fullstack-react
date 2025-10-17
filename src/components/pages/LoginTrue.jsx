import React from 'react'
import Footer from '../organisms/Footer';
import "../organisms/LoginTrue/LoginTrue.css";
import FirstLoginTrue from '../organisms/LoginTrue/FirstLoginTrue';
import FormularioLogin from '../organisms/LoginTrue/FormularioLogin';

export default function LoginTrue() {
  return (
        <>
            <section className="loginTrue-root">
            <FirstLoginTrue/>
            <FormularioLogin/>
            <Footer/>
            </section>
        </>
  )
}
