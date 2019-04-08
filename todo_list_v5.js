// Version 5

todoList = {
  todos: [],
  displayTodos: function() {
    // .displayTodo should tell you if .todos is empty
    if (this.todos.length == 0) {
      console.log("Your todo list is empty")
    } else {
      // .displayTodo should show .todoText
      console.log('My Todos:');
      for (var i = 0; i < this.todos.length; i++) {
        // .displayTodo should show you .completed
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
  }
};



