import axios from "axios";

const urlBase = "http://localhost:3001/todos";
async function getTodos() {
  try {
    const response = await axios.get(urlBase);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function addTodo(value: string) {
  try {
    const response = await axios.post(urlBase, {
      name: value,
      completed: false,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function delTodo(id: string) {
  try {
    console.log(id);
    const response = await axios.delete(`http://localhost:3001/todos/${id}`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function statusTodo(value: any, completed: boolean) {
  try {
    const response = await axios.put(
      `http://localhost:3001/todos/${value.id}`,
      { ...value, completed: !completed }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function editTodo(value: any, data: string) {
  try {
    console.log(value.id);
    const response = await axios.put(
      `http://localhost:3001/todos/${value.id}`,
      { id: value.id, name: data, completed: value.completed }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function clearCompleted() {
  try {
    const response = await axios.get(urlBase);
    const data = response.data;
    for (const todo of data) {
      if (todo.completed === true) {
        await delTodo(todo.id);
      }
    }
  } catch (error) {
    console.error(error);
  }
}

export { getTodos, addTodo, delTodo, statusTodo, editTodo, clearCompleted };
