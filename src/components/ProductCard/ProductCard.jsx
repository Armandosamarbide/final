import React from "react"
import { Link } from "react-router-dom"
import './productcard.css'

const ProductCard = ({ producto }) => {
  return (
    <div className="single-product">
      
      <div className="imgProducto"><img src={producto.thumb}/></div>
      
        <h4>{producto.nombre}</h4>
        <h5>Precio: ${producto.precio}</h5>
        
        <Link to={'/detail/' + producto.id} className="linkADetalle" title="Ver detalles del producto"><i className="bi bi-arrow-right-circle-fill"></i></Link>
        
    </div>
  )
}

export default ProductCard