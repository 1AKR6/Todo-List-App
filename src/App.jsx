// import React from 'react'
// import Todolist from './assets/components/Todolist';
// import { FaEdit } from "react-icons/fa";


// function App() {
//   return (
//     <div className='p-5 bg-zinc-300 w-full h-screen'>
//       <Todolist />
//     </div>
//   )
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // Import Router components
import Todolist from "./assets/components/Todolist";
import TaskContextProvider from "./context/TaskContext";
import { FaEdit } from "react-icons/fa";

function App() {
  return (
    // Wrap your entire app with Router to enable routing
    <Router>
      <TaskContextProvider>
        <div className="p-5 bg-zinc-300 w-full h-screen">
          {/* Define routes for different pages */}
          <Switch>
            {/* Route for the home page */}
            <Route exact path="/" component={Todolist} />

            {/* Add more routes here for other pages */}
            {/* Example route for an "About" page */}
            {/* <Route path="/about" component={AboutPage} /> */}
          </Switch>
        </div>
      </TaskContextProvider>
    </Router>
  );
}

export default App;
