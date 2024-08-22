let list1 = document.querySelector("#list1");
let list2 = document.querySelector("#list2");
let addButton1 = document.querySelector(".add-btn1");
let addButton2 = document.querySelector(".add-btn2");
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let toggleButton = document.getElementById("toggle-theme");

let todoList1 = ["Buy eggs", "Do laundry", "Buy facturas for Seba", "Hola"];
let todoList2 = ["Sleep", "Eat", "Code", "Repeat"];

function createDeleteButton() {
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "✖";
  deleteButton.classList.add("delete-btn");
  deleteButton.onclick = function () {
    if (confirm("¿Quieres borrarlo?")) {
      this.parentElement.remove();
    }
  };
  return deleteButton;
}

function addLists(todolist, list) {
  for (let i = 0; i < todolist.length; i++) {
    let newItem = document.createElement("li");
    newItem.textContent = todolist[i];
    newItem.append(createDeleteButton());
    list.append(newItem);
  }
}

addLists(todoList1, list1);
addLists(todoList2, list2);

function addItem(list, input) {
  let newItemText = input.value;
  if (newItemText !== "") {
    let newItem = document.createElement("li");
    newItem.textContent = newItemText;
    newItem.append(createDeleteButton());
    list.append(newItem);
    input.value = "";
  }
}

addButton1.addEventListener("click", function () {
  addItem(list1, input1);
});

addButton2.addEventListener("click", function () {
  addItem(list2, input2);
});

toggleButton.addEventListener("click", function () {
  let body = document.body;
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
});
