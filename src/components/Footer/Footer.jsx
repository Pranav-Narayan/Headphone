import React from 'react'
import { FaPhone} from 'react-icons/fa'
import { FaMapLocation } from 'react-icons/fa6'
import { FaFacebook,FaInstagram,FaTelegram,FaGoogle } from 'react-icons/fa6'
import cards from '/src/assets/credit-cards.webp'


const Footer = () => {
  return (
    <>
        <footer className='bg-primary pt-12 pb-8 text-white'>
            <div className="container">
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {/* ---------company details---------- */}
                    <div className='space-y-3'>
                        <h1 className='text-3xl font-bold uppercase'>Playing</h1>
                        <p className='text-sm max-w-[300px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum similique sint assumenda suscipit obcaecati voluptate beatae dolorum, fugit quam, esse blanditiis ea iste laborum aut. Est optio voluptas soluta provident?</p>
                        <div>
                            <p className='flex items-center gap-2'>
                                <FaPhone/>
                                +91 7775553335
                            </p>
                            <p className='flex items-center gap-2 mt-2'>
                                <FaMapLocation/>
                                Kochi,Kerala
                            </p>
                        </div>
                    </div>
                    {/* ------ footer link section -----  */}
                    <div className='space-y-6'>
                        <h1 className='text-3xl font-bold'>Quick Links</h1>
                        <div>
                            <ul className='space-y-3'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact Us</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                    {/* ------ social link section ------ */}
                    <div className='space-y-6'>
                        <h1 className='text-3xl font-bold'>Follow Us</h1>
                        <div className='flex items-center gap-3'>
                            <FaFacebook className='text-3xl hover:scale-125 duration-300'/>
                            <FaInstagram className='text-3xl hover:scale-125 duration-300'/>
                            <FaTelegram className='text-3xl hover:scale-125 duration-300'/>
                            <FaGoogle className='text-3xl hover:scale-125 duration-300'/>
                        </div>
                        <div className='space-y-2'>
                            <p>Payment Methods</p>
                            <img src={cards} alt="" className='w-[80%]'/>
                        </div>
                    </div>
                </div>
                {/* --------copyright section ---------  */}
                <p className='text-white text-center mt-8 border-t-2 pt-8'>© 2024. All Rights are Reserved || ABC Headphones</p>
            </div>
        </footer>
    </>
  )
}

export default Footer
