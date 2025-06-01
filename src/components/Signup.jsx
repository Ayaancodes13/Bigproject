import React, { useState } from 'react'
import authservice from '../appwrite/auth'
import { login } from '../features/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import {Button,Logo,Input} from './index'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
const Signup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register,handleSubmit} = useForm()
    const [error,setError] = useState("")
    const create = async (data)=>{
        setError("")
            try {
                const userData = await authservice.createAccount(data)
                if(userData){
                    const currentData = await authservice.getCurrenUser(userData)
                    if(currentData){
                        dispatch(
                            login(currentData)
                        )
                        navigate("/")
                    }
                }
            } catch (error) {
                setError(error)
            }
        
    }
  return (
    <div className='h-[66%] sm:w-[94%] md:[w-35%] flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center h-full w-full '>
            <span className='h-90px inline-block'>
                <img className='h-full w-full' src={Logo} alt="logo" />
            </span>
            <form className='flex flex-col items-center justify-center h-[70%] w-full' onSubmit={handleSubmit(create)}>
                
                <div className='flex items-center justify-center h-[25%] w-full'>
                    <Input
                    className="h-[80%] w-[80%]"
                    label = "Full Name"
                    placeholder = "Enter your Full Name"
                    type= "text"
                    {
                        ...register('name',{
                            required: true,
                            
                        })
                    }
                     />
                </div>
                <div className='flex items-center justify-center h-[25%] w-full'>
                    <Input
                    className="h-[80%] w-[80%]"
                    type="email"
                    label="Email"
                    placeholder = "Enter your Email"
                    {
                        ...register('email',
                            {
                                required: true,
                                validate: {
                                     matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address"
                                }
                            }
                        )
                    }
                     />
                </div>
                <div className='flex items-center justify-center h-[25%] w-full'>
                    <Input
                    className= 'h-[80%] w-[80%]'
                    type = "password"
                    label="Password"
                    placeholder= "Enter your Password"
                    {...register('password',{
                        required: true
                    })}
                     />
                </div>
                <div>
                    <Button type='submit'>
                        Sign up
                    </Button>
                    <Button onClick = {()=>{navigate('/login')}}>
                        Sign in
                    </Button>
                </div>
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    </div>
  )
}

export default Signup