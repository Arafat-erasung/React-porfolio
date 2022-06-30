import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import github from '../assets/github.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import tailwind from '../assets/tailwind.png'


const Experience = () => {

    const skills = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: tailwind,
            title: 'TAILWINDCSS',
            style: 'shadow-blue-700'
        },
        {
            id: 4,
            src: github,
            title: "GITHUB",
            style: 'shadow-cyan-500'
        },
        {
            id: 5,
            src: reactImage,
            title: "REACT",
            style: 'shadow-blue-600'
        },
        {
            id: 6,
            src: javascript,
            title: "JAVASCRIPT",
            style: 'shadow-yellow-500'
        },
    ]

  return (
    <div name="experience" className='bg-gradient-to-b from-slate-700 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-5 flex flex-col justify-center w-full h-screen text-white'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-slate-500'>Experience</p>
                <p className='py-6'>These are the technologies I work with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-col-3 gap-8 text-center py-8 px-12 sm:px-0'>
            {
                skills.map(({id, src, title, style}) => (
                    <div key={id} className={`shadow-md rounded-lg py-2 hover:scale-105 duration-500 ${style}`}>
                        <img src={src} alt='' className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>
                ))
            }
               
            </div>
        </div>
    </div>
  )
}

export default Experience