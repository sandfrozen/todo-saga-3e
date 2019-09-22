const initState = { todos: [], loading: false }
let myId = 102
const todo = (state = initState, action) => {
  switch (action.type) {
    case "GET_TODOS":
    case "ADD_TODO":
    case "CHANGE_TODO":
    case "REMOVE_TODO":
      return { todos: state.todos, loading: true }
    case "TODOS_RECIEVED":
      return { todos: action.todos, loading: false }
    case "TODO_ADDED":
      const { todo } = action
      return {
        todos: [...state.todos, { ...todo, id: myId++ }],
        loading: false
      }
    case "TODO_CHANGED":
      const todo2 = action.todo
      return {
        todos: state.todos.map(t => (t.id === todo2.id ? todo2 : t)),
        loading: false
      }
    case "TODO_REMOVED":
      const { id } = action
      return {
        todos: state.todos.filter(t => t.id !== id),
        loading: false
      }
    default:
      return state
  }
}

export default todo
