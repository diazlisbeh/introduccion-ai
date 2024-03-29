// src/Curso.js
import React from 'react';
import Semana from './Week';

const Curso = ({ curso }) => {
  return (
    <div className="my-5 p-5 border rounded shadow-lg  bg-gray-200 font-sans">
      <h2 className="text-xl font-bold mb-3">{curso.nombre}</h2>
      {curso.semanas.map(semana => (
        <Semana key={semana.numero} semana={semana} />
      ))}
    </div>
  );
};

export default Curso;
