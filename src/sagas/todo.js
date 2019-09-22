import { put, takeEvery, takeLatest, all } from "redux-saga/effects";

function* fetchTodos() {
  const todos = yield fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  )
    .then(response => response.json())
    .then(json => json);

  yield put({
    type: "TODOS_RECIEVED",
    todos: todos || []
  });
}

function* getTodos() {
  yield takeLatest("GET_TODOS", fetchTodos);
}

function* postTodo({ title }) {
  const todo = yield fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: title,
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(json => json);

  yield put({
    type: "TODO_ADDED",
    todo: todo
  });
}

function* addTodo() {
  yield takeEvery("ADD_TODO", postTodo);
}

function* putTodo({ todo }) {
  const changedTodo = yield fetch(
    `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
    {
      method: "PUT",
      body: JSON.stringify({
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
        userId: todo.userId
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }
  )
    .then(response => response.json())
    .then(json => json);

  yield put({
    type: "TODO_CHANGED",
    todo: changedTodo
  });
}

function* changeTodo() {
  yield takeEvery("CHANGE_TODO", putTodo);
}

function* deleteTodo({ id }) {
  yield fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: "DELETE"
  });

  yield put({
    type: "TODO_REMOVED",
    id: id
  });
}

function* removeTodo() {
  yield takeEvery("REMOVE_TODO", deleteTodo);
}

export default function* rootSaga() {
  yield all([getTodos(), addTodo(), changeTodo(), removeTodo()]);
}
