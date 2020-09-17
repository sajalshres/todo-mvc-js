
export default class View {
    constructor() {
        // root element
        this.app = this.getElement('#app')

        // title element
        this.title = this.createElement('h1')
        this.title.textContext = 'Todos'

        // form with input and submit button
        this.input = this.createElement('input')
        this.input.type = 'text'
        this.input.placeholder = 'Add todo'
        this.input.name = 'todo'

        this.submitButton = this.createElement('button')
        this.submitButton.textContext = 'Submit'

        this.form = this.createElement('form')
        this.form.append(input, submitButton)

        // todo list
        this.todoList = this.createElement('ul', 'todo-list')

        // Append element, form and list to app
        this.app.append(this.title, this.form, this.todoList)
    }

    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)

        return element
    }

    getElement(selector) {
        const element = document.querySelector(selector)

        return element
    }

    get todoValue() {
        return this.input.value
    }

    resetInput() {
        this.input.value = ''
    }
}
