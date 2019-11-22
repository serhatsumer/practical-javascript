// Version-1 Arrays
// Requirements
// It should have a place to todos
// It should have a way to display todos
// It should have a way to add new todos
// It should have a way to change a todos
// It should have a way to delete todos

// It should have a place to todo
var todos = ['item1','item2','item3']

// It should have a way to display todos
console.log('My todos: ', todos);   // expected --> My todos: item1, item2, item3

// It should have a way to add new todos
todos.push('new item'); 

// It should have a way to change a todo
todos[index] = 'new item';

// It should have a way to delete todo
todos.splice(index, Num);


// Version-2 Functions
// Requirements
// It should have a function to display todos
// It should have a function to add todos
// It should have a function to change a todos
// It should have a function to delete todos

// It should have a function to display todos
function displayTodos(){
    console.log('My todos: ',todos); // expected --> My todos: ['item1', 'item2', 'item3']
}
// It should have a function to add todos
function addTodo(param) {
    todos.push(param);
    displayTodos();   // expected --> My todos: ['item1', 'item2', 'item3','param']
}
// It should have a function to change a todos
function changeTodo(index, param){
    todos[index] = param;
    displayTodos();
}

// changeTodo(1, todo); expected --> My todos: ['item1', 'todo', 'item3','param']

// It should have a function to delete todos
function deleteTodo(index){
    todos.splice(index, 1);
    displayTodos();
}

// deleteTodo(3); expected --> My todos: ['item1', 'todo', 'item3']

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
// todoList.changeTodo(0, 'chanced'); expected --> My todos: [{todoText: 'chanced', completed: false }]


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

// Version-5 Loops of Logic
// Requirements
// displayTodos should show .todoText
// displayTodos should tell you if .todos is empty
// displayTodos should show .completed

// displayTodos should show .todoText
var todoList = {
    todos: [],
    displayTodos: function(){
        console.log("My todos:");
        for (var i=0; i<this.todos.legth; i++){
        console.log(this.todos[i].todoText);
        }
    },
}
// displayTodos should tell you if .todos is empty
var todoList = {
    todos: [],
    displayTodos: function(){
        if(this.todos.length === 0){
        console.log('your todo list is empty');
        } else {
        console.log('My todos:');
            for (var i=0; i<this.todos.legth; i++){
            console.log(this.todos[i].todoText);
            }
         }
    },
}
// displayTodos should show .completed
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
    }   
};
// todoList.displayTodos(); expected --> your todo list is empty
// todoList.addTodo('an item'); expected --> My todos: an item
// todoList.deleteTodo(0); expected --> undefined

// todoList.addTodo('first'); expected --> My todos: () first
// todoList.addTodo('second'); expected --> My todos: () first () second
// todoList.toggleCompleted(1); expected --> My todos: ()first (x)second
// todoList.toggleCompleted(0); expected --> My todos: (x)first ()second
    

// Version-6 Thinking in Code
// Requirements
// toggleAll: If everything is true, make everything false
// toggleAll: Otherwise, make everything true

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