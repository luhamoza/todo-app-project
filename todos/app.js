'use strict';

const addTodos = document.querySelector('.add');
const listTodos = document.querySelector('.todos');
const search = document.querySelector('.search input');

//adding html inside ul tag
const generateTemplate = todo => {
  const html = `<li
  class="list-group-item d-flex justify-content-between align-items-center"
>
  <span>${todo}</span>
  <i class="far delete fa-trash-alt"></i>
</li>`;
  listTodos.innerHTML += html;
};

//add todos
addTodos.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addTodos.add.value.trim();
  //.trim() to remove white spaces

  if (todo.length) {
    generateTemplate(todo);
    addTodos.reset();
  }
});

//delete todos
listTodos.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

//search todos

//filtering todos
const filterTodos = term => {
  //to add filtered class
  Array.from(listTodos.children) //convert html document into array
    .filter(
      todo => !todo.textContent.toLowerCase().includes(term) //we want array of todos that don't contain term variable(todos list value)
    )
    .forEach(todo => {
      todo.classList.add('filtered');
    });
  //to remove filtered class
  Array.from(listTodos.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));
};
//keyup events
search.addEventListener('keyup', () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
