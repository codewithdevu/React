import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind Css</h1>
      <div className="card bg-white text-black w-96 shadow-sm rounded-xl">
        <figure>
          <img className='rounded-xl'
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div className="card-actions justify-end mt-5">
            <button className="btn btn-primary text-white ">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
