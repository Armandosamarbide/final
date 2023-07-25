import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCartCard } from '../../components'
import './cartpage.css'
import { NavLink } from 'react-router-dom'
import carrito from '../../assets/carrito.jpg'

const CartPage = () => {
 const {cart, getTotal} = useCustomContext()
    console.log(getTotal())
  return (
    <div> {cart.length > 0 
        ?
        <>
          <div className='listaProductos'>
              {cart.map(product =>(
                  <ProductCartCard key={product.id} producto={product}/>

              ))}
        </div>
        
        <div className='cartlinkContainer'>
           <div className="linkCart"><NavLink to='/' aria-label='Home'>Seguir comprando</NavLink></div>
        </div>
          
        <div className="grid-item">
            Subtotal: ${getTotal()}
          </div>

        </>
        :
      <>
        <div className='emptyCart'>
          <p>OH, :(</p>
          <p>No tenés artículos en tu carrito de compras</p>
      
          <img src={carrito} alt="carrito" />

 <div className='cartlinkContainer'>
            <div className="linkCart">
              <NavLink to='/' title='Home'>Home</NavLink></div>
</div>

          </div>
        </>
        }
    </div>
  )
}

export default CartPage