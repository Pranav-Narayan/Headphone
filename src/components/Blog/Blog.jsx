import React from 'react'
import { BlogsData } from '../../data/blogData'
import { UpdateFollower } from 'react-mouse-follower'

const Blog = () => {
  return (
    <>
        <section className='bg-gray-50'>
            <div className='container py-14'>
                <h1 className='text-3xl font-bold text-center font-poppins pb-8'>Blogs</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                {BlogsData.map((data)=>{
                    return (
                        <UpdateFollower
                            mouseOptions={{
                                backgroundColor:'#021526',
                                zIndex:9999,
                                followSpeed:1.5,
                                text:'read',
                                textFontSize:'3px',
                                scale:5,
                            }}
                        >
                            <div className='flex flex-col item-center justify-center gap-6 p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-[#a7a7b372] hover:-translate-y-2 duration-300'>
                            <img src={data.image} alt="" className='rounded hover:scale-110 transition-all'/>
                            <div className='space-y-2'>
                                <h1 className='text-xl font-bold line-clamp-2'>{data.title}</h1>
                                <p className='line-clamp-2'>{data.desc}</p>
                            </div>
                        </div>
                        </UpdateFollower>
                    )
                })}
                 </div>
            </div>
            
        </section>
    </>
  )
}

export default Blog
