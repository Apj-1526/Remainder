import React from 'react';
import Card from './Card';


const Sidebar = () => {

    return (
        <>
        <div className='h-screen w-[300px] bg-slate-500 mt-5 ml-5 rounded-xl items-center overflow-hidden'>
            <div className='h-11 w-[100%] bg-green-400 flex  items-center justify-center'>
                <h2 className=' text-black'>TOOLS</h2>
            </div>
            <div className='flex gap-5 flex-col items-center mt-7'>
            <button className='w-[50%] h-[40px] bg-white rounded-md'>ADD TASK</button>
            </div>
        </div>
    </>
    );
}

export default Sidebar;