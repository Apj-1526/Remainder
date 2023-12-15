import React, { useState,createContext } from 'react';
import Navbar from './components/Navbar';
import Board from './components/Board';
import task from './data';

export const Data = createContext()
const App = () => {
const [tasks,setTasks] = useState(task)  
  return (
    <Data.Provider value={{tasks,setTasks}}>
  
      <Navbar/>
    <div className=" flex gap-7 main">
      
      <Board/>
     
    </div>
    </Data.Provider>
  );
}

export default App;
