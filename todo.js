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

