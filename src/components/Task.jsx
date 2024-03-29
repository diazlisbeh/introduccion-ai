// src/Tarea.js
import React from 'react';
import download from '../assets/download.svg'

const Tarea = ({ tarea }) => {
  return (
    <div className={` flex flex-row justify-between border-y-4 border-indigo-500/50 hover:bg-gray-300 shadow-md p-2  rounded my-2`}>
      <p>{tarea.nombre}</p>
      <a href={tarea.link} download><img src={download} className=' w-6'></img>   </a>
    </div>
  );
};

export default Tarea;
