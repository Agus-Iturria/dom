let toggleButton = document.getElementById("toggle-theme");

let todoList1 = ["Buy eggs", "Do laundry", "Buy facturas for Seba", "Hola"];
let todoList2 = ["Sleep", "Eat", "Code", "Repeat"];
let todolist3 = ["Hello", "Hola", "Bonyour", "Bom dia"];
let todolist4 = ["Hello", "Hola", "Bonyour", "Bom dia"];
let todolist5 = ["Hello", "Hola", "Bonyour", "Bom dia"];
let todolist6 = ["Hello", "Hola", "Bonyour", "Bom dia"];
let todolist7 = ["Buy eggs", "Do laundry", "Buy facturas for Seba", "Hola"];
let todolist8 = ["Sleep", "Eat", "Code", "Repeat"];
let todolist9 = ["Hello", "Hola", "Bonyour", "Bom dia"];
let todolist10 = ["Hello", "Hola", "Bonyour", "Bom dia"];
let todolist11 = ["Hello", "Hola", "Bonyour", "Bom dia"];
let todolist12 = ["Hello", "Hola", "Bonyour", "Bom dia"];

let allLists = {
  list1: todoList1,
  list2: todoList2,
  list3: todolist3,
  list4: todolist4,
  list5: todolist5,
  list6: todolist6,
  list7: todolist7,
  list8: todolist8,
  list9: todolist9,
  list10: todolist10,
  list11: todolist11,
  list12: todolist12,
};

function createList(id, name) {
  let listContainer = document.createElement("div");
  listContainer.classList.add("lista");

  let h1 = document.createElement("h1");
  h1.textContent = name;
  listContainer.append(h1);

  let list = document.createElement("ul");
  list.id = id;
  listContainer.append(list);
  let inputDiv = document.createElement("div");

  let input = document.createElement("input");
  input.type = "text";
  input.classList.add("input");
  inputDiv.append(input);

  let addButton = document.createElement("button");
  addButton.textContent = "+";
  addButton.classList.add("add-btn");
  addButton.onclick = function () {
    addItem(id, input);
  };

  inputDiv.append(addButton);
  listContainer.append(inputDiv);

  document.querySelector(".lists").append(listContainer);
}

function addLists() {
  for (let listId in allLists) {
    createList(listId, `TO DO LIST (${listId})`);
    let list = document.getElementById(listId);
    let todoList = allLists[listId];
    for (let i = 0; i < todoList.length; i++) {
      let newItem = document.createElement("li");
      newItem.textContent = todoList[i];
      newItem.append(createDeleteButton());
      list.append(newItem);
    }
  }
}

addLists();

function addItem(listId, input) {
  let list = document.getElementById(listId);
  let newItemText = input.value;
  if (newItemText !== "") {
    let newItem = document.createElement("li");
    newItem.textContent = newItemText;
    newItem.append(createDeleteButton());
    list.append(newItem);
    input.value = "";
  }
}

function createDeleteButton() {
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "✖";
  deleteButton.classList.add("delete-btn");
  deleteButton.onclick = function () {
    if (confirm("¿Queres borrarlo?")) {
      this.parentElement.remove();
    }
  };
  return deleteButton;
}

toggleButton.addEventListener("click", function () {
  let body = document.body;
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  if (body.classList.contains("dark-mode")) {
    toggleButton.innerText = "☾ Dark"; 
  } else {
    toggleButton.innerText = "☼ Light";
  }
});
