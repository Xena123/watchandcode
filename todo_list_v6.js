todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length == 0) {
      console.log("Your todo list is empty")
    } else {
      console.log('My Todos:');
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed == true) {
          console.log("(x)", this.todos[i].todoText);
        } else {
          console.log("( )", this.todos[i].todoText);
        }
      };
    }
  },
  addTodos: function(text) {
    this.todos.push({
      todoText: text,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(index, text) {
    this.todos[index].todoText = text;
    this.displayTodos();
  },
  deleteTodo: function(index) {
    this.todos.splice(index, 1);
    this.displayTodos();
  },
  
  toggleCompleted: function(index) {
    var todo = this.todos[index];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    // Get number of completed todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed == true) {
        completedTodos++;
      }
    };
    // .toggleAll: if everything is true, make everything false 
    if (completedTodos == totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      };
    // .toggleAll: Otherwise, make everything true
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      };
    }
    this.displayTodos();
  }
};

