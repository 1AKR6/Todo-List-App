import React, { useState, useContext } from "react";
import { FaEdit } from "react-icons/fa";
import TaskContext from "../context/Taskcontext"; // ✅ Importing the context to get shared state and methods

function Todolist() {
  // ✅ Destructuring functions and data from the context
  const {
    tasks,               // All tasks in the list
    addTask,             // Function to add new task
    deleteTask,          // Function to delete a task
    editTask,            // Function to edit a task
    moveTaskUp,          // Move task up in the list
    moveTaskDown,        // Move task down in the list
    toggleTaskCompletion // ✅ Toggle the checkbox (task completed or not)
  } = useContext(TaskContext); // ✅ Using context to access global state

  // ✅ Local state for new task input
  const [newTask, setNewTask] = useState("");

  // ✅ State for editing
  const [editIndex, seteditIndex] = useState(null); // To know which task is being edited
  const [editedTask, seteditedTask] = useState(""); // Store updated task text

  // ✅ Function to update state as the user types in the input box
  const handleinputchange = (event) => {
    setNewTask(event.target.value);
  };

  // ✅ Add a new task using context method
  const handleAddTask = () => {
    addTask(newTask);
    setNewTask(""); // Clear input field after adding
  };

  // ✅ Prepare to edit task (show input with current text)
  const handleEditTask = (index) => {
    seteditIndex(index);
    seteditedTask(tasks[index].text); // ✅ Pull the current task text into input field
  };

  // ✅ Save the edited task using context method
  const handleSaveTask = () => {
    editTask(editIndex, editedTask);
    seteditIndex(null);     // Exit edit mode
    seteditedTask("");      // Clear editedTask
  };

  // ✅ Move a task up
  const handleMoveUp = (index) => {
    seteditIndex(null);     // Cancel editing before move
    seteditedTask("");
    moveTaskUp(index);
  };

  // ✅ Move a task down
  const handleMoveDown = (index) => {
    seteditIndex(null);
    seteditedTask("");
    moveTaskDown(index);
  };

  return (
    <>
      {/* ✅ Header Section with Background Image */}
      <div className="Image bg-[url(https://images.unsplash.com/photo-1719581886973-30aa96abd38f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  h-[20%] w-full bg-cyan-300 flex justify-center items-center rounded-lg">
        <h1 className="text-8xl font-bold text-white">TODO APP</h1>
      </div>

      {/* ✅ Navigation-like buttons (not functional yet) */}
      <div className="Discover flex items-center justify-center gap-20 m-8">
        <div className="bg-lime-600 rounded-md px-8 py-2 text-white hover:bg-lime-700 hover:shadow-xl hover:shadow-lime-600 transition-smooth duration-500 cursor-pointer">
          Home
        </div>
        <div className="bg-lime-600 rounded-md px-6 py-2 text-white hover:bg-lime-700 hover:shadow-xl hover:shadow-lime-600 transition-smooth duration-500 cursor-pointer">
          Your Tasks
        </div>
      </div>

      {/* ✅ Input field + Add Task button */}
      <div className="Nav px-80 flex gap-5 justify-center pt-5 ">
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

      {/* ✅ Task List with features */}
      <div className="Task-List flex items-center justify-center pt-10">
        <ol>
          {tasks.map((task, index) => (
            <li
              key={index}
              className="Listed-Tasks flex items-center justify-between bg-gray-200 px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-full mt-3 hover:scale-105"
            >
              {/* ✅ Checkbox to mark task complete/incomplete */}
              <input
                type="checkbox"
                className="mr-4 h-6 w-6 cursor-pointer hover:scale-110 transition-smooth duration-500"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
              />

              {/* ✅ Show input if editing, else show task */}
              {editIndex === index ? (
                <input
                  type="text"
                  className="Input-field border-2 w-1/2 p-2 rounded-lg hover:scale-105 transition-smooth duration-500"
                  style={{ fontSize: "20px" }}
                  value={editedTask}
                  onChange={(e) => seteditedTask(e.target.value)}
                />
              ) : (
                <span
                  className={`Task-List text-lg font-medium flex-1 overflow-hidden text-ellipsis whitespace-nowrap ${
                    task.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {task.text}
                </span>
              )}

              {/* ✅ Save button in edit mode */}
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

              {/* ✅ Delete button */}
              <button
                className="bg-red-300 rounded-md px-8 py-2 hover:bg-red-700 hover:text-white hover:shadow-xl hover:shadow-red-300 transition-smooth duration-500 cursor-pointer ml-5"
                onClick={() => {
                  seteditIndex(null);  // Exit edit mode before deleting
                  seteditedTask("");
                  deleteTask(index);
                }}
              >
                Delete
              </button>

              {/* ✅ Move up button */}
              <button
                className="Taskup bg-blue-500 rounded-md px-8 py-2 hover:bg-lime-500 hover:text-white hover:shadow-xl hover:shadow-green-300 transition-smooth duration-500 cursor-pointer ml-5"
                onClick={() => handleMoveUp(index)}
              >
                ⬆
              </button>

              {/* ✅ Move down button */}
              <button
                className="Taskdown bg-blue-500 rounded-md px-8 py-2 hover:bg-red-700 hover:text-white hover:shadow-xl hover:shadow-red-300 transition-smooth duration-500 cursor-pointer ml-5"
                onClick={() => handleMoveDown(index)}
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

