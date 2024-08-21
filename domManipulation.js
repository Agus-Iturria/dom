//DOM Manipulation Exercise
//Based on Notion ToDo list style, create a web app that contains two lists side by side.
//1.Each list name must be at the end of the amount of items.
//2.Load an initial list of ToDos for each list when the page is loaded
//a.First list
//i.Buy eggs
//ii.Do laundry
//iii.Buy facturas for Seba
//b.Second list
//i.Sleep
//ii.Eat
//iii.Code
//iv.Repeat
//3.The last list item must be an empty item allowing users to add a new item to that list. It must have a button on the right side with the text “Add”
//4.Allow users to delete items, with a button to the right with the text “Delete”
//a.Extra: alert users to see if they are sure
//5.Add a button to toggle light/dark mode.
//a.Do not duplicate html code.
//6.Manage variable amount of lists.
//(Do not copy from Notion, use provided snapshot as reference).
//Tips
//Hardcode first. Then generalize and abstract variables.
//Start small. Then build bigger and adapt along the way
//Ask for help! But after first trying to do it yourself, and then, understanding what is blocking you (“What is it that I don’t understand?“)

let list1 = document.querySelector("#list1");
let list2 = document.querySelector("#list2");
let addButton1 = document.querySelector(".add-btn1");
let addButton2 = document.querySelector(".add-btn2");
let input = document.querySelector("input1");

let toggleButon = document.getElementById("toggle-theme");
let deleteButtons = document.querySelectorAll(".delete-btn");

deleteButtons.forEach(function (button) {
  button.onclick = function () {
    button.parentElement.remove();
  };
});

toggleButon.addEventListener("click", function () {
  let body = document.body;
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
  }
});

//addButton1.addEventListener("click", function () {
//  let newItemText = input.textContent;
//  let newItem = document.createElement("li");
//  newItem.textContent = `${newItemText} <button class="delete-btn">Delete</button>`;
//  list1.append(newItem);
//});
addButton1.addEventListener("click", function () {
  let newItemText = input;
  let newItem = document.createElement("li");

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-btn");

  newItem.textContent = newItemText;
  newItem.append(deleteButton);

  list1.append(newItem);
});
