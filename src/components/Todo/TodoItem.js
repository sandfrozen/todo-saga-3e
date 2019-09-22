import React from "react"
import { connect } from "react-redux"
import { changeTodo, removeTodo } from "../../actions/todo"
import styled from "styled-components"

const TodoTitle = styled.span`
  color: ${props => (props.completed ? "green" : "red")};
  text-decoration: ${props => (props.completed ? "line-through" : "none")};
`

let TodoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div key={todo.id} onClick={() => changeTodo(todo)}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => changeTodo(todo)}
      />
      <TodoTitle completed={todo.completed}> {todo.title} </TodoTitle>
      {todo.completed && (
        <button onClick={() => removeTodo(todo.id)}> remove</button>
      )}
    </div>
  )
}

const mapDispatchToProps = {
  changeTodo: changeTodo,
  removeTodo: removeTodo
}

TodoItem = connect(
  null,
  mapDispatchToProps
)(TodoItem)

export default TodoItem
