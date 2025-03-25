import React from 'react'

function Todolist() {
  return (
      <>
       <div className='Image bg-[url(https://images.unsplash.com/photo-1719581886973-30aa96abd38f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  h-[20%] w-full bg-cyan-300 flex justify-center items-center rounded-lg'>
        
            <h1 className='text-8xl font-bold text-white'>TODO APP</h1>
       </div>

       <div className='Discover flex items-center justify-center gap-20 m-8'>

          <div className='bg-lime-600 rounded-md px-8 py-2 hover:bg-lime-700 hover:text-white hover:shadow-xl hover:shadow-lime-600 transition-smooth duration-500 cursor-pointer'>Home</div>
          <div className='bg-lime-600 rounded-md px-4 py-2 hover:bg-lime-700 hover:text-white hover:shadow-xl hover:shadow-lime-600 transition-smooth duration-500 cursor-pointer'>Your Tasks</div>

       </div>

       <div className='Nav px-80 flex gap-5  justify-center pt-5 '>
          {/* <h1 className='text-3xl font-semibold'>Tasks</h1> */}

          <input type="text" className='Input-field border-2 w-1/2 p-2 rounded-lg hover:scale-105 transition-smooth duration-500'  style={{ fontSize: "20px" }} placeholder='Enter Your Task ...'/>

          
          <button className='bg-lime-500 rounded-md px-4 py-2 hover:bg-lime-700 hover:text-white hover:shadow-xl hover:shadow-lime-600 transition-smooth duration-500 cursor-pointer'>Add Task</button>
       </div>
      </> 
       )
      }
    
export default Todolist;