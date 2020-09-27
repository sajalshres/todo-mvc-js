class Model {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  }

  bindTodoListChanged(callback) {
    this.onTodoListChanged = callback;
  }

  save(todos) {
    this.onTodoListChanged(todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  create(todoName) {
    const todo = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      name: todoName,
      status: false,
    };

    this.todos.push(todo);

    this.save(this.todos);
  }

  update(id, todoName) {
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? { id: todo.id, name: todoName, status: todo.status }
        : todo
    );

    this.save(this.todos);
  }

  remove(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);

    this.save(this.todos);
  }

  toggleStatus(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? { id: todo.id, name: todo.name, status: !todo.status }
        : todo
    );

    this.save(this.todos);
  }
}

export default Model;
