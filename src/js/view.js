class View {
  constructor() {
    // root element
    this.app = this.getElement('#app');

    // build form
    this.form = this.createElement('form', 'todo-form');
    this.input = this.createElement('input', 'todo-form__input');
    this.input.type = 'text';
    this.input.placeholder = 'Add todo';
    this.input.name = 'todo';
    this.submitButton = this.createElement('button', 'todo-button');
    this.submitButton.textContent = 'Add';
    this.form.append(this.input, this.submitButton);

    // build header
    this.title = this.createElement('h1', 'todo-title');
    this.title.textContent = 'Todos';

    // build todo list
    this.todoList = this.createElement('ul', 'todo-list');

    // append to root ui element
    this.app.append(this.title, this.form, this.todoList);

    this.temporaryTodoName = '';
    this.initLocalListeners();
  }

  get todoText() {
    return this.input.value;
  }

  resetInput() {
    this.input.value = '';
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

  render(todos) {
    // Delete all nodes
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }

    // Show default message
    if (todos.length === 0) {
      const p = this.createElement('p');
      p.textContent = 'Nothing to do! Good Job 🏆';
      this.todoList.append(p);
    } else {
      // Create nodes
      todos.forEach((todo) => {
        const li = this.createElement('li', 'todo-item');
        li.id = todo.id;

        const checkbox = this.createElement('input', 'todo-item__checkbox');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.status;

        const span = this.createElement('span', 'todo-item__text');
        span.contentEditable = true;
        span.classList.add('editable');

        if (todo.status) {
          const strike = this.createElement('s');
          strike.textContent = todo.name;
          span.append(strike);
        } else {
          span.textContent = todo.name;
        }

        const deleteButton = this.createElement(
          'button',
          'todo-button--delete'
        );
        deleteButton.textContent = 'Delete';
        li.append(checkbox, span, deleteButton);

        // Append nodes
        this.todoList.append(li);
      });
    }
  }

  initLocalListeners() {
    this.todoList.addEventListener('input', (event) => {
      if (event.target.className === 'editable') {
        this.temporaryTodoName = event.target.innerText;
      }
    });
  }

  onAddTodo(handler) {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (this.todoText) {
        handler(this.todoText);
        this.resetInput();
      }
    });
  }

  onDeleteTodo(handler) {
    this.todoList.addEventListener('click', (event) => {
      if (event.target.className === 'todo-button--delete') {
        const id = parseInt(event.target.parentElement.id);

        handler(id);
      }
    });
  }

  onEditTodo(handler) {
    this.todoList.addEventListener('focusout', (event) => {
      if (this.temporaryTodoName) {
        const id = parseInt(event.target.parentElement.id);

        handler(id, this.temporaryTodoName);
        this.temporaryTodoName = '';
      }
    });
  }

  onToggleTodo(handler) {
    this.todoList.addEventListener('change', (event) => {
      if (event.target.type === 'checkbox') {
        const id = parseInt(event.target.parentElement.id);

        handler(id);
      }
    });
  }
}

export default View;
