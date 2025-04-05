import React, { useState, useContext } from "react";
import { FaEdit } from "react-icons/fa";
import TaskContext from "../context/Taskcontext"; // Import Context

function Todolist() {
  const { tasks, addTask, deleteTask, editTask, moveTaskUp, moveTaskDown } =
    useContext(TaskContext); // Access Context API

  const [newTask, setNewTask] = useState("");

  const [editIndex, seteditIndex] = useState(null); //This stores the index of the task which is currently being edited.

  const [editedTask, seteditedTask] = useState(""); //This stores the value of the task which is currently being edited.

  const handleinputchange = (event) => {
    setNewTask(event.target.value);
  };

  // 🦁Adding Add button through context api
  const handleAddTask = () => {
    addTask(newTask);
    setNewTask("");
  };

  // 🦁Adding Edit button through context api
  const handleEditTask = (index) => {
    seteditIndex(index);
    seteditedTask(tasks[index]);
  };

  // 🦁 Adding the save button through Context api
  const handleSaveTask = () => {
    editTask(editIndex, editedTask);
    seteditIndex(null);
    seteditedTask("");
  };

  return (
    <>
      <div className="Image bg-[url(https://images.unsplash.com/photo-1719581886973-30aa96abd38f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  h-[20%] w-full bg-cyan-300 flex justify-center items-center rounded-lg">
        <h1 className="text-8xl font-bold text-white">TODO APP</h1>
      </div>

      <div className="Discover flex items-center justify-center gap-20 m-8">
        <div className="bg-lime-600 rounded-md px-8 py-2 text-white hover:bg-lime-700 hover:shadow-xl hover:shadow-lime-600 transition-smooth duration-500 cursor-pointer">
          Home
        </div>
        <div className="bg-lime-600 rounded-md px-6 py-2 text-white hover:bg-lime-700 hover:shadow-xl hover:shadow-lime-600 transition-smooth duration-500 cursor-pointer">
          Your Tasks
        </div>
      </div>

      <div className="Nav px-80 flex gap-5  justify-center pt-5 ">
        <input
          type="text"
          className="Input-field border-2 w-1/2 p-2 rounded-lg hover:scale-105 transition-smooth duration-500"
          style={{ fontSize: "20px" }}
          placeholder="Enter Your Task ..."
          value={newTask}
          onChange={handleinputchange}
        />

        <button
          className="bg-lime-500 rounded-md px-4 py-2 hover:bg-lime-700 hover:text-white hover:shadow-xl hover:shadow-lime-600 transition-smooth duration-500 cursor-pointer"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>

      <div className="Task-List flex items-center justify-center pt-10">
        <ol>
          {tasks.map((task, index) => (
            <li
              key={index}
              className="Listed-Tasks flex items-center justify-between bg-gray-200 px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-full mt-3 hover:scale-105"
            >
              {/* 👇 Show input when editing, otherwise show task */}
              {editIndex === index ? (
                <input
                  type="text"
                  className="Input-field border-2 w-1/2 p-2 rounded-lg hover:scale-105 transition-smooth duration-500"
                  style={{ fontSize: "20px" }}
                  value={editedTask}
                  onChange={(e) => seteditedTask(e.target.value)}
                />
              ) : (
                <span className="Task-List text-lg font-medium flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                  {task}
                </span>
              )}

              {/* 👇 Show Save button when editing, otherwise show Edit button */}

              {editIndex === index ? (
                <button
                  className="bg-green-500 rounded-md px-6 py-2 hover:bg-green-700 hover:text-white transition duration-300 cursor-pointer ml-5"
                  onClick={handleSaveTask}
                >
                  💾
                </button>
              ) : (
                <button
                  className="bg-sky-200 rounded-md px-8 py-3 hover:bg-sky-500 hover:text-white hover:shadow-xl hover:shadow-sky-300 transition-smooth duration-500 cursor-pointer ml-5"
                  onClick={() => handleEditTask(index)}
                >
                  <FaEdit />
                </button>
              )}

              <button
                className="bg-red-300 rounded-md px-8 py-2 hover:bg-red-700 hover:text-white hover:shadow-xl hover:shadow-red-300 transition-smooth duration-500 cursor-pointer ml-5"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>

              <button
                className="Taskup bg-blue-500 rounded-md px-8 py-2 hover:bg-lime-500 hover:text-white hover:shadow-xl hover:shadow-green-300 transition-smooth duration-500 cursor-pointer ml-5"
                onClick={() => moveTaskUp(index)}
              >
                ⬆
              </button>

              <button
                className="Taskdown bg-blue-500 rounded-md px-8 py-2 hover:bg-red-700 hover:text-white hover:shadow-xl hover:shadow-red-300 transition-smooth duration-500 cursor-pointer ml-5"
                onClick={() => moveTaskDown(index)}
              >
                ⬇️
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default Todolist;
