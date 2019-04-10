todoList = {
  todos: [],
  displayTodos: function() {
    // if there are no todos then print the following:
    if (this.todos.length == 0) {
      console.log("Your todo list is empty")
    // if there are any todos then iterate through the todos
    } else {
      console.log('My Todos:');
      for (var i = 0; i < this.todos.length; i++) {
        // check if the the todo is completed and print (x) for completed
        if (this.todos[i].completed == true) {
          console.log("(x)", this.todos[i].todoText);
        // otherwise print and ( ) for incomplete
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
    // make the boolean on completed the opposite to what it is now
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    // iterate through the array and count all the completed todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed == true) {
        completedTodos++;
      }
    };
    // if all the todos are completed (true) then change to incomplete (false)
    if (completedTodos == totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      };
    // otherwise change all to completed (true)
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      };
    }
    this.displayTodos();
  }
};

 
var handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  addTodos: function() {
    var addTodoInput = document.getElementById("input--add");
    todoList.addTodos(addTodoInput.value);
    addTodoInput.value = '';
  },
  changeTodo: function() {
    var changeTodoPosition = document.getElementById("input--position");
    var changeTodoText = document.getElementById("input--text");
    
    todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoText.value);
    changeTodoPosition.value = '';
    changeTodoText.value = '';
  },
  deleteTodo: function() {
    var deleteTodo = document.getElementById("input--delete");
    todoList.deleteTodo(deleteTodo.valueAsNumber);
    deleteTodo.value = '';
  },
  toggleCompleted: function() {
    var toggleCompleted = document.getElementById("input--toggle");
    todoList.toggleCompleted(toggleCompleted.valueAsNumber);
    toggleCompleted.value = '';
  },
  toggleAll: function() {
    todoList.toggleAll();
  }
};



