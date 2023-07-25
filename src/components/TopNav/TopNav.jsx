import React from 'react'
import './topnav.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { NavLink, Routes, Route } from 'react-router-dom'
import Phone from '../../screens/Phone/Phone'

const TopNav = () => {
  return (
    <>
    
    <nav className='barra'>
    
    <div className="grid-container">
          <div className="grid-item"><NavLink to='/' title='Home'><i className="bi bi-apple"></i></NavLink></div>
          <div className="grid-item"><NavLink to='/contact/' title="Déjenos un mensaje"><i className="bi bi-chat-dots-fill"></i></NavLink></div>
          <div className="grid-item"><NavLink to={"mailto:support@apple.com?subject=Hola"} target="_blank" title="Escríbanos"><i class="bi bi-envelope-at-fill"></i></NavLink></div>
          <div className="grid-item"><NavLink to={"https://goo.gl/maps/PvneoewHGsipLQNE6"} target="_blank" title="Visítenos"><i class="bi bi-geo-alt-fill"></i></NavLink></div>
    <div className="grid-item"><NavLink to='/cart' title="Carrito de compras" ><i className="bi bi-cart-fill"></i></NavLink></div>
        </div>
    </nav>
    
    </>
  )
}

export default TopNav

