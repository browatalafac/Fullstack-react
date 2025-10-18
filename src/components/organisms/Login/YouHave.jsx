import React from 'react'
import { Link } from 'react-router-dom'

export default function YouHave() {
  return (
    <div className="you-have">
      ¿Ya tienes cuenta?
      <Link to="/LoginTrue">Iniciar sesión</Link>
    </div>
  )
}
