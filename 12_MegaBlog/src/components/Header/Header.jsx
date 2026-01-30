import React from 'react'
import {container , Logo , LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { act } from 'react'

function Header() {
    const authstatus = useSelector((state) => 
        state.auth.status)
    const navigate = useNavigate()

    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authstatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authstatus,
        },
        {
            name:"All Posts",
            slug: "/add-posts",
            acitve: authstatus,
        },
        {
            name: "Add post",
            slug: "/add-post",
            active: authstatus,
        },
    ]
    return (
        <h1>Header</h1>
    )
}

export default Header
