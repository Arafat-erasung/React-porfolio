import React from 'react'
import profile from '../assets/profile img.jpg'
import {FaArrowRight} from 'react-icons/fa'

const Home = () => {
  return (
    <div name="home" 
    className='h-screen w-full bg-gradient-to-b from-black to-slate-800'>
        <div className='max-w-screen-lg mx-auto items-center justify-center flex flex-col h-full md:flex-row text-white'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl text-white font-bold'>I'm a Full Stack Developer</h2>
                <p className='text-gray-500 py-4 max-w-medium'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r cursor-pointer'>
                    Portfolio 
                     <span className='px-2 group-hover:rotate-90 duration-300'> <FaArrowRight /></span>
                </button>
            </div>
            <div 
            className='mx-auto md:w-full'>
            <img className='rounded-2xl' src={profile} alt={profile}/></div>
        </div>
    </div>
  )
}

export default Home