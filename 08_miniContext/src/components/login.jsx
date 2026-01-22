import React from 'react'
import Usercontext from '../context/Usercontext'
import { useContext } from 'react'
import { useState } from 'react'

function Login() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const handleSubmit = () => {

    }
    return (
        <div>
            <h2>login</h2>
            <input
                value={username}
                onChange={(e) => setusername(e.target.value)}
                type="text"
                placeholder='username' />
            <input
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                type="text"
                placeholder='password' />

            <button onChange={handleSubmit}>Submit</button>
        </div>

    )
}

export default Login
