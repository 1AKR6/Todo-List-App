📘 Todo List Project: My Learning Journey
This file is not just a README — it's a journal of my progress, mistakes, learnings, and updates while building this React Todo List project. I’ll be updating it regularly as I learn and improve.

🎯  Current Functionality
As of now, the project includes the basic CRUD operations, meaning:

✅ Add a new task

📝 Edit existing tasks

🗑️ Delete unwanted tasks

🔼 Move tasks up in the list

🔽 Move tasks down in the list

💾 Save changes after editing

🎨 Stylish UI with hover effects

📁 Folder Structure
src/
│
├── components/
│   └── Todolist.jsx          // Main Todo component
│
├── context/
│   └── Taskcontext.jsx       // Context API for task state
│
├── App.js                    // Root component
└── index.js                  // App entry point

🧠 How It Works
State Management: Uses React's useContext and useState to manage the task list globally via TaskContext.

• Task Add: Adds a task only if input is not empty.

• Edit Mode: When editing a task, an input field appears for modification.

• Reordering: Tasks can be shifted up or down using arrows.

• Persistent Behavior: Modifies tasks in place and resets after saving edits.

🧠 Why I Used Context API
• I specifically chose to implement Context API because:

• I wanted to level up my React skills

• I was tired of prop drilling between components

• I wanted to manage state globally and make the app more scalable

• It prepares me to understand state management libraries in the future (like Redux or Zustand)

⚠️ Mistakes & Fixes I’ve Made:

        ❌ Mistake	                                                🛠️ Fix / Learning
• Tried to manage all states locally         	        •  Moved to Context API for cleaner code and shared state

• newTask wasn't clearing after adding	               • Used setNewTask("") to reset the input

• Button alignment wasn't consistent	                 • Used min-w and flex justify-end to fix UI alignment

• Forgot to pass context properly	Wrapped              • components with TaskContextProvider in App.js


🔮 What’s Coming Next?
This is just the start. I plan to add:

✅ Task completion (strike-through or checkbox)

🟢 Task priority

📆 Due dates

💾 Local Storage for persistent tasks

📍 React Router for multiple views

💬 Even maybe Firebase for backend support
