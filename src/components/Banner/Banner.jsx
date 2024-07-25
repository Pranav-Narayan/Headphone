import React from 'react'
import headphone from '../../assets/headphone4.png'
import {AnimatePresence, motion,easeInOut} from 'framer-motion'
import { UpdateFollower } from 'react-mouse-follower'

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

const Banner = () => {
  return (
    <>
        <section>
            <div className='container py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-5'>
                {/* -------- banner image --------  */}
                <div>
                    <motion.img 
                        initial={{opacity:0,x:-100,rotate:-180}}
                        whileInView={{opacity:1,x:0,rotate:0}}
                        transition={{duration:0.8,delay:0.2,ease:'easeInOut'}}
                    src={headphone} alt=""  className='w-[300px] md:W-[400px] mx-auto'/>
                </div>
                {/* --------- banner text ------- */}
                <div className='flex flex-col justify-center'>
                    <div className='text-center md:text-left space-y-4 lg:max-w-[450px]'>
                        <AnimatePresence>
                            <motion.h1 
                                variants={fadeUp(0.4)}
                                initial="hidden"
                                whileInView="show"
                                exit="exit"
                            className='text-3xl lg:text-4xl font-semibold font-poppins'>The Latest Headphones With The Latest Technology</motion.h1>
                        </AnimatePresence>
                        <AnimatePresence>
                            <motion.p
                                variants={fadeUp(0.8)}
                                initial="hidden"
                                whileInView="show"
                                exit="exit"
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi inventore incidunt ipsam saepe porro quisquam magni itaque, est blanditiis quae dolor debitis quaerat quidem? Obcaecati nostrum esse qui nisi dolorum.</motion.p>
                        </AnimatePresence>
                        
                        <UpdateFollower 
                            mouseOptions={{
                                backgroundColor:'white',
                                zIndex:9999,
                                followSpeed:0.5,
                                mixBlendMode:'difference',
                                scale:6
                            }}
                        >
                            <button className='border-2 border-[#e33343] text-[#e33343] px-6 py-2 rounded-md hover:bg-[#e33343] hover:text-white'>Shop Now</button>
                        </UpdateFollower>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner
