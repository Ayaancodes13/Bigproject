import React from 'react'
import { Link } from 'react-router-dom'
import service from '../appwrite/config'

const PostCard = ({$id,title,featuredimage}) => {
  return (
    <Link to ={`/post/${$id}`}>
      <div className=' sm:h-[45%] sm:w-[30%] flex flex-wrap md:w-[30%] md:h-[30%] justify-center items-center  bg-transparent border-black rounded-sm transition-all duration-200 hover:bg-amber-100 cursor-pointer'>
        <div className='w-full h-[80%]'>
          <img className='h-full w-full' src={service.getFilePreview(featuredimage)} alt={title} />
        </div>
        <div className='w-full h-[20%]'>
          <h2>{title}</h2>
        </div>
      </div>
    </Link>
  )
}

export default PostCard