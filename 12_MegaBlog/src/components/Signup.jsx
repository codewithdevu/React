import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import authservice from '../appwrite/auth'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useForm } from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, seterror] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const createSignup = async (data) => {
        seterror("")
        try {
            const userData = await authservice.createAccount(data)
            if (userData) {
                const userData = await authservice.getCurrentUser()
                if (userData) {
                    dispatch(login(userData));
                    navigate('/')
                }
            }
        } catch (error) {
            seterror(error.message)
        }
    }
    return (
        <div className=' fles items-center justify-center '>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-b-xl p-10 border border-black/10`}>
                <div className='mb-2 flex justify-center'>
                    <span className='inline-block w-full max-w-100px'>
                        <Logo width='100%' />
                    </span>
                </div>
                <h2 className='text-center text-2xl font-bold leading-tight'>Sign up to create account</h2>
                <p className='mt-2 text-center text-base text-black/60'>Already have an account?&nbsp;
                    <Link
                        to='/login'
                        className='font-medium text-primary transition-all duration-200 hover:underline'
                    >
                        Sign up
                    </Link>
                </p>
                {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
                <form
                    onSubmit={handleSubmit(createSignup)}
                    className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                            label='Full name: '
                            type='full name'
                            placeholder="Enter your full name"
                        {...register('name', {
                            required: true,
                        })}
                        />
                        <Input
                            label='Email: '
                            placeholder="Enter your email"
                            type="email"
                            {...register('email', {
                                required: true,
                                validate: {
                                    matchpattern: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value) || "Email addres must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label='Password: '
                            type='Password'
                            placeholder="Enter you password"
                            {...register('password', {
                                required: true,
                                validate: {
                                    matchpattern: (pass) => /(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?=.*[A-Z])(?=.*[a-z])(?!.*\n).*$/.test(pass) || "Password invalid"
                                }

                            })} 
                        />
                        <Button type='submit' className='w-full'>Create account</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
