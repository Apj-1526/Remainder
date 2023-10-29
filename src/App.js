// App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Board from './components/Board';

const App = () => {
  

  return (
    <>
      <Navbar/>
    <div className="flex gap-7">
      
      <Board/>
     
    </div>
    </>
  );
}

export default App;
