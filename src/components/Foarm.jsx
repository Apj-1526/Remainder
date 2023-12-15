import React, { useState, useContext } from 'react';
import { Data } from '../App';

export default function Foarm({ visible, show, setShow }) {
    const { tasks, setTasks } = useContext(Data);
    const [des, setDes] = useState("");

    const addevent = () => {
        setTasks([...tasks, {
            id: tasks[tasks.length - 1].id + 1,
            desc: des,
            date: new Date().toLocaleDateString(),
            completed: false,
            fav: false,
            deleted: false,
            imp: false
        }]);
        setDes("");
        setShow(!show);
    }

    const vis = () => {
        setShow(!show)
    }

    return (
        <div className={` h-[180px] w-[200px] border-2 border-blue-300 left-0 right-0 m-auto absolute top-0 bottom-0 z-10 bg-white ${visible ? 'block' : 'hidden'}`}>
            <h1>
                <h2>work:{tasks[tasks.length - 1].id + 1}</h2>
                <textarea
                    className='h-28'
                    value={des}
                    onChange={(e) => setDes(e.target.value)}
                    cols="20"
                    rows="10"
                ></textarea>
                <div className='flex-row justify-evenly'>
                    <div className='flex justify-evenly'>
                        <button className='h-7 w-14 bg-red-400 rounded-md' onClick={vis}>Cancel</button>
                        <button className='h-7 w-20 bg-blue-400 rounded-md' onClick={addevent}>Add Task+</button>
                    </div>
                </div>
            </h1>
        </div>
    );
}
