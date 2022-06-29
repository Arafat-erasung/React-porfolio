import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='text-white w-full bg-gradient-to-b from-black to-gray-800 p-4'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-slate-500'>Contact</p>
                <p className='py-6'>Get in touch by filling out the form below</p>
            </div>

            <div>
                <form className='flex flex-col w-full md:w-1/2'>
                    <input 
                    name='name' 
                    type='text' 
                    placeholder='Enter your name' 
                    className='p-2 bg-transparent rounded-md text-white
                    border-2 focus:outline-none'/>
                    <input 
                    name='email' 
                    type='text' 
                    placeholder='Enter your email' 
                    className='p-2 bg-transparent rounded-md text-white
                    border-2 focus:outline-none'/>
                    <textarea name="message" rows="10" className='p-2 bg-transparent rounded-md text-white
                    border-2 focus:outline-none'></textarea>

                    <button className='text-white w-fit px-6 py-3 my-8 mx-auto flex items-center rounded-md bg-gradient-to-b from-cyan-500 to-slate-900 cursor-pointer hover:scale-110 duration-300'>Buy me coffee</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact