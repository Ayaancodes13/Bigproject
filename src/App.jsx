import { useEffect, useState } from 'react'
import { login,logout } from './features/authSlice'
import {useDispatch} from 'react-redux'
import authservice from './appwrite/auth'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const [loading,setLoading] = useState(true)

  useEffect(
    ()=>{
      const getData = async ()=>{
        try{
        const userData = await authservice.getCurrentUser()
        if(userData){
          dispatch(
            login(userData)
          )
        }else{
          dispatch(
            logout()
          )
        }}catch(error){
          console.log('error',error)
        }finally{
          setLoading(false)
        }
      }
      getData()
    }
    ,
    []
  )
  return (
    <>
    <h1>Project</h1>
    </>
  )
}

export default App
