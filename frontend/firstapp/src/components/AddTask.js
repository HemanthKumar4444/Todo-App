import React from "react";
import { MdOutlineAddBox } from "react-icons/md";
const AddTask = ({ newTask, setNewTask, handlesubmit ,inputRef}) => {
  return (
    <form className="addForm" onSubmit={handlesubmit}>
      <label htmlFor="">Enter Task</label>
      <input
        type="text"
        ref={inputRef}
        autoFocus
        placeholder="Enter Task"
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
      />
      <button type="submit">
        <MdOutlineAddBox role="button" tabIndex="0" />
      </button>
    </form>
  );
};

export default AddTask;
