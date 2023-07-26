# final
Proyecto APPLE Commerce One - Trabajo Final Curso Programador Full Stack - UTN -2023
Comisión lu-mi-vi turno noche.

Generalidades:
El proyecto es un carrito de compras confeccionado en base a los temas vistos en clase.

Acciones permitidas:

- Ver y navegar una lista de productos;
- Filtrar dicha lista por rango de precios (mínimo-máximo);
- Filtrar dicha lista por nombre de producto;
- Ver el detalle de los productos;
- Elegir la cantidad de productos a agregar al carrito, sumando y restando;
- Agregar productos al carrito mientras haya stock disponible;
- Agregar varios productos del mismo tipo al carrito (Mientras haya stock disponible);
- Visualizar los contenidos del carrito de compras;
- Acceder al detalle de los productos agregados desde el carrito de compras;
- Acceder a un formulario de envío de mensajes y escribir en campos predefinidos (En relación a esta acción, ver funciones no permitidas);
- Acceder a un link para enviar un correo electrónico a la empresa;
- Visualizar la ubicación de la empresa en Google Maps;
- Acceder a la página principal y las redes sociales de la empresa mediante links en el footer de la página;
- Acceder a diversos contenidos relacionados a la empresa mediante links en el footer de la página.

Acciones no permitidas:

- Comprar productos desde la homepage, solo desde las páginas de detalle;
- Realizar el checkout de los productos agregados al carrito de compras;
- Enviar efectivamente un mensaje a la empresa mediante el formulario de contacto;
- Borrar productos del carrito una vez agregados.

Componentes:

El programa cuenta con varias partes integrantes, a saber:

Directorio raíz

Main.jsx
App.jsx;

Directorio "assets"

Imágenes utilizadas en el desarrollo.

Directorio "components"

Counter;
Footer;
ProductCard;
ProductCartCard
TopNav;
Archivo index.js.

Directorio "ContextManager"

ContextProvider.jsx.

Directorio "screens"

CartPage;
ContactPage;
DetailPage;
Homepage;
Phone (No utilizado);
Success;
Archivo index.js.

Descripción de las partes integrantes utilizadas en el desarrollo

Main.jsx: 

Archivo principal del desarrollo. Invoca a App.jsx.

App.jsx: 

Invoca a los componentes TopNav y Footer.
Incluye la definición de las rutas internas a utilizar.

- /: homepage:
- /detail/:id: invoca a las páginas de detalle de los productos, siendo id el dato contenido en el campo id del array de productos.
- /cart: invoca al carrito de compras.
- /contact: invoca al formulario de contacto.
- /phone: invoca al contacto telefónico. Este componente NO fue incluído en el desarrollo y no es accesible.
ContextProvider
Incluye el array de objetos a mostrar en pantalla. Cada objeto corresponde a un producto, e incluye:
- category: texto;
- nombre: texto;
- precio: numérico;
- id: numérico;
- stock: numérico;
- descripcion: texto;
- thumb: link a una imagen.

Incluye también un código que devuelve el total de la suma de los precios de los productos guardados en el carrito.
Componente Counter
Este componente incluye el código de la botonera incluída en cada página de detalle de producto. Con estos botones se pueden agregar/quitar elementos al carrito y confirmar.
Cuando se hace click en el botón de confirmación, se muestra en pantalla un mensaje de "Producto agregado al carrito".

Componente Footer
Incluye los links a mostrar en el footer de la página. Estos links son funcionales, y son:

- Home: apunta a la homepage (https://final-ashen-omega.vercel.app/);
- Ícono de Twitter: apunta a https://twitter.com/AppleLatam.
- Ícono de Facebook: apunta a https://www.facebook.com/apple/?locale=es_LA.
- Ícono de Instagram: apunta a https://www.instagram.com/apple/.
- Apple: apunta a https://www.apple.com/.
- Política de privacidad: https://www.apple.com/legal/privacy/es-la/.
- Uso de cookies: https://www.apple.com/legal/privacy/es/cookies/.
- Condiciones de uso: https://www.apple.com/es/legal/internet-services/terms/site.html.
- Legal: https://www.apple.com/legal/.
- Newsroom: https://www.apple.com/es/newsroom/.
- Texto "Copyright © 2023 Apple Inc. All rights reserved".

Este componente es visible desde las páginas:
- Homepage;
- Detalle de producto;
- Carrito de compras (Con o sin productos agregados);
- Formulario de contacto.

Componente ProductCard
Este componente muestra en pantalla -en la homepage- una imagen del producto, su nombre, su precio y un link a la página de detalle (DetailPage).
Se genera una card por cada producto en el array de productos.

Componente ProductCartCard
Este componente muestra en pantalla -en la página Carrito- una card similar a la descripta en el item anterior, pero quitando la imagen e incluyendo la cantidad de productos agregada al carrito de compras.
Se genera una card por producto agregado, informando la cantidad. NO se muestra dos veces el mismo producto. Si no hay productos en el carrito, no se mostrará nada.
Componente TopNav
Incluye los links a mostrar en la nav de la página. Estos links son los siguientes:

- Ícono de Apple: apunta a la homepage (https://final-ashen-omega.vercel.app/). Este link está definido en el Router en la App;
- Ícono de contacto: apunta al formulario de contacto;
- Ícono de correo electrónico: este ícono apunta al cliente de correo electrónico configurado por defecto y abre un nuevo correo electrónico dirigido a support@apple.com.
- Ícono mapa: apunta por defecto a la ubicación de una tienda de Apple en Argentina;
- Ícono carrito: apunta al carrito de compras. Este link está definido en el Router en la App.

Este componente es visible desde las páginas:
- Homepage;
- Detalle de producto;
- Carrito de compras (Con o sin productos agregados);
- Formulario de contacto.

Archivo index.js: archivo de imports con los componentes descriptos anteriormente. Además, incluye imports desde Bootstrap utilizado para los íconos de la homepage y el componente TopNav.
Componente CartPage
Esta página muestra los posibles estados del carrito de compras. Si hay productos agregados, los mostrará en formato ProductCartCard. 
Si no los hay, mostrará un mensaje de 'Carrito vacío' y una imagen importada.
Componente ContactPage
Esta página muestra el formulario de contacto, compuesto por los campos

- Nombre: texto, máximo 20 caracteres;
- Correo electrónico: texto, máximo 20 caracteres;
- Mensaje: texto, máximo 200 caracteres.

Ninguno de estos campos es obligatorio. Cuando se termina de introducir texto se clickea el botón 'Enviar' y se desplegará una alerta indicando que el mensaje se ha enviado con éxito. 
No se hacen validaciones de campos vacíos.
Componente DetailPage
Muestra el detalle de los productos incluídos en el array de productos. Se muestran la imagen principal del producto, su nombre, precio y descripción.
Se muestra en pantalla, además, la botonera que permite agregar y quitar productos previo a agregarlos al carrito. Por defecto, se informa un producto en pantalla. No se informan 0 ni negativos, y
no se pueden agregar al carrito más productos que el stock disponible (Informado en el array de productos).
Componente Homepage
Muestra en formato ProductCard los productos agregados al array de productos. Por defecto, mostrará tres por línea; uno en mobile portrait. En caso de no existir productos, muestra un mensaje en pantalla.

Además, muestra el campo filtrar por nombre de producto, que permite buscar entre los productos disponibles. Este campo debe ser 'limpiado' manualmente una vez se confirmó o no que existe un producto acorde a la búsqueda. Se filtra por palabra clave en el título del producto, y el filtrado se puede combinar con el filtro por precio. Los resultados de la búsqueda se muestran siempre en formato ProductCard.

Por último, se muestran los botones de búsqueda por precio, permitiéndose filtrar por precios mínimo y máximo entre los productos disponibles. Los campos mínimo y máximo están inicializados en cero y el máximo valor 
de un producto, respectivamente. En ambos campos, los valores deben ser introducidos manualmente, y los campos deben ser 'limpiados' manualmente una vez se aplicó el filtro deseado.
Componente Success
Este componente se invoca desde ContactPage, y su único cometido es mostrar por pantalla una alerta indicando que se ha enviado exitosamente un mensaje desde ese formulario.

Archivo index.js: muestra los imports del listado de componentes de la carpeta screens.


