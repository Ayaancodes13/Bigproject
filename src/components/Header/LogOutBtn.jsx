import React from 'react'
import authservice from '../../appwrite/auth'
import { logout } from '../../features/authSlice'
import { useDispatch } from 'react-redux'
const LogOutBtn = () => {
    const dispatch = useDispatch()
   const  LogOutHandler=  ()=>{
    authservice.logout().then(
        ()=>{
            dispatch(logout())
        }
    )
   }
  return (
    <Button className = ' p-1 rounded-sm transition-all duration-200 bg-gray-400 hover:bg-gray-300' onClick ={LogOutHandler}>
        Logout
    </Button>
  )

}

export default LogOutBtn