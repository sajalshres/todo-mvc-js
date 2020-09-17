
export default class Model {
    constructor() {
        this.todos = [
            { id: 1, name: 'Buy groceries', complete: false },
            { id: 2, name: 'Pay bills', complete: false }
        ]
    }

    nextId() {
        let id = 1
        
        if (this.todos.length > 0) {
            id = this.todos[this.todo.length -1].id + 1
        }

        return id
    }

    create(todoName) {
        const todo = {
            id: this.nextId(),
            name: todoName,
            complete: false
        }

        this.todos.push(todo)
    }

    update(id, todoName) {
        this.todos = this.todos.map( todo => {
            if (todo.id === id) {
                return {
                    id: todo.id,
                    name: todoName,
                    complete: todo.complete
                }
            }
            return todo
        })
    }

    remove(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    toggleComplete(id) {
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                return {
                    id: todo.id,
                    name: todo.name,
                    complete: !todo.complete
                }
            }
            return todo
        })
    }
}
