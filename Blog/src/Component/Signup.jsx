import React,{ useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login} from '../store/authSlice'
import {Button , Logo, Input } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register , handleSubmit} = useForm()
    const [error, setError] = useState()

    const create = async(data)=>{
        setError("")
        try {
            const userData=await authService.createAccount(date)
            if(userData){
               const userData = await authService.getCurrentUser()
               if(userData) dispatch(login(userData))
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div className='flex items-center justify-center'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xlp-10 rounded border-black/10`}>
        <span className='inline-block w-full max-w-[100px]'>
                <Logo width='100%'/>
            </span>
           
        </div>
        <h2 className='text-center text-2xl font-bold leading-tight '>Sign up to create an account  </h2>
         <p className='mt-2 text-center text-base text-black/60'>
         Already have an Account?&nbsp;
         <Link
         to='/login'
         className='font-medium text-primary transition-all duration-200 hover:underline cursor-pointer'
         >
            Sign In
         </Link>
         </p>
         {error &&  <p className='text-red-600 text-center mb-8   '>{error}</p>}

         <form onSubmit={handleSubmit(create)}>
            <div className=' space-y-5'>
                <Input 
                label = "Name: "
                placeholder = "Enter your name"
            {...register("name" , {
                required: true
            })}
                />


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
                 className="w-full"
                >
                 Create An Account
              </Button>

            </div>
         </form>
    </div>
  )
}

export default Signup