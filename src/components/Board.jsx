import { useState } from 'react';
import React from 'react';
import Card from './Card';
import task from '../data';

export default function Board() {
    const [tasks,setTasks] = useState(task)
    console.log()

    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='h-[700px] w-[800px] bg-yellow-100 flex justify-evenly items-center'>
                <div className='sub_con h-[600px] w-[33%] bg-red-400 text-center rounded-xl overflow-y-scroll'><h2 className='w-full h-11 border-2  flex justify-center items-center bg-green-400 sticky top-0 outline-none border-none '>To-Do</h2>
                {
                    tasks.map(v=>{
                        return <Card key={v.id}
                        note={v.note} data={v}/>
                    })
                }
                        
                    
                </div>
            </div>
        </div>
    );
}
