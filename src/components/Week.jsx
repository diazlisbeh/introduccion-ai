// src/Semana.js
import React from 'react';
import Tarea from './Task';

const Semana = ({ semana }) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold">Semana {semana.numero}</h3>
      {semana.tareas.map(tarea => (
        <Tarea key={tarea.id} tarea={tarea} />
      ))}
    </div>
  );
};

export default Semana;
