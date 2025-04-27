// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App.jsx";
// // import TaskContextProvider from "./assets/context/Taskcontext"; // ✅ correct import
// import "./index.css";
// import TaskContextProvider from "./assets/context/TaskContextProvider.jsx"; 


// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <TaskContextProvider>
//         <App />
//       </TaskContextProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );

// Importing React library
import React from "react";

// Importing ReactDOM to render our App into the HTML DOM
import ReactDOM from "react-dom/client";

// Importing BrowserRouter to enable routing in our app
import { BrowserRouter } from "react-router-dom";

// Importing the main App component
import App from "./App.jsx";

// Importing global CSS file
import "./index.css";

// Importing TaskContextProvider to provide global state management for tasks
import TaskContextProvider from "./assets/context/TaskContextProvider.jsx"; 

// Rendering the App component into the root element of index.html
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode> {/* Helps to detect potential problems in an app */}
    <BrowserRouter> {/* Enables routing across different pages */}
      <TaskContextProvider> {/* Provides global task state to the entire app */}
        <App /> {/* Main App component */}
      </TaskContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
