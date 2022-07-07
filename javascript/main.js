const listaProductos = [{
        nombre: "Remera Manga Corta",
        color: "blanco",
        precio: 2500.00,
        imagen: "Remera-blanca-hombre.jpg"
    },

    {
        nombre: "Remera Manga Larga",
        color: "blanco",
        precio: 3000.00,
        imagen: "remera-blanca-hombre-ml.jpg"
    },

    {
        nombre: "Remera Manga Corta",
        color: "negro",
        precio: 2500.00,
        imagen: "remera-negra-hombre.webp"
    },

    {
        nombre: "Remera Manga Larga",
        color: "negro",
        precio: 3000.00,
        imagen: "remera-negra-hombre-ml.webp"
    },

    {
        nombre: "Buzo Liso",
        color: "negro",
        precio: 5000.00,
        imagen: "buzo-negro-hombre.webp"
    },

    {
        nombre: "Buzo Liso",
        color: "blanco",
        precio: 5000.00,
        imagen: "buzo-blanco-hombre.jpg"
    },

    {
        nombre: "Buzo Capucha",
        color: "negro",
        precio: 5500.00,
        imagen: "buzo-negro-capucha.webp"
    },

    {
        nombre: "Buzo Capucha",
        color: "blanco",
        precio: 5500.00,
        imagen: "buzo-blanco-capucha.jpg"
    },

    {
        nombre: "Chomba",
        color: "blanco",
        precio: 4500.00,
        imagen: "chomba-blanca-hombre.jpg"
    },

    {
        nombre: "Chomba",
        color: "negro",
        precio: 4500.00,
        imagen: "chomba-negra-hombre.webp"
    }
]


// funcion para crear cards de la seccion todos los productos
function crearCardsTodos(array) {
    const contenedorCards = document.getElementById("productos-todos");
    for (const producto of array) {
        let card = document.createElement("div")
        card.className = "productos-todos-card";
        card.setAttribute("id" , "idcard")
        card.innerHTML =
            `<img src="./img/productos/${producto.imagen}" alt="">
            <div>
                <h2>${producto.nombre} ${producto.color}</h2>
                <p>$ ${producto.precio}</p>
            </div>`;
            contenedorCards.append(card);
    }
}


// funcion para interactuar con los botos de filtrado 


function botonFiltro(id, array) { //id del boton y array que quiero mostrar en el filtro

    let btnFiltro = document.getElementById(id)
    btnFiltro.addEventListener('click', respClick) //evento al click en el boton
    function respClick() {
        crearCardsTodos(array) //crea las cards del array q le pase
    }
}


//creacion de arrays con distintos filtros
let colorNegro = listaProductos.filter((producto) => producto.color == "negro");
let colorBlanco = listaProductos.filter((producto) => producto.color == "blanco");


//llamados a las funciones de filtrado
botonFiltro("filtro-todos", listaProductos)
botonFiltro("filtro-negro", colorNegro)
botonFiltro("filtro-blanco", colorBlanco)



function main() {
    crearCardsTodos(listaProductos)
}

main()