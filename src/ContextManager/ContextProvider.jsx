import React,{createContext, useContext, useState} from 'react'
const Context = createContext()
const ContextProvider = ({children}) => {
    
    
    
    const products = [
        {
            category: 'COMPUTADORA',
            nombre: 'iMac 24 Retina M1',
            precio: 944998,
            id:1,
            stock: 8,
            descripcion: "Apple iMac 24 Retina M1 256gb Ssd 8-core Cpu / 8-core Gpu; Color: amarillo; RAM: 8Gb; Disco: 256Gb SSD; Resolución: 4480x2520 mp",
            thumb: "https://raw.githubusercontent.com/Armandosamarbide/Repo1004/e31965d2c1cbaa5eccfcd501a577c7d1ca192b9e/Temp/D_NQ_NP_972232-MLA52646442826_112022-O.webp"
        },
        {
            category: 'COMPUTADORA',
            nombre: 'iMac 2021 M1',
            precio: 944999,
            id:2,
            stock: 8,
            descripcion: "Apple iMac 2021 M1 Chip 8-core 8 Gpu/cpu; Color: naranja; RAM: 8Gb; Disco: 256Gb SSD; Resolución: 4480x2520 mp",
            thumb: "https://raw.githubusercontent.com/Armandosamarbide/Repo1004/e31965d2c1cbaa5eccfcd501a577c7d1ca192b9e/Temp/D_NQ_NP_779028-MLA52646544350_112022-O.webp"
        },
        {
            category: 'COMPUTADORA',
            nombre: 'iMac I5 21.5',
            precio: 530000,
            id:3,
            stock: 10,
            descripcion: "Apple iMac I5 21.5; Color: plata; RAM: 4Gb; Disco: 500Gb; Resolución: 1920x1080 mp",
            thumb: "https://raw.githubusercontent.com/Armandosamarbide/Repo1004/e31965d2c1cbaa5eccfcd501a577c7d1ca192b9e/Temp/D_NQ_NP_853179-MLA69842754556_062023-O.webp"
        },
        {
            category: 'NOTEBOOK',
            nombre: 'MacBook Pro M1',
            precio: 1530000,
            id:4,
            stock: 4,
            descripcion: "MacBook Pro 14''; Color: plata; RAM: 16Gb; Disco: SSD 500Gb; Resolución: 3024x1964 mp",
            thumb: "https://raw.githubusercontent.com/Armandosamarbide/Repo1004/e31965d2c1cbaa5eccfcd501a577c7d1ca192b9e/Temp/D_NQ_NP_945710-MLA48354170509_112021-O.webp"
        },
        {
            category: 'NOTEBOOK',
            nombre: 'MacBook Air M2',
            precio: 702660,
            id:5,
            stock: 7,
            descripcion: "MacBook Air M2; Color: negra; RAM: 8Gb; Disco: SSD 256Gb; Resolución: 3024x1964 mp",
            thumb: "https://raw.githubusercontent.com/Armandosamarbide/Repo1004/e31965d2c1cbaa5eccfcd501a577c7d1ca192b9e/Temp/D_NQ_NP_708839-MLA51356236557_082022-O.webp"
        },
        {
            category: 'NOTEBOOK',
            nombre: 'MacBook Pro 2002',
            precio: 1450000,
            id:6,
            stock: 8,
            descripcion: "Macbook Pro M2 10-Core; Color: plata; RAM: 8Gb; Disco: SSD 500Gb; Resolución: 2560x1600",
            thumb: "https://raw.githubusercontent.com/Armandosamarbide/Repo1004/e31965d2c1cbaa5eccfcd501a577c7d1ca192b9e/Temp/D_NQ_NP_859839-MLA54266903844_032023-O.webp"
        },
        {
            category: 'MINI',
            nombre: 'Mac Studio',
            precio: 1500000,
            id:7,
            stock: 11,
            descripcion: "Mac Studio Chip M1 Max CPU 10-core GPU 24-core; Color: plata; RAM: 32Gb; Disco: 512Gb; Resolución: n/a.",
            thumb: "https://raw.githubusercontent.com/Armandosamarbide/Repo1004/e31965d2c1cbaa5eccfcd501a577c7d1ca192b9e/Temp/D_NQ_NP_929069-MLU54978359435_042023-O.webp"
        },
        {
            category: 'MINI',
            nombre: 'Apple Mac Mini',
            precio: 499999,
            id:8,
            stock: 4,
            descripcion: "Mac Mini 2020 Chip Apple M1; Color: plata; RAM: 8Gb; Disco: SSD 256Gb;Resolución: n/a.",
            thumb: "https://raw.githubusercontent.com/Armandosamarbide/Repo1004/e31965d2c1cbaa5eccfcd501a577c7d1ca192b9e/Temp/D_NQ_NP_445815-MLA25319279887_012017-O.webp"
        },
        {
            category: 'PERIFERICO',
            nombre: 'Teclado Apple A1843',
            precio: 109000,
            id:9,
            stock: 2,
            descripcion: "Teclado bluetooth Apple A1843 QWERTY; Color: plata y blanco; Idioma: inglés internacional.",
            thumb: "https://raw.githubusercontent.com/Armandosamarbide/Repo1004/e31965d2c1cbaa5eccfcd501a577c7d1ca192b9e/Temp/D_NQ_NP_786900-MLA32721999047_102019-O.webp"
        },
         {
            category: 'PERIFERICO',
            nombre: 'AirPods 3° Gen',
            precio: 114000,
            id:10,
            stock: 3,
             descripcion: "Auriculares AirPods 3° Generación, con estuche de carga MagSafe; Diseño ergonómico; Color: blanco; Batería: 6 hs a plena carga;",
            thumb: "https://raw.githubusercontent.com/Armandosamarbide/Repo1004/e31965d2c1cbaa5eccfcd501a577c7d1ca192b9e/Temp/D_NQ_NP_857656-MLA48697030680_122021-O.webp"
        },
          {
            category: 'SMARTPHONE',
            nombre: 'iPhone 11 128Gb',
            precio: 385000,
            id:11,
            stock: 13,
            descripcion: "Apple iPhone 11 128Gb; Color: varios; Cámara: 12Mpx; Memoria interna: 128Gb; Incluye cable cargador: sí.",
            thumb: "https://raw.githubusercontent.com/Armandosamarbide/Repo1004/e31965d2c1cbaa5eccfcd501a577c7d1ca192b9e/Temp/D_NQ_NP_945736-MLA46114829756_052021-O.webp"
        },
           {
            category: 'SMARTPHONE',
            nombre: 'iPhone 14 Pro Max 128Gb',
            precio: 1460000,
            id:12,
            stock: 2,
            descripcion: "Apple iPhone 14 Max Pro 128Gb; Color: varios; Cámara: 48Mpx; Memoria interna: 128Gb; Incluye cable cargador: sí.",
            thumb: "https://raw.githubusercontent.com/Armandosamarbide/Repo1004/e31965d2c1cbaa5eccfcd501a577c7d1ca192b9e/Temp/D_NQ_NP_626311-MLA51786483154_102022-O.webp"
        },
            {
            category: 'PERIFERICO',
            nombre: 'Adaptador iPhone carga rápida',
            precio: 109000,
            id:13,
            stock: 20,
            descripcion: "Adaptador iPhone carga rápida; Voltaje: 20w; Conexión: USB-c; Color: blanco.",
            thumb: "https://raw.githubusercontent.com/Armandosamarbide/Repo1004/e31965d2c1cbaa5eccfcd501a577c7d1ca192b9e/Temp/D_NQ_NP_614357-MLA48825906238_012022-O.webp"
        },
             {
            category: 'PERIFERICO',
            nombre: 'Cable USB',
            precio: 12000,
            id:14,
            stock: 12,
            descripcion: "Cable USB 2.0; Color: blanco; Conector de salida: lightning; Tipo de cable de datos: USB-C; Largo: 2m.",
            thumb: "https://raw.githubusercontent.com/Armandosamarbide/Repo1004/e31965d2c1cbaa5eccfcd501a577c7d1ca192b9e/Temp/D_NQ_NP_843264-MLA52464252760_112022-O.webp"
        },
                  {
            category: 'PERIFERICO',
            nombre: 'Magic Mouse',
            precio: 75000,
            id:15,
            stock: 3,
            descripcion: "Cable USB 2.0; Color: blanco; Tipo de mouse: táctil; Inalámbrico: sí. Incluye cargador: sí.",
            thumb: "https://raw.githubusercontent.com/Armandosamarbide/Repo1004/e31965d2c1cbaa5eccfcd501a577c7d1ca192b9e/Temp/D_NQ_NP_856166-MLA46403910103_062021-O.webp"
        },
                           {
            category: 'OLDIE',
            nombre: 'Apple iMac 27',
            precio: 280000,
            id:16,
            stock: 3,
            descripcion: "Apple iMac 27. Año: 2011; Memoria RAM: 12Gb; Disco rígido: 1Tb; Procesador: Intel Core I5.",
            thumb: "https://raw.githubusercontent.com/Armandosamarbide/Repo1004/e31965d2c1cbaa5eccfcd501a577c7d1ca192b9e/Temp/D_NQ_NP_696690-MLA43461813365_092020-O.webp"
        },
                                    {
            category: 'OLDIE',
            nombre: 'Apple iMac 24',
            precio: 120000,
            id:17,
            stock: 3,
            descripcion: "Apple iMac 24. Año: 2016; Memoria RAM: 8Gb; Disco rígido: 256Gb; Color: blanco.",
            thumb: "https://raw.githubusercontent.com/Armandosamarbide/Repo1004/e31965d2c1cbaa5eccfcd501a577c7d1ca192b9e/Temp/D_NQ_NP_631591-MLA52893545261_122022-O.webp"
        },
        
    ]


    const getProductById = (id) =>{
        return products.find(producto => producto.id === Number(id))
    }
    const getProductCartById =(id) => {
        return cart.find(producto => producto.id === Number(id))
    }

    /* El estado del array de objetos del carrito */
  const [cart, setCart] = useState([])
  const isInCart = (id) => cart.some(producto => producto.id === Number(id))

    const addProductCart = (id, quantity) =>{
        if(isInCart(id)){
            setCart(cart.map(product =>{
                if(product.id == id){
                    product.quantity = quantity
                }
                return product
            }))
        }else{
            setCart([...cart, {...getProductById(id), quantity: quantity}])
        }
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(product => total += product.precio * product.quantity)
        return total
    }

   return (
        <Context.Provider value={{ products, getProductById, cart, addProductCart, isInCart, getProductCartById, getTotal}}>
            {children}
        </Context.Provider>
    )
}

export const useCustomContext = () => useContext(Context)
export default ContextProvider