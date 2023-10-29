import React, { useState } from 'react';

const Card = ({ data }) => {
  const [button, setButton] = useState(0);

  const handleClick = () => {
    setButton(prevState => prevState === false ? true: false);
  }

  return (
    <>
      <div className='container h-[150px] w-[190px] mt-3 flex m-auto flex-col justify-around gap-1 rounded-lg border-2 bg-white p-5 cursor-pointer hover:border-violet-600 overflow-auto'>
        <h2>work:{data.id}</h2>
        <p>{data.note}</p>
        <h2>Date:{data.date}</h2>
        <div className="flex justify-between">
          {button === true ?
            <button className="h-6 w-16 rounded-lg bg-red-300 hover:scale-125" onClick={handleClick}>Urgent</button> :
            <button className="h-6 w-16 rounded-lg bg-green-300 hover:scale-125" onClick={handleClick}>Urgent</button>
          }
             <i className="hover:scale-125 fi fi-rs-trash text-xl "></i>
        </div>
      </div>
    </>
  );
}

export default Card; 
