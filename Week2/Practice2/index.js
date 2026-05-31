const todoInput = document.querySelector('.todo-input');
const addButton = document.querySelector('.add-button');
const todoList = document.querySelector('.todo-list');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

todos.forEach(todo => {
  const li = document.createElement('li');
  li.textContent = todo.text;
  todoList.appendChild(li);
});

addButton.addEventListener('click', () => {
  const todoText = todoInput.value.trim();

  if(!todoText) return;

  const li = document.createElement('li');
  li.textContent = todoText;
  todoList.appendChild(li);

  todos.push({ text: todoText });
  localStorage.setItem('todos', JSON.stringify(todos));

  todoInput.value = '';
});