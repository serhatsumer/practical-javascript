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
