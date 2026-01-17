import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'


function App() {
  const [count, setCount] = useState(0)

  let myobj = {
    username: "divyansh",
    skills: "coding"
  }

  let arr = [1,2,3,4,5]
  
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind Card</h1>
      <Card username = "Divyansh Yadav" someobj={myobj} array={arr}/>
      <Card username = "devu" />
    </>
  )
}

export default App
