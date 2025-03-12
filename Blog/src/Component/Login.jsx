import React , { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button , Logo, Input } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register , handleSubmit} = useForm()
    const [error , setError] = useState('')

    const login = async (data) =>{
        setError("")
        try {
            const session  = await authService.login(data)
            if(session){
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData))
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div
    className='w-full flex items-center justify-center'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10` }>
        <div className='mb-2 flex justify-center'>
            <span className='inline-block w-full max-w-[100px]'>
                <Logo />
            </span>
        </div>
         <h2 className='text-center text-2xl font-bold leading-tight '>Sign In Your Account </h2>
         <p className='mt-2 text-center text-base text-black/60'>
         Don&apos;t have an account?&nbsp;
         <Link
         to='/singup'
         className='font-medium text-primary transition-all duration-200 hover:underline cursor-pointer'
         >
            Sign Up
         </Link>
         </p>
         {error && <p className='text-red-600 text-center mb-8   '>{error}</p>}

         <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input 
                label = "Email: "
                placeholder="Enter Your Email"
                type="email"
                {...register("email",{
                    required: true,
                    validate:{
                        matchPatern:(value)=>/^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) ||
                         "Email Address Must be Valid Address ",
                    }
                })}
                />

                <Input 
                label= "Password: "
                placeholder="Enter  Password"
                type="password"
                {...register("password",{
                    required: true
                })}
                />

                <Button
                 type="submit"
                >Sign In</Button>
            </div>
         </form>
        </div>
    </div>
  )
}

export default Login