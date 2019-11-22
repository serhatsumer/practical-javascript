// Version-3 Objects
// Requirements
// It should store the todos array on an object
// It should have a displayTodos method
// It should have an addTodo method
// It should have a changeTodo method
// It should have a deleteTodo method

// It should store the todos array on an object
var todoList = {
    todos = ['item1','item2','item3'] 
}

// It should have a displayTodos method
var todoList = {
    todos:['item1','item2','item3'],
    displayTodos: function(){
        console.log('My Todos', this.todos);
    }
};
// todoList.displayTodos(); expected --> My todos: ['item1', 'item2', 'item3']

// It should have an addTodo method
var todoList = {
    todos:['item1','item2','item3'],
    displayTodos: function(){
        console.log('My Todos', this.todos);
    },
    addTodo: function(param){
        this.todos.push(param);
        this.displayTodos();
        }
};
// todoList.addTodo('new item'); expected --> My todos: ['item1', 'item2', 'item3','new item']

// It should have a changeTodo method
var todoList = {
    todos:['item1','item2','item3'],
    displayTodos: function(){
        console.log('My Todos', this.todos);
    },
    addTodo: function(param){
        this.todos.push(param);
        this.displayTodos();
        },
    changeTodo: function(index,param){
        this.todos[index] = param;
        this.displayTodos();
        },  
};
// todoList.changeTodo(1,'new item'); expected --> My todos: ['item1', 'new item', 'item3']

// It should have a deleteTodo method
var todoList = {
    todos:['item1','item2','item3'],
    displayTodos: function(){
        console.log('My Todos', this.todos);
    },
    addTodo: function(param){
        this.todos.push(param);
        this.displayTodos();
        },
    changeTodo: function(index,param){
        this.todos[index] = param;
        this.displayTodos();
        },
    deleteTodo: function(index){
        this.todos.splice(index, 1);
        this.displayTodos();
        }      
};
// todoList.deleteTodo(1); expected --> My todos: ['item1','item3']
