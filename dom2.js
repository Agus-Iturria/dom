//EVENTOS
//Ejercicio 1: Manejar Evento para Mostrar un Mensaje: Selecciona un botón con el id "show-message" y agrega un evento click que muestre un mensaje de alerta diciendo "¡Hola, mundo!".

//Ejercicio 2: Cambiar el Color de Fondo al Hacer Clic: Selecciona el body y agrega un evento que cambie su color de fondo al color que prefieras.

let button = document.querySelector("button");
let body = document.querySelector("body");
button.addEventListener("click", function () {
  alert("¡Hola, mundo!");
  body.style.backgroundColor = "green";
});

//Ejercicio 3: Cambiar Texto al Hacer Clic: Selecciona un párrafo con la clase "click-text" y agrega un evento que cambie su texto a "Has hecho clic aquí".

let parrafo = document.querySelector("p");
parrafo.addEventListener("click", function () {
  parrafo.innerText = "Has clickeado aqui";
});

//Ejercicio 4: Cambiar el Valor de un Input al Cambiarlo: Selecciona un input de texto y crea un elemento párrafo el cual agreguemos lo que vamos escribiendo en el i8nput.

let ingresarTexto = document.querySelector("#ingresarTexto");
let textoIngresado = document.querySelector(".textoIngresado");
ingresarTexto.addEventListener("input", function (event) {
  textoIngresado.textContent = event.target.value;
});

//Ejercicio 5: Validar Formulario al Enviarlo: Selecciona un formulario con el id "signup-form"que tenga 2 inputs y agrega un evento que al enviar el formulario valide si los campos están completos. Si no lo están, muestra un mensaje de error.
let miForm = document.querySelector("#signup-form");
miForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let username = event.target.username.value;
  let email = event.target.email.value;
  if (username === "" || email === "") {
    alert("Por favor, complete todos los campos.");
  } else {
    alert("El formulario se está por enviar...");
  }
});

//Ejercicio 6: Evento para Mostrar un Mensaje al Cargar la Página: Agrega un evento al body que muestre un mensaje en consola diciendo "La página se ha cargado".
// Agregar un evento al body que muestre un mensaje en la consola cuando la página se haya cargado
window.addEventListener("load", function () {
  console.log("La página se ha cargado");
});

//Ejercicio 7: Agregar Elemento a la Lista al Hacer Clic: Selecciona un botón con el id "add-item" y agrega un evento que añada un nuevo elemento li a una lista con la clase "item-list".
let addButton = document.querySelector("#add-item");
let itemList = document.querySelector(".item-list");
let contador = 1;

addButton.addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = `Elemento ${contador}`;
  contador = contador + 1;
  itemList.append(newItem);
});

//Ejercicio 8: Prevenir el Comportamiento por Defecto al Enviar Formulario: Selecciona un formulario con el id "contact-form" y agrega unos eventos para evitar que el formulario se envíe, y luego muestra un mensaje diciendo "El envío del formulario ha sido detenido"
// Seleccionar el formulario
const contactForm = document.querySelector("#contact-form");
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("El envío del formulario ha sido detenido.");
});

//Ejercicio 9: Contar y Mostrar Clics en un Botón: Selecciona un botón con la clase "count-button" y agrega un evento que cuente cuántas veces se ha hecho clic en él, mostrando el total en un span con el id "click-count".
let countButton = document.querySelector("#count-button");
let clickCount = document.querySelector("#click-count");

let number = 0;
countButton.addEventListener("click", function () {
  number++;
  clickCount.innerText = number;
});

//Ejercicio 10: Validar Email en un Formulario: Selecciona un formulario con el id "email-form" y agrega un evento que valide que el campo de email contiene un formato válido antes de enviarlo.
let emailForm = document.querySelector("#email-form");
emailForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let newEmail = event.target.newEmail.value;
  if (newEmail.includes("@")) {
    alert("Ta bien");
  } else {
    alert("Ta mal");
  }
});

//Ejercicio 11: Evento para Mostrar/Ocultar Contenido: Selecciona un botón con el id "toggle-content" y un div con la clase "content-box", y agrega un evento que muestre o oculte el contenido del div al hacer clic.
let toggleContent = document.querySelector("#toggle-content");
let contentBox = document.querySelector(".content-box");
toggleContent.addEventListener("click", function () {
  if (contentBox.style.display === "none") {
    contentBox.style.display = "block";
  } else {
    contentBox.style.display = "none";
  }
});

//Ejercicio 12: Prevenir el Comportamiento por Defecto en un Enlace: Selecciona un enlace con la clase "no-default" y agrega un evento para evitar que el enlace navegue a otra página, mostrando en su lugar un mensaje en consola.
let noDefault = document.querySelector(".no-default");
noDefault.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Nono");
});

//Ejercicio 13: Cambiar el Estilo de un Elemento: Selecciona un botón con el id "add-class" y un párrafo con la clase "text". Agrega un evento que añada una clase "highlight" al párrafo y que cambie su estilo (A lo que gustes).
let addClass = document.querySelector("#add-class");
let text = document.querySelector(".text");
addClass.addEventListener("click", function () {
  text.classList.add("highlight");
});

//Ejercicio 14: Alternar Contenido de Texto: Selecciona un botón con el id "toggle-text" y un párrafo con la clase "text-toggle". Agrega un evento que cambie el texto del párrafo entre "Texto 1" y "Texto 2".
let toggleText = document.querySelector("#toggle-text");
let textToggle = document.querySelector(".text-toggle");
toggleText.addEventListener("click", function () {
  if (textToggle.innerHTML === "Texto 1") {
    textToggle.innerHTML = "Texto 2";
  } else {
    textToggle.innerHTML = "Texto 1";
  }
});

//Ejercicio 15: Agregar Contenido HTML Dinámicamente: Selecciona un botón con el id "add-html" y un div con la clase "container". Agrega un evento click que inserte un bloque de HTML dentro del div.
let addHtml = document.querySelector("#add-html");
let container = document.querySelector(".container");
addHtml.addEventListener("click", function () {
  let newItem = document.createElement("htmtl");
  container.append(newItem);
});

//Ejercicio 16: Crear y Agregar un Nuevo Elemento al DOM: Selecciona un botón con el id "create-element". Agrega un evento que cree un nuevo párrafo p con el texto "Elemento creado" y lo añada al final de un div con la clase "content".
let createElement = document.querySelector("#create-element");
let content = document.querySelector(".content");
createElement.addEventListener("click", function () {
  let newItem = document.createElement("htmtl");
  newItem.textContent = "As-salamu alaykum";
  content.append(newItem);
});

//Ejercicio 17: Cambiar el Color de Fondo de Múltiples Elementos: Selecciona todos los elementos li dentro de una lista con la clase "color-list" y un botón con el id "change-color". Agrega un evento que cambie el color de fondo de cada li
let changeColorButton = document.querySelector("#change-color");
let listItems = document.querySelectorAll(".color-list");

changeColorButton.addEventListener("click", function () {
  listItems.forEach(function (item) {
    item.style.backgroundColor = "lightblue";
  });
});

//Ejercicio 18: Crear una Lista de Ítems Dinámicamente: Selecciona un botón con el id "create-list". Agrega un evento que cree una nueva lista ul y añada cinco elementos li dentro de ella, agregando la lista al final de un div con la clase "list-container".
let createListButton = document.querySelector("#create-list");
let listContainer = document.querySelector(".list-container");

createListButton.addEventListener("click", function () {
    let newList = document.createElement("ul");
    for (let i = 1; i <= 5; i = i +1) {
        let newItem = document.createElement("li");
        newItem.textContent = `item ${i}`;
        newList.append(newItem);
    }
    listContainer.append(newList);
});

//Ejercicio 20: Cambiar el Tamaño de un elemento HTML: Selecciona un elemento con el id "resize-image" y agrega un evento que cambie su estilo.
let resizeImage = document.querySelector("#resize-image");
resizeImage.addEventListener("click", function () {
    if (resizeImage.style.width === "400px") {
        resizeImage.style.width = "200px";
    } else {
        resizeImage.style.width = "400px";
    }
});


//YesSIR
