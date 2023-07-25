import React from 'react'
import './footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
         
              
      <ul>

<li><NavLink to='/'>Home</NavLink></li>
<li><NavLink to={"https://twitter.com/AppleLatam"} target="_blank"><i class="bi bi-twitter"></i></NavLink></li>
<li><NavLink to={"https://www.facebook.com/apple/?locale=es_LA"} target="_blank"><i class="bi bi-facebook"></i></NavLink></li>
<li><NavLink to={"https://www.instagram.com/apple/"} target="_blank"><i class="bi bi-instagram"></i></NavLink></li>
<li><NavLink to={"https://www.apple.com/"} target="_blank">Apple</NavLink></li>
        <li><NavLink to={"https://www.apple.com/legal/privacy/es-la/"} target="_blank">Política de Privacidad</NavLink></li>
        <li><NavLink to={"https://www.apple.com/legal/privacy/es/cookies/"} target="_blank">Uso de cookies</NavLink></li>
        <li><NavLink to={"https://www.apple.com/es/legal/terms/site.html"} target="_blank">Condiciones de uso</NavLink></li>
        <li><NavLink to={"https://www.apple.com/legal/"} target="_blank">Legal</NavLink></li>
        <li><NavLink to={"https://www.apple.com/es/newsroom/"} target="_blank">Newsroom</NavLink></li>
<li>Copyright © 2023 Apple Inc. All rights reserved.</li>
              </ul>
    
    
          </>
  )
}

export default Footer
