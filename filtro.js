// Tenemos un arreglo de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

//se cambian nombres de constantes para que sean intuitivas
const lista = document.getElementById("lista-de-productos") //en html lista-de-productos es un id se cambia a getElementsById
const inputFiltro = document.getElementById("filtro"); //input no tiene clase filtro, mejor le agregamos id en html y aqui se modifica a getElemetById
const btnFiltrar = document.getElementById("btnFiltrar"); //declarar el botón al inicio, mejor con id, nombre más simple


//mostrar todos los productos en la página
for (let i = 0; i < productos.length; i++) {
  //crea div donde se insertan los productos
  var d = document.createElement("div")
  d.classList.add("producto")

  //crea el párrafo con clase titulo y se inserta el nombre de cada producto
  var ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  //crea la etiqueta img y le inserta la ruta de la imagen del producto
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  lista.appendChild(d)
}//for


//displayProductos(productos) //no está definida la funcion ni tampoco se utiliza en todo el código

//filtrar con botón
btnFiltrar.onclick = function() {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  const texto = inputFiltro.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    lista.appendChild(d)
  }
}

//función filtrado
const filtrado = (productos = [], texto) => {
  const q = texto.toLowerCase();
  return productos.filter(producto => 
    //se agrega que pase el texto de lo que estpa en el arreglo en minusculas
    producto.tipo.toLowerCase().includes(q) || 
    producto.color.toLowerCase().includes(q));
}  
