import React from "react"
import TodoForm from "./Todo/TodoForm"
import TodoList from "./Todo/TodoList"
import Loading from "./Todo/Loading"

const App = () => (
  <div>
    <TodoForm />
    <TodoList />
    <Loading />
  </div>
)

export default App
