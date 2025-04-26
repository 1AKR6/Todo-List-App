// 📁 src/components/TaskFilter.jsx
import React, { useState, useContext } from "react";
import TaskContext from "../context/Taskcontext";


const Taskfilter = () => {
    // 👇 Get tasks and toggle function from global context
    const { tasks, toggleTaskCompletion } = useContext(TaskContext);
  
    // 👇 Local state to track selected filter
    const [activeFilter, setActiveFilter] = useState("all");

    const handleFilterChange = (filterType) => {
        setActiveFilter(filterType);
      };
    

      const filterTasks = () => {
        switch (activeFilter) {
          case "complete":
            return tasks.filter((task) => task.completed);
          case "incomplete":
            return tasks.filter((task) => !task.completed);
          default:
            return tasks;
        }
      };
    
      const filteredTasks = filterTasks(); // filtered list for rendering

      return (
        <div>
          {/* 🔘 Filter Buttons */}
          <div>
            <button onClick={() => handleFilterChange("all")}>All</button>
            <button onClick={() => handleFilterChange("complete")}>Completed</button>
            <button onClick={() => handleFilterChange("incomplete")}>Incomplete</button>
          </div>
    
          {/* 📋 Render Filtered Tasks */}
          <ul>
            {filteredTasks.map((task) => (
              <li key={task.id}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                />
                {task.title}
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default Taskfilter;