class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindTodoListChanged((todos) => {
      this.view.render(todos);
    });

    this.view.onAddTodo((todoName) => {
      this.model.create(todoName);
    });

    this.view.onEditTodo((id, todoName) => {
      this.model.update(id, todoName);
    });

    this.view.onDeleteTodo((id) => {
      this.model.remove(id);
    });

    this.view.onToggleTodo((id) => {
      this.model.toggleStatus(id);
    });

    // render initial todos on load
    this.view.render(this.model.todos);
  }
}

export default Controller;
