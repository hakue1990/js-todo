// Selectors
const addButton = document.querySelector('.form--button');
const list = document.querySelector('.form--list');
let input = document.querySelector('.form--input');
let itemId;
//Functions
const adddItem = (e) => {
  e.preventDefault();

  //create item
  let newItem = document.createElement('li');
  newItem.textContent = input.value;
  //add item to the todo list
  input.value != 0 ? list.appendChild(newItem) : null;
  input.value = '';
};
// Event Listeners
addButton.addEventListener('click', adddItem);
