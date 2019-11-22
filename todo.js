// Version-4 Booleans
// Requirements
// todoList.addTodo should add Objects
// todoList.changeTodo should change the todoText property
// todoList.toggleCompleted should change the completed property

// todoList.addTodo should add Objects
var todoList = {
    todos: [],
    displayTodos: function(){
        console.log("My todos:", this.todos);
    },
    addTodo: function(param){
        this.todos.push({
            todoText: param,
            completed: false
        });
        this.displayTodos();
    },
}
// todoList.addTodo('this is an object'); expected --> My todos: [{todoText: 'this is an object', completed: false }]


// todoList.changeTodo should change the todoText property
var todoList = {
    todos: [],
    displayTodos: function(){
        console.log("My todos:", this.todos);
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
}
// todoList.changeTodo(0, 'chanced');; expected --> My todos: [{todoText: 'chanced', completed: false }]


// todoList.toggleCompleted should change the completed property
var todoList = {
    todos: [],
    displayTodos: function(){
        console.log("My todos:", this.todos);
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
    }
};