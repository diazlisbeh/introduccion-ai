import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { cursos } from './data';
import Curso from './components/Curso'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App p-5 border-gray-700">
      {cursos.map(curso => (
        <Curso key={curso.id} curso={curso} />
      ))}
    </div>
    </>
  )
}

export default App
