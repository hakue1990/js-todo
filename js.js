// Selectors
const addButton = document.querySelector(".form--button");
const list = document.querySelector(".form--list");
let input = document.querySelector(".form--input");
let itemId;
//Functions
const adddItem = (e) => {
  e.preventDefault();
  //create div
  let newDiv = document.createElement("div");
  newDiv.classList.add("todo");
  //create item
  let newItem = document.createElement("li");
  newItem.textContent = input.value;
  input.value = "";
  //create confirm button
  let confirmButton = document.createElement("button");
  confirmButton.classList.add("todo--button__complete");
  confirmButton.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  //create delete button
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("todo--button__delete");
  deleteButton.innerHTML = ' <i class="fa-solid fa-trash"></i>';

  //append Child
  newDiv.appendChild(newItem);
  newDiv.appendChild(confirmButton);
  newDiv.appendChild(deleteButton);
  list.appendChild(newDiv);
};

// Event Listeners
addButton.addEventListener("click", adddItem);
