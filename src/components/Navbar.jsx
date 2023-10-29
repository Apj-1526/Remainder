import React from 'react';
import {useState} from 'react'
import Login from './Login';
const date = new Date().toLocaleDateString()


function Navbar() {
    const [state,setSate]=useState(0)
  return (
    <div>
      <div className='flex justify-evenly h-[75px] w-screen bg-green-300 items-center'>
            <div className='flex-row flex items-center gap-2'>
                <i className="fi fi-rr-book-bookmark text-2xl mt-2" ></i>
                <h1 style={{fontWeight:'bold'}} className='text-3xl'>KANBAN BOARD</h1>
            </div>
            <div className='flex flex-row gap-5 items-center ml-[400px]'>
            <h2 style={{fontWeight:'bold'}} className='text-xl'>{date}</h2>
            <button style={{fontWeight:'bold'}} className='h-[40px] w-[100px] bg-white rounded-md' onClick={()=> setSate(!state)}>LOGIN</button>
         
            </div>
        </div> 
          {state ? <Login/> : null}
    </div>
  )
}

export default Navbar

