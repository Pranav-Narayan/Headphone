import React from 'react'
import { servicesData } from '../../data/servicesData'
import { UpdateFollower } from 'react-mouse-follower'

const Services = () => {
  return (
    <>
        <section className='bg-gray-100 font-poppins py-8'>
            <div className="container py-14">
                <h1 className='text-3xl font-bold text-center pb-10'>Services</h1>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {servicesData.map( (data)=>(
                    <UpdateFollower 
                        mouseOptions={{
                            backgroundColor:'white',
                            zIndex:9999,
                            followSpeed:0.5,
                            scale:5,
                            rotate:720,
                            mixBlendMode:'darken',
                            backgroundElement:(
                                <div>
                                    <img src={data.icon} alt="" />
                                </div>
                            )
                        }}
                    >
                        <div className='flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white'>
                            <img src={data.icon} alt="" className='w-[100px] mb-4'/>
                            <div className='text-center space-y-2'>
                                <h1 className='text-2xl font-bold'>{data.titile}</h1>
                                <p className='text-center text-sm text-black/75'>{data.desc}</p>
                            </div>
                        </div>
                    </UpdateFollower>
                ) )}
            </div>
            </div>
        </section>
    </>
  )
}

export default Services
