// Version 3

// it should store the todos array on an object

todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  // it should have a displayTodos method
  displayTodos: function() {
    console.log('My Todos:', this.todos);
  },
  addTodos: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  // it should have a changeTodo method
  changeTodo: function(index, todo) {
    this.todos[index] = todo;
    this.displayTodos();
  },
  // it should have a deleteTodo method
  deleteTodo: function(index) {
    this.todos.splice(index, 1);
    this.displayTodos();
  }
};














