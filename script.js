//alert("Hola este es mi Javascript");
//const Nombre = "Oscar";
//console.log(Nombre);

// FUNCIONES

let nombre = "Ana Lucia";
let pais = "COL";
let gusto = "la lectura";

let parrafo = document.querySelector(".parrafo");

function cambiarTexto(nombre, pais, gusto) {
    let contenido = `Me llamo ${nombre}, naci en ${pais} y vivo en Bogota. Me gusta ${gusto} acompañandolo de un  cafe o un buen vino. De ahi nacio la idea de este cafe paraa compartir con la gente que le gusta lo mismo.`;
    
    return contenido;
}

parrafo.innerText = cambiarTexto(nombre, pais, gusto);