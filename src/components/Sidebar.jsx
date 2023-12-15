import React from 'react';

const Sidebar = () => {

    return (
        <>
        <div className='sub_con  h-screen w-[275px] bg-slate-500 mt-5 ml-8 rounded-xl items-center overflow-hidden'>
            <div className='h-11 w-[100%] flex  items-center justify-center'>
                <h2 className=' text-white text-2xl'>TOOLS</h2>
            </div>
            <div className='flex gap-5 flex-col items-center mt-7'>
            </div>
            <h2 className='text-white text-2xl ml-10 gap-3'> Progress</h2>
            <div className='mt-6'>
            <div className='total '>
                <div className='completed'>
                </div>
            </div>
            </div>
        </div>
    </>
    );
}

export default Sidebar;