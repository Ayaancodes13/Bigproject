import React, { useState } from 'react'
import {Button,Logo,Input} from './index'
import { useNavigate,Link } from 'react-router-dom'
import { login } from '../features/authSlice'
import authservice from '../appwrite/auth'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'


const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register,handleSubmit} = useForm()
    const [error,setError] = useState("")

    const userLogin= async (data)=>{
        setError("")
        try {
            const session = await authservice.login(data)
            if(session){
                const userData = await authservice.getCurrenUser(session)
                if(userData){
                    dispatch(login(userData))
                    navigate("/")
                }
            }
            
        } catch (error) {
            setError(error)
        }
    }
  return(
    <div className='flex items-center justify-center h-[60%] sm:w-[90%] md:[30%]'>
        <div className='h-full w-full flex items-center justify-center flex-col'>
            <span className='inline-block h-[90px]'><img className='h-full w-full' src={Logo} alt="Logo" /></span>
                <form onSubmit={handleSubmit(userLogin)} className='flex items-center justify-center flex-wrap h-[70%] w-[100%]'>
            <div className='w-[100%] h-[30%]'>

            <Input
            className="w-full"
            label= "Email: "
            placeholder="Enter your Email"
            type = "email"
            {...register("email", {
                required: true,
                validate: {
                    matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                }
            })}
            />
            </div>
            <div className='w-[100%] h-[30%]'>
                <Input
                label = "Password"
                placeholder="Enter your Password"
                type="password"
                {
                    ...register(
                        "password",{
                            required: true,
                            
                        }
                    )
                }
                />
            </div>
            <div className='w-[100%] h-[30%] flex items-center justify-around '>
                <Button
                type='submit'
                >
                    Sign in
                </Button>
                <Button onClick = {()=>{navigate('/signup')}}>
                    Sign up 
                </Button>
                
            </div>
                {error && (
                    <p>{error}</p>
                )}
             
                     </form>
        </div>
    </div>
  )
}

export default Login