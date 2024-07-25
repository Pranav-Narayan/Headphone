import React, { useState } from 'react'
import { headphonesData } from '../../data/headphonesData'
import {FaWhatsapp} from 'react-icons/fa'
import { UpdateFollower } from 'react-mouse-follower'
import { easeIn, easeInOut, motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

const fadeUp = (delay) => {
  return {
    hidden: {
      opacity:0,
      y:100,
      scale:0.5,
    },
    show:{
      opacity:1,
      y:0,
      scale:1,
      transtion:{
        duration:0.5,
        delay:delay,
        ease: easeInOut
      }
    },
    exit:{
      opacity:0,
      y:50,
      scale:0.5,
      transition:{
        duration:0.2,
        ease:easeInOut,
      }
    }
  }
}

const Hero = () => {
  const [activeData, setActiveData] = useState(headphonesData[0])

  const handleActiveData = (data) =>{
      setActiveData(data);
  };


  return (
    <>
        <section className='bg-brandDark text-white font-varela'>
            <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[500px]'>

                {/* {------brand info------} */}
                  <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]'>
                    <div className='space-y-5 text-center md:text-left'>
                        
                        <AnimatePresence mode='wait'>
                            <UpdateFollower
                                mouseOptions={{
                                  backgroundColor:'white',
                                  zIndex:9999,
                                  followSpeed:0.5,
                                  rotate:-720,
                                  mixBlendMode:'difference',
                                  scale:10,
                                }}
                            >
                                <motion.h1
                                key={activeData.id}
                                  variants={fadeUp(0.5)}
                                  initial="hidden"
                                  animate="show"
                                  exit="exit"
                                className='text-3xl lg:text-6xl font-bold font-varela'>{activeData.title}</motion.h1>
                            </UpdateFollower>
                        </AnimatePresence>
                        
                        <AnimatePresence mode='wait'>
                            <motion.p
                                key={activeData.id}
                                variants={fadeUp(0.4)}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                            className='text-sm leading-loose text-white/80'>{activeData.subtitle}</motion.p>
                        </AnimatePresence>

                        <AnimatePresence mode='wait'>
                              <UpdateFollower
                                mouseOptions={{
                                  backgroundColor:activeData.bgcolor,
                                  zIndex:9999,
                                  followSpeed:0.5,
                                  rotate:-720,
                                  mixBlendMode:'difference',
                                  scale:4,
                                  backgroundElement:<div>
                                    <img src={activeData.image} alt="" />
                                    </div>
                                }}
                              >
                                <motion.button 
                                    key={activeData.id}
                                    variants={fadeUp(0.3)}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                  style={{backgroundColor:activeData.bgcolor}} className='px-4 py-2 inline-block font-normal rounded-sm'>Buy And Listen</motion.button>
                              </UpdateFollower>
                        </AnimatePresence>
                    
                        {/* ------headphone list seperator--------- */}
                        <div className='flex items-center justify-center md:justify-start gap-4 !mt-20'>
                          <div className='w-20 h-[1px] bg-white'></div>
                          <p className='uppercase text-sm'>top headphones for you</p>
                          <div className='w-20 h-[1px] bg-white'></div>
                        </div>

                        {/* ------- headphone list switcher ---------  */}
                        <div className='grid grid-cols-3 gap-10'>
                            {headphonesData.map((item)=>{
                              return(
                                <div onClick={ ()=> handleActiveData(item) } className='grid grid-cols-2 place-items-center cursor-pointer hover:scale-110 transition-all'>
                                    <div><img className='w-[200px]' src={item.image} alt="" /></div>
                                    <div className='space-y-5'>
                                        <p className='text-base font-bold '>{item.price}</p>
                                        <p className='text-xs font-normal text-nowrap'>{item.model}</p>
                                    </div>
                                </div>
                              )
                            })}
                        </div>

                    </div>
                  </div>

                    {/* {------hero image------} */}

                    <div className='flex flex-col justify-end item-center'>
                       <AnimatePresence mode='wait'>
                       <motion.img 
                            key={activeData.id}
                            initial={{opacity:0,scale:0.9,y:100}}
                            animate={{opacity:1,scale:1,y:0}}
                            transition={{duration:0.4,delay:0.2,ease:easeInOut}}
                            exit={{
                              opacity:0,
                              scale:0.9,
                              y:100,
                              transition:{
                                duration:0.2
                              }
                            }}
                       src={activeData.image} alt="" className='w-[300px] md:w-[400px] xl:w-[550px] mx-auto'/>
                       </AnimatePresence>
                    </div>
                    {/* {------whatsapp icon------} */}
                    <div className='text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[9999] mix-blend-difference'>
                        <a href="">
                            <FaWhatsapp/>
                        </a>
                    </div>
            </div>
        </section>
    </>
  )
}

export default Hero
