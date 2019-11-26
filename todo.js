// Version-7  HTML and the DOM
// Requirements
// There should be a 'Display todos'button and a 'Toggle all' button in the app.
// Clicking 'Display todos' should run todoList.displayTodos
// Clicking 'Toggle all' should run todoList.toggleAll

var todoList = {
    todos: [],
    displayTodos: function(){
        if(this.todos.length === 0){
        console.log('your todo list is empty');
        } else {
        console.log('My todos:');
            for (var i=0; i<this.todos.legth; i++){
                if (this.todos[i].completed === true){
                    console.log('(x)', this.todos[i].todoText);
                } else {
                    console.log('( )', this.todos[i].todoText);
                  }
            }
         }
    },
    addTodo: function(todoText){
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(index,param){
        this.todos[index].todoText = param;
        this.displayTodos();
    },
    deleteTodo: function(index){
        this.todos.splice(index, 1);
        this.displayTodos();
    },
    toggleCompleted: function(index){
        var todo = this.todos[index];
        todo.completed = !todo.completed;
        this.displayTodos();
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
            this.displayTodos();
        }     
};

let displayTodosButton = document.getElementById('displayTodosButton');
let toggleAllButton = document.getElementById('toggleAllButton');

displayTodosButton.addEventListener('click', function(){
    todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function(){
    todoList.toggleAll();
});


