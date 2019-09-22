import React from "react"
import TodoItem from "./TodoItem"
import { connect } from "react-redux"

let TodoList = ({ todos }) => (
  <div>
    {todos.map(t => (
      <TodoItem key={t.id} todo={t} />
    ))}
  </div>
)

const mapStateToProps = state => ({
  todos: state.todo.todos
})

TodoList = connect(
  mapStateToProps,
  null
)(TodoList)

export default TodoList
