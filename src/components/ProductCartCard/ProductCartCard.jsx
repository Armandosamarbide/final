import React from 'react'
import './productcardcard.css'
import { Link } from 'react-router-dom'


const ProductCartCard = ({producto}) => {
  return (
    <div className='single-product'>
      
        <h4>{producto.nombre}</h4>
      <h5>Precio: ${producto.precio}</h5>
      <Link to={'/detail/' + producto.id} className="linkADetalle" title="Ver detalles del producto"><i className="bi bi-arrow-right-circle-fill"></i></Link>
        <p>Cantidad: {producto.quantity}</p>
       
    </div>
    
  )
}

export default ProductCartCard