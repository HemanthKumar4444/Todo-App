import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import AddTask from "./components/AddTask";
import SearchItem from "./components/SearchItem";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
// import Counter from "./components/Counter";
function App() {
  let name = "Todo List";
  let [todoList, setToDoList] = useState([]);
  useEffect(() => {
    // let oldTask = localStorage.getItem("todos");
    // if (oldTask) {
    //   setToDoList(JSON.parse(oldTask));
    // }

    // other concept
    const URL = "http://localhost:9000/todolist";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setToDoList(data))
      .catch((err) => console.log(err))
      .finally(() => console.log("finally"));
  }, []);
  // let oldTask = localStorage.getItem("todos");
  // if (oldTask) {
  //   todoList = JSON.parse(oldTask);
  // }
  //event handling for check box

  let [newTask, setNewTask] = useState("");
  let [searchItem, setSearchItem] = useState("");
  let inputRef = useRef(null);
  let handleChange = (id) => {
    let newToDoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setToDoList(newToDoList);
    localStorage.setItem("todos", JSON.stringify(newToDoList));
  };
  let handleDelete = (id) => {
    let newToDoList = todoList.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(newToDoList));
    setToDoList(newToDoList);
  };
  let handlesubmit = (e) => {
    e.preventDefault();
    newTask = newTask.trim();
    newTask = newTask
      .split(" ")
      .filter((item) => item.trim() !== "")
      .join(" ");
    if (
      newTask &&
      todoList.filter(
        (todo) => todo.task.toLowerCase() === newTask.toLowerCase()
      ).length === 0
    ) {
      const id = todoList.length ? todoList[todoList.length - 1].id + 1 : 1;
      const newTodo = { id, task: newTask, completed: false };
      const newTodoList = [...todoList, newTodo];
      setToDoList(newTodoList);
      localStorage.setItem("todo", JSON.stringify(newTodoList));
      setNewTask("");
      inputRef.current.focus();
    }
  };
  return (
    <div className="App">
      {/* <Counter /> */}
      <Header title={name} />
      <AddTask
        newTask={newTask}
        setNewTask={setNewTask}
        handlesubmit={handlesubmit}
        inputRef={inputRef}
      />
      <SearchItem searchItem={searchItem} setSearchItem={setSearchItem} />
      <Content
        todoList={todoList.filter((todo) =>
          todo.task.toUpperCase().includes(searchItem.toUpperCase())
        )}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
      <Footer length={todoList.filter((todo) => !todo.completed).length} />
      {/* <h1 style={{ color: "white", backgroundColor: "red" }}>
        Welcome to React Website
      </h1>
      <h2>Good Morning {greet()}</h2>
      <h3>Today: {"" + new Date()}</h3>
      <h3>My Name:{person.firstName + " " + person.lastName}</h3> */}
    </div>
  );
}

export default App;
