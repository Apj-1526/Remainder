import React from 'react';
import task from '../data';
export default function Card({data}) {
    console.log({data})
    return (
        <div className='container h-[140px] w-[180px] mt-3 flex m-auto flex-col justify-around gap-3 rounded-lg border-2 bg-white p-5'>
                <h2>work:{data.id}</h2> 
                <p>{data.note}</p>
                <h2>Date:{data.date}</h2>
            <task/>
        </div>
    );
}

