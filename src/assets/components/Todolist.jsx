import { Link } from "react-router-dom"; // Import Link for page navigation
import React, { useState, useContext } from "react"; // Import hooks from React
import { FaEdit } from "react-icons/fa"; // Import edit icon
import TaskContext from "../context/Taskcontext"; // Import our Task context to share data

function Todolist() {
  // Get all data and methods from context
  const {
    tasks,               // List of all tasks
    addTask,             // Function to add a new task
    deleteTask,          // Function to delete a task
    editTask,            // Function to edit a task
    moveTaskUp,          // Function to move a task up
    moveTaskDown,        // Function to move a task down
    toggleTaskCompletion // Function to mark task complete/incomplete
  } = useContext(TaskContext);

  // Local state for new task input
  const [newTask, setNewTask] = useState("");

  // State for editing an existing task
  const [editIndex, seteditIndex] = useState(null); // Which task is being edited
  const [editedTask, seteditedTask] = useState(""); // New text for the edited task

  // Update newTask when user types in the input field
  const handleinputchange = (event) => {
    setNewTask(event.target.value);
  };

  // Add new task to the list
  const handleAddTask = () => {
    addTask(newTask);
    setNewTask(""); // Clear the input field
  };

  // Start editing a task
  const handleEditTask = (index) => {
    seteditIndex(index);
    seteditedTask(tasks[index].text); // Load current text into edit input
  };

  // Save the edited task
  const handleSaveTask = () => {
    editTask(editIndex, editedTask);
    seteditIndex(null);     // Stop editing
    seteditedTask("");      // Clear edited task text
  };

  // Move task up in the list
  const handleMoveUp = (index) => {
    seteditIndex(null); // Stop editing before moving
    seteditedTask("");
    moveTaskUp(index);
  };

  // Move task down in the list
  const handleMoveDown = (index) => {
    seteditIndex(null);
    seteditedTask("");
    moveTaskDown(index);
  };

  return (
    <>
      {/* Header with background image */}
      <div className="Image bg-[url(https://images.unsplash.com/photo-1719581886973-30aa96abd38f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  h-[20%] w-full bg-cyan-300 flex justify-center items-center rounded-lg">
        <h1 className="text-8xl font-bold text-white">TODO APP</h1>
      </div>

      {/* Buttons for navigation */}
      <div className="Discover flex items-center justify-center gap-20 m-8">
        <Link 
          to="/" 
          className="bg-lime-600 rounded-md px-8 py-2 text-white hover:bg-lime-700 hover:shadow-xl hover:shadow-lime-600 transition-smooth duration-500 cursor-pointer"
        >
          Home
        </Link>

        {/* Button for "Your Tasks" (currently not linked anywhere) */}
        <div className="bg-lime-600 rounded-md px-6 py-2 text-white hover:bg-lime-700 hover:shadow-xl hover:shadow-lime-600 transition-smooth duration-500 cursor-pointer">
          Your Tasks
        </div>
      </div>

      {/* Input field and Add Task button */}
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

      {/* Displaying the Task List */}
      <div className="Task-List flex items-center justify-center pt-10">
        <ol>
          {tasks.map((task, index) => (
            <li
              key={index}
              className="Listed-Tasks flex items-center justify-between bg-gray-200 px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-full mt-3 hover:scale-105"
            >
              {/* Checkbox to mark task complete/incomplete */}
              <input
                type="checkbox"
                className="mr-4 h-6 w-6 cursor-pointer hover:scale-110 transition-smooth duration-500"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
              />

              {/* Show input field when editing, else show task text */}
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

              {/* Show Save button if editing, else Edit button */}
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

              {/* Delete button */}
              <button
                className="bg-red-300 rounded-md px-8 py-2 hover:bg-red-700 hover:text-white hover:shadow-xl hover:shadow-red-300 transition-smooth duration-500 cursor-pointer ml-5"
                onClick={() => {
                  seteditIndex(null); // Stop editing before deleting
                  seteditedTask("");
                  deleteTask(index);
                }}
              >
                Delete
              </button>

              {/* Move task up button */}
              <button
                className="Taskup bg-blue-500 rounded-md px-8 py-2 hover:bg-lime-500 hover:text-white hover:shadow-xl hover:shadow-green-300 transition-smooth duration-500 cursor-pointer ml-5"
                onClick={() => handleMoveUp(index)}
              >
                ⬆
              </button>

              {/* Move task down button */}
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

export default Todolist; // Export Todolist component so we can use it in the app
