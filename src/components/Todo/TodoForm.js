import React, { useState } from "react"
import { connect } from "react-redux"
import { addTodo, getTodos } from "../../actions/todo"

let TodoForm = ({ count, loading, addTodo, getTodos }) => {
  const [title, setTitle] = useState("")

  function onClickAdd() {
    if (title !== "") {
      addTodo(title)
      setTitle("")
    } else {
      window.alert("Title is empty!")
    }
  }

  if (count < 10) {
    return (
      <div>
        <input onChange={e => setTitle(e.target.value)} value={title} />
        <button disabled={loading} onClick={onClickAdd}>
          add
        </button>
        <button onClick={getTodos}>get todos</button>
      </div>
    )
  } else {
    return <div>You have 10 TODOs! Remove to add new.</div>
  }
}

const mapStateToProps = state => ({
  count: state.todo.todos.length,
  loading: state.todo.loading
})

const mapDispatchToProps = {
  addTodo: addTodo,
  getTodos: getTodos
}

TodoForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm)

export default TodoForm
