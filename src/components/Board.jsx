import { useState } from 'react';
import React from 'react';
import Card from './Card';
import task from '../data';
import Sidebar from './Sidebar';

export default function Board() {
    const [tasks, setTasks] = useState(task)

    return (
        <>
        <Sidebar/>
            <div className="flex mx-auto left-0 right-0 gap-10">
            <div className='sub_con h-screen w-[300px] bg-red-400 text-center rounded-xl mt-5 overflow-y-scroll'><h2 className='w-full h-11 border-2  flex justify-center items-center bg-yellow-400 sticky top-0 outline-none border-none '>To-Do</h2>
                {
                    task.map(v => {
                        return <Card key={v.id}
                            note={v.note} data={v} />
                    })
                }
            </div>
            <div className='sub_con h-screen w-[300px] bg-blue-400 text-center rounded-xl mt-5 overflow-y-scroll'><h2 className='w-full h-11 border-2  flex justify-center items-center bg-red-400 sticky top-0 outline-none border-none text-2xl'>In Progress</h2>
            </div>
            <div className='sub_con h-screen w-[300px] bg-yellow-400 text-center rounded-xl mt-5 overflow-y-scroll'><h2 className='w-full h-11 border-2  flex justify-center items-center bg-blue-400 sticky top-0 outline-none border-none text-2xl'>Completed</h2>
            </div>
            </div>
        </>
    );
}
