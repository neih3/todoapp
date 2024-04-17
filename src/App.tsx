import React from "react";
import "./App.css";
import InputComponent from "./components/InputComponent/InputComponent";
import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";
import { getTodos, delTodo, addTodo, editTodo, clearCompleted } from "./getAPI";
import Footer from "./components/Footer/Footer";
import { BsEmojiLaughing } from "react-icons/bs";
import AlertComponent from "./components/AlertComponent/AlertComponent";
export const AlertContext = React.createContext<any>(null);
function App() {
  const [jobs, setJobs] = React.useState([]);
  const [alert, setAlert] = React.useState({
    content: "",
    status: false,
  });
  const getAllTodo = async () => {
    const res = await getTodos();
    setJobs(res);
  };
  React.useEffect(() => {
    getAllTodo();
    const myTimeout = setInterval(() => {
      setAlert({
        content: "",
        status: false,
      });
    }, 3000);
    return () => {
      clearInterval(myTimeout);
    };
  }, [alert]);

  const deleteTodo = async (id: string) => {
    await delTodo(id);
    getAllTodo();
  };
  const addATodo = async (value: string) => {
    await addTodo(value);
    // getAllTodo();
  };
  const editATodo = async (value: any, data: string) => {
    await editTodo(value, data);
    getAllTodo();
  };
  const clearCompletedTodo = async () => {
    await clearCompleted();
    getAllTodo();
  };
  console.log(jobs);

  return (
    <AlertContext.Provider value={setAlert}>
      <div className="App">
        <Header></Header>

        <div className="App_listTodo">
          <ul>
            {jobs.length == 0 ? (
              <div style={{ fontSize: "56px" }}>
                <BsEmojiLaughing />{" "}
              </div>
            ) : (
              jobs.map((job: any) => {
                return (
                  <>
                    <li key={job.id}>
                      <Todo
                        value={job}
                        deleteTodo={deleteTodo}
                        editATodo={editATodo}
                      ></Todo>
                    </li>
                  </>
                );
              })
            )}
          </ul>
        </div>

        <div style={{ flex: 1 }}></div>
        <div>
          {jobs.length !== 0 && (
            <Footer clearCompletedTodo={clearCompletedTodo}></Footer>
          )}

          <InputComponent addATodo={addATodo}></InputComponent>
        </div>
      </div>
      {alert.status && <AlertComponent text={alert.content}></AlertComponent>}
    </AlertContext.Provider>
  );
}
// //  json-server --watch db.json --port 3001
export default App;
