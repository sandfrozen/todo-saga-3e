export const getTodos = () => ({
  type: "GET_TODOS"
})

export const todosRecieved = todos => ({
  type: "TODOS_RECIEVED",
  todos
})

export const addTodo = title => ({
  type: "ADD_TODO",
  title
})

export const todoAdded = todo => ({
  type: "TODO_ADDED",
  todo
})

export const changeTodo = todo => ({
  type: "CHANGE_TODO",
  todo
})

export const todoChanged = todo => ({
  type: "TODO_CHANGED",
  todo
})

export const removeTodo = id => ({
  type: "REMOVE_TODO",
  id
})

export const toodRemoved = id => ({
  type: "TODO_REMOVED",
  id
})
