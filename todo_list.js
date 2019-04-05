let todos = ['item 1', 'item 2', 'item 3'];

// Display list items

function displayTodos() {
  console.log('My todos:', todos);
}

// Add new list items

function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}

addTodo('new todo');


// Change a list item

function changeTodo(index, todo) {
  todos[index] = todo;
  displayTodos();
}

changeTodo(0, "changed");

// Delete a list item

function deleteTodo(index) {
  todos.splice(index, 1);
  displayTodos();
}

deleteTodo(1);