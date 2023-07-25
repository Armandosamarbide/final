import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { CartPage, ContactPage, DetailPage, Homepage } from './screens'
import { Route, Routes } from 'react-router-dom'
import { Phone, TopNav } from './components'
import { Footer } from './components'

function App() {
  return (
    <>
    <div>
    <nav>
    <TopNav />
    </nav>
      <Routes>
       <Route path='/' element={<Homepage/>}/>
        <Route path='/detail/:id' element={<DetailPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
          <Route path='/contact' element={<ContactPage />} />
           <Route path='/phone' element={<Phone />} />
          
      </Routes>

    </div>
      
    <footer>
        <Footer />
      </footer>
      </>
  )
}
export default App