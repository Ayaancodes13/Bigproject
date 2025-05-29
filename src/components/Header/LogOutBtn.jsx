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
    <Button className = ' inline-block px-5 py-2 rounded-sm bg-gray-200 duration-200 hover:bg-gray-100 ' onClick ={LogOutHandler}>
        Logout
    </Button>
  )

}

export default LogOutBtn