class View {
  constructor() {
    // root element
    this.app = this.getElement('#app');

    // title element
    this.title = this.createElement('h1');
    this.title.textContext = 'Todos';

    // form with input and submit button
    this.input = this.createElement('input');
    this.input.type = 'text';
    this.input.placeholder = 'Add todo';
    this.input.name = 'todo';

    this.submitButton = this.createElement('button');
    this.submitButton.textContext = 'Submit';

    this.form = this.createElement('form');
    this.form.append(this.input, this.submitButton);

    // todo list
    this.todoList = this.createElement('ul', 'todo-list');

    // Append element, form and list to app
    this.app.append(this.title, this.form, this.todoList);
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);

    return element;
  }

  getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }

  get todoValue() {
    return this.input.value;
  }

  resetInput() {
    this.input.value = '';
  }

  render(todos) {
    // delete all nodes
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }

    // display default message
    if (todos.length === 0) {
      const paragraph = this.createElement('p');
      paragraph.textContext = 'Nothing to do! Please add a task.';
      this.todoList.append(paragraph);
    } else {
      // create todo nodes
      todos.forEach((todo) => {
        const list = this.createElement('li');
        list.id = todo.id;

        const checkBox = this.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.checked = todo.complete;

        const span = this.createElement('span');
        span.contentEditable = true;
        span.classList.add('editable');

        if (todo.complete) {
          const strike = this.createElement('s');
          strike.textContext = todo.name;
          span.append(strike);
        } else {
          span.textContext = todo.name;
        }

        const deleteButton = this.createElement('button', 'delete');
        deleteButton.textContext = 'Delete';
        list.append(checkBox, span, deleteButton);

        // Append nodes
        this.todoList.append(list);
      });
    }

    // log
    console.log(todos);
  }
}

export default View;
