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
  // Version 11: todoList.toggleAll should use forEach
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    todoArray = this.todos;
    // iterate through the array and count all the completed todos
    todoArray.forEach(function(todo) {
      if (todo.completed == true) {
        completedTodos++;
      }
    });
    todoArray.forEach(function(todo) {
      // if all the todos are completed (true) then change to incomplete (false)
      if (completedTodos == totalTodos) {
        todo.completed = false;
      // otherwise change all to completed (true)
      } else {
        todo.completed = true;
      }
    })
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
    // view.displayTodos should use forEach
    todoList.todos.forEach(function(todo, i) {
      var listItem = document.createElement("li");
      var textWithCompletion = '';

      if (todo.completed == true) {
        textWithCompletion = '(x) ' + todo.todoText;
      } else {
        textWithCompletion = '( ) ' + todo.todoText;
      }

      listItem.setAttribute('data', i);
      listItem.textContent = textWithCompletion;
      list.appendChild(listItem);
      listItem.appendChild(this.createDeleteButton());

    }, this);
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'btn--delete';
    return deleteButton;
  },
  setupEventListeners: function() {
    var list = document.querySelector('ul');
    list.addEventListener('click', function(e) {
    var buttonIndex = e.target.parentNode.attributes.data.nodeValue;  
    var elementClicked = e.target;
      if (elementClicked.className == 'btn--delete') {
        handlers.deleteTodo(buttonIndex);
      }
    });
  }
}

view.setupEventListeners();
