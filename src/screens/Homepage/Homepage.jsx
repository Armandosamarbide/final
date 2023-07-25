import React, { useEffect, useState } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCard } from '../../components'
import './homepage.css'

const HomePage = () => {
    const {products} = useCustomContext()
    const [searchProduct, setSearchProduct] = useState('')
    const [max, setMax] = useState(1530000)
    const [min, setMin] = useState(0)
    const [currentProducts, setCurrentProducts] = useState(products)

    useEffect(() =>{
      setCurrentProducts(products.filter(
        producto => producto.nombre.toLowerCase().includes(searchProduct.toLowerCase()) && producto.precio >= min && producto.precio <= max
      ))
    }, [searchProduct, max, min])
  return (
  
<div>
      <div className='elementosHomepage'>
     
  <div className='containerBusqueda'>    
          <input className="busqueda" placeholder='Filtrar por nombre' value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)} />
          </div>
      
     
        
        <div className="precio">
            <div className="grid-item-precio"><h3>Precio</h3></div>
            <div className="grid-item-precio">
            
            <form>
            <input type='text' className='precioIzq' value={min} onChange={(e) => setMin(Number(e.target.value))}/>
            <input type='text' className='precioDer' value={max} onChange={(e) => setMax(Number(e.target.value))}/>
            </form>
            
            </div>
    
          </div>
       

</div>
      
    <div className='listaProductos'>
    {
              currentProducts.length > 0 
              ?
              currentProducts.map(producto  => (
              <ProductCard producto={producto} key={producto.id}/>
              ))
              :
              <h2>No se encuentran productos</h2>
          }
        </div>
    </div>
  )
}



export default HomePage