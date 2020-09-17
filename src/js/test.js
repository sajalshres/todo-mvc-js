let todos = [
    { id: 1, name: 'Buy groceries', complete: false },
    { id: 2, name: 'Pay bills', complete: false }
]

filtered = todos.filter(todo => todo.id !== 2)

console.log(filtered)