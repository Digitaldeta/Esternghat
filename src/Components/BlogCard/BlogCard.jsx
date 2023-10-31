import React from 'react'
import { Link } from 'react-router-dom'
import {FiExternalLink} from 'react-icons/fi'
import '../../App.css'

const BlogCard = () => {
  return (
    <>
    <div className='blog-card max-w-[30rem] group rounded-lg overflow-hidden'>
        <div className='img-wrapper relative overflow-hidden'>
            <img src="https://img.freepik.com/free-photo/top-view-assortment-vegetables-paper-bag_23-2148853335.jpg?w=740&t=st=1696661805~exp=1696662405~hmac=781ce632d2adb25bbada6e481e513289cf084682de04fcc928b4c8704d282a8d" alt="img" className='group-hover:scale-125 duration-700'/>
            <div className="flex items-center justify-center overlay absolute bg-[#00000054] z-10 top-0 left-0 h-full w-full opacity-0 group-hover:opacity-100 duration-500">
                <Link className='z-30 text-white md:text-3xl hover:animate-pulse duration-500'><FiExternalLink/></Link>
            </div>
        </div>
        <div className='p-4'>
            <h2 className='mb-1 font-bold text-xl'>Our Blogs</h2>
            <p className='text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur qui est porro sequi alias exercitationem consectetur eaque molestiae labore explicabo?</p>
            <p>
                <span>10 Jan 2023</span>
                <span className='border-l border-spacing-2 border-black px-2 mx-2 font-semibold my-2'>Admin</span>
            </p>
        </div>
    </div>
    </>
  )
}

export default BlogCard