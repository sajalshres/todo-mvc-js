let todos = [
  { id: 1, name: 'Buy groceries', complete: false },
  { id: 2, name: 'Pay bills', complete: false },
];

uncomplete = todos.filter((todo) => todo.complete !== true);

new_todos = todos.map((todo) =>
  todo.id == 2 ? { id: todo.id, name: todo.name, complete: true } : todo
);

console.log(uncomplete);
console.log({ new_todos });
