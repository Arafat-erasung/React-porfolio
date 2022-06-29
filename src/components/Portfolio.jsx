import React from 'react'
import calculator from '../assets/portfolio/calculator.png'
import summarycard from '../assets/portfolio/order-summary.jpg'
import randomquote from '../assets/portfolio/randomquote.png'
import techdocs from '../assets/portfolio/technical docs page.png'
import timetracking from '../assets/portfolio/time-tracking active.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src: calculator
        },
        {
            id:2,
            src: summarycard
        },
        {
            id:3,
            src: randomquote
        },
        {
            id:4,
            src: techdocs
        },
        {
            id:5,
            src: timetracking
        },
        {
            id:6,
            src: reactWeather
        },
    ]

  return (
    <div name="portfolio" 
    className='bg-gradient-to-b from-black to bg-slate-700 w-full text-white md:h-screen pb-11'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-slate-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work</p>
            </div>
            

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            {
                portfolios.map(({id, src}) => {
                    return <div key={id} className='shadow-md shadow-slate-600 rounded-lg h-80'>
                    <img src={src} alt='' className='rounded-md duration-200 hover:scale-105 h-60 w-full'/>

                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 py-3 px-6 m-4 duration-200 hover:scale-105'>Demo</button>
                        <button className='w-1/2 py-3 px-6 m-4 duration-200 hover:scale-105'>Code</button>
                    </div>
                </div>
                })
            }
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio