export const fetchTodosApi = fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => json)
