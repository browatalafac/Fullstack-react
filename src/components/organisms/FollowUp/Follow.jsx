import React from 'react'

export default function FollowUp() {
  return (
    <div className="followup-root">
      <div className="followup-box">
        <h2>Realizar seguimiento en línea</h2>
        <div className="followup-input">
          <input
            type="text"
            placeholder="Número de seguimiento"
          />
          <button className="btn-search">Buscar</button>
        </div>
      </div>
    </div>
  )
}
