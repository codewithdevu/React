import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [color, setColor] = useState("rgb(68, 67, 67")

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-full text-black'>
          <button onClick={() => setColor("red")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{ backgroundColor: "red" }}> Red</button>
          <button onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "green" }}> green</button>
          <button onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "blue" }}> blue</button>
          <button onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "olive" }}> olive</button>
          <button onClick={() => setColor("grey")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "grey" }}> grey</button>
          <button onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "yellow" }}> yellow</button>
          <button onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "pink" }}> pink</button>
          <button onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "purple" }}> purple</button>
          <button onClick={() => setColor("lavender")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black" style={{ backgroundColor: "lavender" }}> lavender</button>
          <button onClick={() => setColor("white")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black" style={{ backgroundColor: "white" }}> white</button>
        </div>

      </div>

    </div>

  )
}

export default App
