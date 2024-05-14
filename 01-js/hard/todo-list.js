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
  constructor(todo) {
    this.todo = []
  }
  add(todo) {
    this.todo.push(todo)
    // console.log(this.todo)
  }
  remove(indexOfTodo) {
      this.todo.splice(indexOfTodo, 1);
    // console.log(this.todo);
  }
  update(index, updatedTodo) {
    if(index < this.todo.length) {
      this.todo[index] = updatedTodo;
    }
    console.log(this.todo)
  }
  getAll() {
    console.log(this.todo)
    return this.todo;
  }
  get(indexofTodo) {
    return this.todo[indexofTodo] || null
  }
  clear() {
    this.todo = []
  }
}

module.exports = Todo;
