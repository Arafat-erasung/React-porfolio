import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {

    const Links = [
        {
            id: 1,
            child: (
                <>Linkedin <FaLinkedin size={30}/></>
            ),
            href: "https://www.linkedin.com/in/arafat-erasung-16677a154/",
            style: "rounded-tr-md"
        },
        {
            id: 2,
            child: (
                <>Github <FaGithub size={30} /></>
            ),
            href: "https://www.linkedin.com/in/arafat-erasung-16677a154/",
            style: "rounded-tr-md"
        },
        {
            id: 2,
            child: (
                <>Linkedin <FaLinkedin size={30}/></>
            ),
            href: "https://www.linkedin.com/in/arafat-erasung-16677a154/",
            style: "rounded-tr-md"
        },
        {
            id: 1,
            child: (
                <>Linkedin <FaLinkedin size={30}/></>
            ),
            href: "https://www.linkedin.com/in/arafat-erasung-16677a154/",
            style: "rounded-tr-md"
        },
    ]

  return (
    <div className='flex-col top-[35%] left-0 fixed'>
        <ul>
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-slate-700 hover: rounded-md duration-300 hover:ml-[-10px]'><a href=''
            className='flex justify-between items-center w-full text-white'
            >Linkedin <FaLinkedin size={30}/></a></li>
        </ul>
    </div>
  )
}

export default SocialLinks