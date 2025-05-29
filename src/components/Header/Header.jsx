import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LogOutBtn from './LogOutBtn'
import {Logo} from '../index'
const Header = () => {
  const status = useSelector((state)=>(state.auth.status))
  const navigate = useNavigate()
  const navItems = [
    {
      name:"Home",
      slug:"/",
      active:true
    },{
      name:"Login",
      slug:'/login',
      active: !status
    },{
      name:"Signup",
      slug: "/signup",
      active: !status
    },{
      name:"All Posts",
      slug:"/all-posts",
      active:status
    },{
      name:"Add Post",
      slug:"/add-post",
      active:status
    }
  ]
  return (
    <header className='sm: hidden md:flex justify-around items-center w-full h-[20%] bg-transparent'>
      
        { /* logo */}
        <div className='w-[10%]'> 
          <Link to='/'>
          <img className='w-[100%]' src={Logo} alt="Logo image" />
          </Link>
          </div>

          { /* Nav + btn */}
          <nav className='flex bg-transparent items-center justify-center w-[90%] '>
              <ul className='flex bg-transparent gap-4'>
          {
            navItems.map(
              
              (item)=>
                item.active?
              (
                <li key={item.name}>
                  <button className='inline-block px-5 py-2 rounded-sm bg-gray-200 duration-200 hover:bg-gray-100 ' onClick={()=>{navigate(item.slug)}}>{item.name}</button>
                </li>
              ):(null)
            )
          }
          </ul>
          { /* Logout btn */}
            {
              status?(
                <LogOutBtn />
              ):(
                null
              )
            }
            </nav>

        
      
    </header>
  )
}
export default Header 