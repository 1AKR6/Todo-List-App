import React from "react";
import { useState } from "react";

function Todolist() {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Creating Webpage",
    "Purpose: It hides any content that exceeds the allocated width of the span."
  ]);
  const [newTask, setNewTask] = useState("");

  const handleinputchange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() === "") return; // Prevent empty tasks

    setTasks([...tasks, newTask]); // Add new task to the list
    setNewTask(""); // Clear input field after adding
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const movetaskup = (index) => {
    if (index === 0) return; // Prevent moving the first task up

    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index - 1]] = [
      updatedTasks[index - 1],
      updatedTasks[index]
    ];
    setTasks(updatedTasks);
  };

  const movetaskdown = (index) => {
    if (index === tasks.length - 1) return; // Prevent moving the last task down

    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index + 1]] = [
      updatedTasks[index + 1],
      updatedTasks[index]
    ];
    setTasks(updatedTasks);
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
        <div className="bg-lime-600 rounded-md px-4 py-2 hover:bg-lime-700 hover:text-white hover:shadow-xl hover:shadow-lime-600 transition-smooth duration-500 cursor-pointer">
          Your Tasks
        </div>
      </div>

      <div className="Nav px-80 flex gap-5  justify-center pt-5 ">
        {/* <h1 className='text-3xl font-semibold'>Tasks</h1> */}

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
          onClick={addTask}
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
              <span className="Task-List text-lg font-medium flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                {task}
              </span>

              <button
                className="bg-red-500 rounded-md px-8 py-2 hover:bg-red-700 hover:text-white hover:shadow-xl hover:shadow-red-300 transition-smooth duration-500 cursor-pointer ml-5"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>

              <button
                className="Taskup bg-blue-500 rounded-md px-8 py-2 hover:bg-red-700 hover:text-white hover:shadow-xl hover:shadow-red-300 transition-smooth duration-500 cursor-pointer ml-5"
                onClick={() => movetaskup(index)}
              >
                ⬆
              </button>

              <button
                className="Taskdown bg-blue-500 rounded-md px-8 py-2 hover:bg-red-700 hover:text-white hover:shadow-xl hover:shadow-red-300 transition-smooth duration-500 cursor-pointer ml-5"
                onClick={() => movetaskdown(index)}
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
