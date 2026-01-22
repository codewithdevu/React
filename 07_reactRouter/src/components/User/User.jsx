import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()
    return (
        <>
            <h1 className='text-white bg-gray-600 text-3xl text-center p-4np'>User: {userid}</h1>
        </>
    )
}

export default User
