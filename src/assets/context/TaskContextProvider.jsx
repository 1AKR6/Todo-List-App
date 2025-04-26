// Import React and the useState hook
import React, { useState } from "react";

// Import your custom context
import TaskContext from "./Taskcontext";

// 2️⃣ This is the Context Provider Component
// It wraps around your app and provides the task state and functions to all components inside
const TaskContextProvider = ({ children }) => {
  
  // State to store all tasks as an array
  // Each task is an object: { text: "Task Name", completed: false }
  const [tasks, setTasks] = useState([]);

  // 🔹 Add Task Function
  const addTask = (newTask) => {
    // Check if the task is not just empty spaces
    if (newTask.trim() !== "") {
      // Add the new task to the list with 'completed' set to false
      setTasks([...tasks, { text: newTask, completed: false }]);
    }
  };

  // 🔹 Delete Task Function
  const deleteTask = (index) => {
    // Remove the task at the given index
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // 🔹 Edit Task Function
  const editTask = (index, updatedTask) => {
    // Ignore empty task updates
    if (updatedTask.trim() === "") return;

    // Copy all tasks to modify safely
    const updatedTasks = [...tasks];

    // Update only the text of the task at given index
    updatedTasks[index].text = updatedTask;

    // Set the updated tasks
    setTasks(updatedTasks);
  };

  // 🔹 Move Task Up Function
  const moveTaskUp = (index) => {
    // If already at the top, do nothing
    if (index === 0) return;

    // Copy all tasks
    const updatedTasks = [...tasks];

    // Swap task at index with the one above it
    [updatedTasks[index], updatedTasks[index - 1]] = [
      updatedTasks[index - 1],
      updatedTasks[index],
    ];

    // Set updated tasks
    setTasks(updatedTasks);
  };

  // 🔹 Move Task Down Function
  const moveTaskDown = (index) => {
    // If already at the bottom, do nothing
    if (index === tasks.length - 1) return;

    // Copy tasks
    const updatedTasks = [...tasks];

    // Swap task with the one below it
    [updatedTasks[index], updatedTasks[index + 1]] = [
      updatedTasks[index + 1],
      updatedTasks[index],
    ];

    // Set updated tasks
    setTasks(updatedTasks);
  };

  // ✅ Toggle Checkbox Function (mark task as complete/incomplete)
  const toggleTaskCompletion = (index) => {
    // Copy all tasks
    const updatedTasks = [...tasks];

    // Flip the 'completed' status (true -> false or false -> true)
    updatedTasks[index].completed = !updatedTasks[index].completed;

    // Set the updated tasks
    setTasks(updatedTasks);
  };

  // 📦 Provide all state and functions to child components using Context
  return (
    <TaskContext.Provider
      value={{
        tasks,                 // List of tasks
        addTask,              // Add a new task
        deleteTask,           // Delete a task
        editTask,             // Edit a task
        moveTaskUp,           // Move task up
        moveTaskDown,         // Move task down
        toggleTaskCompletion, // ✅ Checkbox function
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

// Export the provider so you can wrap it around your App in main.jsx
export default TaskContextProvider;
