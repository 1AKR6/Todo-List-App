import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TaskContextProvider from './assets/context/TaskContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <TaskContextProvider>
    <App />
  </TaskContextProvider>,
)
