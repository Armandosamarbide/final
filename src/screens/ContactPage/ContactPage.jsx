import React from 'react'
import './contactpage.css'
import { ReactDOM } from 'react'
import Success from '../Success/Success'

const ContactPage = () => {
  return (
  <form className="contactForm">
  <h2 className='contactH2'>CONTÁCTENOS</h2>
  <p><input className='inputContact' placeholder="Nombre y Apellido" maxLength={20}></input></p>
  <p><input className='inputContact' placeholder="Correo Electrónico" maxLength={20}></input></p>
  <p><input className='inputContact' placeholder="Ingrese su mensaje aquí" maxLength={200}></input></p>
  
      <div className='buttonContainer'>
      <button className='contactButton' onClick={Success}>Enviar</button>
  </div>
</form>
  )
}

export default ContactPage