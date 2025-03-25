import { useState } from "react"; // Importing useState to manage states

const Testsub = () => {
  // State to track if the input field should be shown or not
  const [showInput, setShowInput] = useState(false);

  // State to store the user's input
  const [newTask, setNewTask] = useState("");

  // State to store the list of tasks
  const [tasks, setTasks] = useState([]);

  // Function to handle adding a new task
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]); // Add new task to the tasks list
      setNewTask(""); // Clear input field after submitting
      setShowInput(false); // Hide input field after submitting
    }
  };

  return (
    <div>
      {/* Button to show input field */}
      <button onClick={() => setShowInput(true)}>Add Task</button>

      {/* Show input field & submit button only when showInput is true */}
      {showInput && (
        <div>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter your task"
          />
          <button onClick={addTask}>Submit</button>
        </div>
      )}

      {/* Display the list of tasks */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default Testsub;
