/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
      this.todos = [];
  }

  // Adds a todo to the list
  add(todo) {
      this.todos.push(todo);
  }

  // Removes a todo by index
  remove(index) {
      if (index >= 0 && index < this.todos.length) {
          this.todos.splice(index, 1);
      }
  }

  // Updates a todo at a specific index
  update(index, updatedTodo) {
      if (index >= 0 && index < this.todos.length) {
          this.todos[index] = updatedTodo;
      }
  }

  // Returns all todos
  getAll() {
      return this.todos;
  }

  // Returns a todo at a specific index
  get(index) {
      if (index >= 0 && index < this.todos.length) {
          return this.todos[index];
      }
      return null; // or undefined, depending on how you want to handle invalid indexes
  }

  // Clears all todos
  clear() {
      this.todos = [];
  }
}


module.exports = Todo;
