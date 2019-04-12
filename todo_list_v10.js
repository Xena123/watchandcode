todoList = {
  todos: [],
  addTodos: function(text) {
    this.todos.push({
      todoText: text,
      completed: false
    });
  },
  changeTodo: function(index, text) {
    this.todos[index].todoText = text;
  },
  deleteTodo: function(index) {
    this.todos.splice(index, 1);
  },
  
  toggleCompleted: function(index) {
    var todo = this.todos[index];
    // make the boolean on completed the opposite to what it is now
    todo.completed = !todo.completed;
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
  }
};

 
var handlers = {
  addTodos: function() {
    var addTodoInput = document.getElementById("input--add");
    todoList.addTodos(addTodoInput.value);
    addTodoInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPosition = document.getElementById("input--position");
    var changeTodoText = document.getElementById("input--text");
    
    todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoText.value);
    changeTodoPosition.value = '';
    changeTodoText.value = '';
    view.displayTodos();
  },
  deleteTodo: function(index) {
    todoList.deleteTodo(index);
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompleted = document.getElementById("input--toggle");
    todoList.toggleCompleted(toggleCompleted.valueAsNumber);
    toggleCompleted.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function() {
    var list = document.querySelector("ul");
    list.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++) {
      var listItem = document.createElement("li");
      var currentTodo = todoList.todos[i];
      var textWithCompletion = '';
      if (currentTodo.completed == true) {
        textWithCompletion = '(x) ' + currentTodo.todoText;
      } else {
        textWithCompletion = '( ) ' + currentTodo.todoText;
      }
      // Each li should have an id that has the todo position
      listItem.setAttribute('data', i);
      listItem.textContent = textWithCompletion;
      list.appendChild(listItem);
      // There should be a delete button for each todo
      listItem.appendChild(this.createDeleteButton());
    };
  },
  // There should be a way to create delete buttons
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'btn--delete';
    return deleteButton;
  },
  setupEventListeners: function() {
    var list = document.querySelector('ul');
    // Delete buttons should have access to the todo id
    list.addEventListener('click', function(e) {
     var buttonIndex = e.target.parentNode.attributes.data.nodeValue;
      // Get the element that was clicked on
      var elementClicked = e.target;
      // Check if the element clicked on is a delete button
      if (elementClicked.className == 'btn--delete') {
        // Click delete should update todoList.todos and the DOM
        handlers.deleteTodo(buttonIndex);
      }
    });
  }
}


view.setupEventListeners();



