import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  const [counter, setvalue] = useState(0)

  const addvalue = () => {
    setvalue(counter + 1)
  }


  // const remvalue = () => {
  //   setvalue(counter > 0 ? counter - 1 : counter)
  // }


  const remvalue = () => {
    if (counter == 0) {
      setvalue(counter)
    }
    else {
      setvalue(counter - 1)
    }
  }

  return (
    <>
      <h1>Divyansh | Yadav</h1>
      <h3>Count Value: {counter}</h3>

      <button class = "btn" onClick={addvalue}>Add Value</button>
      <button class = "btn" onClick={remvalue}>Remove Value</button>
    </>
  )
}

export default App
