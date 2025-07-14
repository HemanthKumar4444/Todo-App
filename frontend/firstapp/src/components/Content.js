import React from "react";
import { FaTrashCan } from "react-icons/fa6";
const Content = ({ todoList, handleChange, handleDelete }) => {
  //   let [todoList, setToDoList] = useState([
  //     {
  //       id: 1,
  //       task: "Learn React",
  //       completed: false,
  //     },
  //     {
  //       id: 2,
  //       task: "Learn Vue",
  //       completed: false,
  //     },
  //     {
  //       id: 3,
  //       task: "Learn Angular",
  //       completed: false,
  //     },
  //     {
  //       id: 4,
  //       task: "Learn Node",
  //       completed: true,
  //     },
  //   ]);

  //   let oldTask = localStorage.getItem("todos");
  //   if (oldTask) {
  //     todoList = JSON.parse(oldTask);
  //   }
  //   //event handling for check box
  //   let handleChange = (id) => {
  //     let newToDoList = todoList.map((todo) =>
  //       todo.id === id ? { ...todo, completed: !todo.completed } : todo
  //     );
  //     setToDoList(newToDoList);
  //     localStorage.setItem("todos", JSON.stringify(newToDoList));
  //   };
  //   let handleDelete = (id) => {
  //     let newToDoList = todoList.filter((todo) => todo.id !== id);
  //     localStorage.setItem("todos", JSON.stringify(newToDoList));
  //     setToDoList(newToDoList);
  //   };

  return (
    <main>
      {/* {alert(typeof todoList)} */}
      {todoList && todoList.length > 0 ? (
        <ul>
          {todoList &&
            todoList.map((todo) => (
              <li className="item" key={todo.id}>
                <input
                  type="checkbox"
                  onChange={() => handleChange(todo.id)}
                  checked={todo.completed}
                />
                <label
                  htmlFor=""
                  onDoubleClick={() => handleChange(todo.id)}
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.task}
                </label>
                <FaTrashCan
                  role="button"
                  tabIndex="0"
                  onClick={() => handleDelete(todo.id)}
                />
              </li>
            ))}
        </ul>
      ) : (
        <h1>Nothing to do</h1>
      )}
    </main>
  );
};

export default Content;
