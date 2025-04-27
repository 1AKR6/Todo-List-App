// Import necessary modules and components from react-router-dom and local files
import { Routes, Route } from "react-router-dom";
import Home from "./assets/components/Home";              // Home page component
import AboutPage from "./assets/components/AboutPage";    // About page component
import Navbar from "./assets/components/Navbar";          // Navbar component
import TaskContextProvider from "./assets/context/TaskContextProvider.jsx"; // Global task context provider
import { FaEdit } from "react-icons/fa";                   // Importing an edit icon (currently not used here)
import Todolist from "./assets/components/Todolist.jsx";   // Todolist page component

// Main App component
function App() {
  return (
    // Wrap the entire app with TaskContextProvider to provide task state globally
    <TaskContextProvider>
      {/* Page container with padding and background styling */}
      <div className="p-5 bg-zinc-300 w-full h-screen">
        
        {/* Navbar will be shown on all pages */}
        <Navbar />

        {/* Define all application routes */}
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={<Home />} />

          {/* About Page Route */}
          <Route path="/about" element={<AboutPage />} />

          {/* Todolist Page Route */}
          <Route path="/todolist" element={<Todolist />} />
        </Routes>

      </div>
    </TaskContextProvider>
  );
}

// Export App component as default export
export default App;
