// Version 11 - Destroy all for loops
// Requirements
// todoList.toggleAll should use forEach
// There should be a delete button for each todo

var todoList = {
    todos: [],
    addTodo: function(todoText){
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    changeTodo: function(position, todoText){
        this.todos[position].todoText = todoText;
    },
    deleteTodo: function(position){
        this.todos.splice(position, 1);
    },
    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleAll: function (){
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        this.todos.forEach(function(todo){
            if ( todo.completed === true){
                completedTodos++;
            }
        });  
        this.todos.forEach(function(todo){      // if everything is true, make everything false
            if (completedTodos === totalTodos){
                todo.completed = false;
            } else {                           // Otherwise, make everything true 
                todo.completed = true;
              }
        });
    }     
};

var handlers = {
    addTodo: function() {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
            todoList.addTodo(addTodoTextInput.value);
            addTodoTextInput.value = "";
            view.displayTodos();
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
            todoList.changeTodo(
                changeTodoPositionInput.valueAsNumber,
                changeTodoTextInput.value
            );
        changeTodoPositionInput.value = "";
        changeTodoTextInput.value = "";
        view.displayTodos();
    },
    deleteTodo: function(position){
        todoList.deleteTodo(position);
        view.displayTodos();
    },
    toggleCompleted: function() {
        var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = "";
        view.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
    }
};
var view = {
    displayTodos: function() {
        var todosUl = document.querySelector("ul");
        todosUl.innerHTML = "";
        
        todoList.todos.forEach(function(todo, position){
            var todoLi = document.createElement("li");
            var todoTextWithCompletion = "";
            if (todo.completed === true) {
                todoTextWithCompletion = "(x)" + todo.todoText;
            } else {
                todoTextWithCompletion = "( )" + todo.todoText;
              }
            todoLi.id = position;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }, this) // this refers to view object ==> forEach(callbak, this)
    },
    createDeleteButton: function (){
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
            return deleteButton;
    },
    setUpEventListeners: function(){
        var todoUl = document.querySelector('ul');
        todoUl.addEventListener('click', function(event){
            // get the element that was clicked on
            var elementClicked = event.target;
            // check if the element is a click button
                if (elementClicked.className === 'deleteButton'){
                    handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
                }
        });
    }
} 
      view.setUpEventListeners();
      
