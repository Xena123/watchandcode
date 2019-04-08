
todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos:', this.todos);
  },
  // todoList.addTodo should add objects
  addTodos: function(text) {
    this.todos.push({
      todoText: text,
      completed: false
    });
    this.displayTodos();
  },
  // todoList.changeTodo should change the todoText property
  changeTodo: function(index, text) {
    this.todos[index].todoText = text;
    this.displayTodos();
  },
  deleteTodo: function(index) {
    this.todos.splice(index, 1);
    this.displayTodos();
  },
  // todoList.toggleCompleted should change the completed property
  toggleCompleted: function(index) {
    var todo = this.todos[index];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};

