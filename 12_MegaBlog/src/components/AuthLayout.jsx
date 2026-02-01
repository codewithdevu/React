import React, {useState , useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
 
export default function Protected({children , authenticaton = true}) {
    const navigate = useNavigate()
    const [loader , setloader] = useState()
    const authstatus = useSelector((state) => state.auth.status) 

    useEffect (() => {
        if (authenticaton && authstatus !== authenticaton) {
            navigate("/login")
        } else if(!authenticaton && authstatus !== authenticaton){
            navigate("/")
        }
        setloader("/")

    }, [authstatus , navigate , authenticaton])

    
    return loader ? <h1>loading...</h1> : <>{children}</>
}


