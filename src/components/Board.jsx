import {useState} from 'react';
import React from 'react';
import Card from './Card';
import task from '../data';
import Sidebar from './Sidebar';
import { Data } from '../App';
import Foarm from './Foarm';


export default function Board() {
    const [show, setShow] = useState(false)
    const onclick = () => {
        setShow(!show);
    }
    return (
        <>
            <Sidebar />
            <div className="flex mx-auto left-0 right-0 gap-16">
                <div className='foarm sub_con h-screen w-[275px] text-center rounded-xl mt-5 overflow-y-scroll '><h2 className='sub_con w-full h-11 border-2  flex justify-center items-center sticky top-0 outline-none border-none text-2xl text-white '>To-Do <button><i className="fi fi-rr-square-plus ml-3 text-cyan-300 animate-pulse "onClick={onclick} ></i></button></h2>
                     
                    {
                        task.map(v => {
                            return <Card key={v.id}
                                data={v} />
                        })
                    }
                    <Foarm show={show} setShow={setShow} visible={show} />
                </div>
                  <div className='foarm sub_con h-screen w-[275px]  text-center rounded-xl mt-5 overflow-y-scroll'><h2 className='w-full h-11 border-2  flex justify-center items-center sticky top-0 outline-none border-none text-2xl text-white'>IN PROGRESS</h2>
                </div>
                <div className='foarm sub_con h-screen w-[275px] bg-yellow-400 text-center rounded-xl mt-5 overflow-y-scroll'><h2 className='w-full h-11 border-2  flex justify-center items-center sticky top-0 outline-none border-none text-2xl text-white'>COMPLETED</h2>
                </div>
            </div>
        </>
    );
}