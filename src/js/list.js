const todos = (localStorage.todos) ? JSON.parse(localStorage.todos) : [];

const addItem = (item) => { todos.push(item); };
const removeItem = (i) => { todos.splice(i, 1); };
const toggleDone = (i) => { todos[i].done = !todos[i].done; };

const updateList = (callback, item) => {
  callback(item);
  localStorage.todos = JSON.stringify(todos);
};

export {
  todos, addItem, removeItem, toggleDone, updateList,
};
