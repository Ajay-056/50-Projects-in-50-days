const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');

// let count = 0;

const todosLS = JSON.parse(localStorage.getItem('todosLS'));

if (todosLS) {
  todosLS.forEach((todo) => addTodo(todo));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // count++;
  // count = addTodo('', count);
  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement('li');

    if (todo && todo.completed) {
      todoEl.classList.add('completed');
    }

    todoEl.innerText = todoText;

    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed');
      updateLS();
    });

    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      todoEl.remove();
      updateLS();
      // return count--;
    });

    todos.append(todoEl);

    input.value = '';

    updateLS();

    // return count;
  }
}

function updateLS() {
  const todosEl = document.querySelectorAll('li');

  const todosArray = [];

  todosEl.forEach((todo) =>
    todosArray.push({
      text: todo.innerText,
      completed: todo.classList.contains('completed'),
    })
  );

  localStorage.setItem('todosLS', JSON.stringify(todosArray));
}
