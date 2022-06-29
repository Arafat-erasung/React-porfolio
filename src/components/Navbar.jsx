import React, { useState } from 'react'
import { FaTimes, FaBars } from "react-icons/fa"
import {Link} from 'react-scroll'

const Navbar = () => {

  const [nav, setNav] = useState(false)

  const links = [
    {
      id: 1,
      link: "Home"
    },
    {
      id: 2,
      link: "About"
    },
    {
      id: 3,
      link: "Experience"
    },
    {
      id: 4,
      link: "contact"
    },
    {
      id: 5,
      link: "portfolio"
    },
  ]

  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black'>
      <h1 className='px-4 text-4xl '>Erasung</h1>
      <ul className='hidden md:flex mr-10'>
      {links.map(({id, link}) => {
        return <li 
        key={id} 
        className='px-4 cursor-pointer font-medium text-gray-600 hover:text-white'>
        {link}</li>
      })}
      </ul>

      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-white md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col items-center justify-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-slate-800 text-white'>
      {links.map(({id, link}) => {
        return <li 
        key={id} 
        className='px-4 cursor-pointer font-medium text-grey-600 hover:text-white text-4xl py-6'>
        <Link to="{link}" smooth duration={500}>{link}</Link></li>
      })}
      </ul>
      )}

      
    </div>
  )
}

export default Navbar