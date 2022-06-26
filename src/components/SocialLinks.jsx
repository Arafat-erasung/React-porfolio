import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

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
            href: "https://github.com/Arafat-erasung",
        },
        {
            id: 3,
            child: (
                <>Twitter <FaTwitter size={30}/></>
            ),
            href: "https://www.linkedin.com/in/arafat-erasung-16677a154/",
        },
        {
            id: 4,
            child: (
                <>YouTube <FaYoutube size={30}/> </>
            ),
            href: "https://www.linkedin.com/in/arafat-erasung-16677a154/",
            style: "rounded-br-md"
        },
    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>

        {Links.map(({id, child, href, style}) => (
            // eslint-disable-next-line no-useless-concat
            <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-slate-700 hover: rounded-md duration-300 hover:ml-[-10px]' + ' ' + style}>
            <a href={href}
            className='flex justify-between items-center w-full text-white'
            target='_blank' rel="noreferrer"
            >{child}</a></li>
        ))}
            
        </ul>
    </div>
  )
}

export default SocialLinks