import { useCallback, useState } from 'react'
import './index.css'


function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:'`~"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      let pass = str.charAt(char)
    }

    setpassword(pass)
  }, [length, numberAllowed, charAllowed, setpassword])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 '>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 my-3'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-white text-gray-700'
            placeholder='password'
            readOnly
          />

          <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-5'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label> Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberinput'
              onChange={() => {
                setnumberAllowed((prev) => !prev)
              }}
            /> 
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='numberinput'
              onChange={() => {
                setcharAllowed((prev) => !prev)
              }}
            /> 
            <label>character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
