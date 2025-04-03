import React, { useState } from "react";
import TaskContext from "./Taskcontext";

// 2️⃣ Context Provider Component
const TaskContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    
  
    // Add Task
    const addTask = (newTask) => {
      if (newTask.trim() !== "") {
        setTasks([...tasks, newTask]);
        // setNewTask(""); // Clear input field after adding
        
      }
    };
  
    // Delete Task
    const deleteTask = (index) => {
      setTasks(tasks.filter((_, i) => i !== index));
    };

     // Edit Task
     const editTask = (index, updatedTask) => {
        if (updatedTask.trim() === "") return;
        const updatedTasks = [...tasks];
        updatedTasks[index] = updatedTask;
        setTasks(updatedTasks);
      };
  
      // Move Task Up
      const moveTaskUp = (index) => {
        if (index === 0) return;
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
        setTasks(updatedTasks);
      };
  
      // Move Task Down
      const moveTaskDown = (index) => {
        if (index === tasks.length - 1) return;
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
        setTasks(updatedTasks);
      };
  
    return (
      <TaskContext.Provider value={{ tasks, addTask, deleteTask, editTask, moveTaskUp, moveTaskDown  }}>
        {children}
      </TaskContext.Provider>
    );
  }

  export default TaskContextProvider;