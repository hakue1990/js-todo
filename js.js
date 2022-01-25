// 1. pobrac wszystkie elementy
// 2. ustawi event lsitenery
// 3. napisac dodaj item
// 4. napisac usun item



// Selectors
const addButton = document.querySelector('.form--button');
const list = document.querySelector('.form--list');
let input = document.querySelector('.form--input');

//Functions
const adddItem = (e) => {
  e.preventDefault();
  if(input.value != ''){
    let itemId = new Date();
    //create div
    let newDiv = document.createElement('div');
    newDiv.classList.add('todo');
    //create item
    let newItem = document.createElement('li');
    newItem.textContent = input.value;
    input.value = '';
    //create confirm button
    let confirmButton = document.createElement('button');
    confirmButton.classList.add('todo--button__complete');
    confirmButton.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    //create delete button
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('todo--button__delete');
    deleteButton.innerHTML = ' <i class="fa-solid fa-trash"></i>';
  
    //append Child
    newDiv.appendChild(newItem);
    newDiv.appendChild(confirmButton);
    newDiv.appendChild(deleteButton);
    list.appendChild(newDiv);
  }
  
};
const deleteCheck = (e) => {
  e.preventDefault();
  const item = e.target;
  console.log(item)
  if(item.classList.contains('todo--button__delete')){
    const todo = item.parentElement;
    todo.classList.add('fall');
    todo.addEventListener('transitionend', () => {
      todo.remove();
    })
  }
  if(item.classList.contains('todo--button__complete')){
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
};

// Event Listeners
addButton.addEventListener('click', adddItem);
list.addEventListener('click', deleteCheck);