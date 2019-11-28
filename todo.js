// Version 10 - Click to delete
// Requirements
// There should be a way to create delete buttons
// There should be a delete button for each todo
// Each li should have an id that has the todo position
// Delete buttons should have access to the todo id 
// Clicking delete should update todoList.todos and the DOM

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
        let totalTodos = this.todos.length;
        let completedTodos = 0;
        for (let i=0 ; i<totalTodos ; i++){
            if (this.todos[i].completed === true){
            completedTodos++;
            }
        } 
            if (completedTodos === totalTodos){
                for (let i=0 ; i<totalTodos ; i++){
                this.todos[i].completed = false;
                }                                   // if everything is true, make everything false

            } else {
                for (let i=0 ; i<totalTodos ; i++){
              this.todos[i].completed = true;  
                }                                   // Otherwise, make everything true
            }
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
    deleteTodos: function(position){
        todoList.deleteTodos(position);
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
        for (var i = 0; i < todoList.todos.length; i++) {
            var todoLi = document.createElement("li");
            var todo = todoList.todos[i];
            var todoTextWithCompletion = "";
            if (todo.completed === true) {
                todoTextWithCompletion = "(x)" + todo.todoText;
            } else {
                todoTextWithCompletion = "( )" + todo.todoText;
            }
            todoLi.id = i;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }
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
                    handler.deleteTodos(parseInt(elementClicked.parentNode.id));
                }
        });
    }
} 
      view.setUpEventListeners();
      
