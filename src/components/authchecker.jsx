import React, {Children, useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function  Authchecker({Children,authentication = true}){
    const [loader,setLoader] = useState(true)
    const navigate = useNavigate()
    const authstatus = useSelector(state=>state.auth.status)
    useEffect(
        ()=>{
            if(authentication && !authstatus){
                navigate('/login')
            }
            else if(authentication && authstatus){
                navigate('/')
            }
            setLoader(false)
        },[authstatus,navigate,authentication]
    )
    return loader? <h1>Loading...</h1> : <>{Children}</>
}