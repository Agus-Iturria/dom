//DOM
//Ejercicio 1: Seleccionar un Elemento y Agregar una Clase
//Consigna: Selecciona del DOM el elemento p que tiene la clase "intro" y agrégale una nueva clase llamada "highlight".
//let intro = document.querySelector(".intro");
//intro.classList.add("highlight");

//2.Ejercicio 2: Seleccionar un Elemento por ID y Cambiar su Texto
//Consigna: Selecciona del DOM el elemento con el id "header-title" y cambia su texto a "Nuevo Título".
//let headerTittle = document.getElementById("header-tittle");
//headerTittle.innerText = "Nuevo Titulo";

//3.Ejercicio 3: Seleccionar Múltiples Elementos y Agregar una Clase
//Consigna: Selecciona todos los elementos li dentro de una lista y mostrarlos en consola
//let listaOrdenada = document.querySelectorAll(".listaOrdenada");
//listaOrdenada.forEach(function (element) {
//  console.log(element);
//});

//Ejercicio 4: Eliminar una Clase de un Elemento
//Consigna: Selecciona del DOM el elemento con la clase "warning" y elimínale esa clase.
//let warning = document.querySelector(".warning");
//warning.classList.remove("warning");

//Ejercicio 6: Seleccionar y Cambiar el Contenido de Texto
//Consigna: Selecciona del DOM el elemento h1 que tiene la clase "main-title" y cambia su texto a "¡Bienvenidos!".
//let mainTittle = document.querySelector(".main-tittle");
//mainTittle.innerText = "¡Bienvenidos!";

//Ejercicio 7: Seleccionar por ID y Cambiar el Color de Fondo
//Consigna: Selecciona del DOM el elemento con el id "footer" y cambia su color de fondo(El que quieras).
//let footer = document.getElementById("footer");
//footer.style.backgroundColor = "red";

//Ejercicio 8: Seleccionar y Agregar Contenido Adicional
//Consigna: Selecciona del DOM el elemento div con la clase "content" y agrega dentro de él un nuevo párrafo que diga "Contenido adicional" (O lo que quieras que diga).
//let content = document.querySelector(".content");
//content.innerText += " Contenido adicional";

//Ejercicio 10: Verificar y Mostrar si un Elemento Tiene una Clase
//Consigna: Selecciona del DOM el elemento con la clase "header" y muestra en la consola si tiene la clase "sticky".
//let header = document.querySelector(".header")
//console.log(header.classList.contains("sticky"))

//EJERCICIOS LISTAS

lista1 = ['hola1','hola2','hola3']
lista2 = ['chau1','chau2','chau3']

let lista1 = document.getElementById("lista1")
let lista2= document.getElementById("lista2")

for(i = 0; i < lista1.length; i++){
    let newElement = document.createElement('li')
    newElement.textContent = lista1[i]
    lista1.append(newElement);
}


