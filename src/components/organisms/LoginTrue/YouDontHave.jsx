import React from 'react'
import { Link } from 'react-router-dom'

export default function YouDontHave() {
  return (
    <div className="you-dont-have">
      ¿No tienes cuenta?
      <Link to="/Login">Registrarse</Link>
    </div>
  )
}
