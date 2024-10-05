import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from "../assets/folaProfile.png"

const Hero = () => {
  return (
    <div className='border-b  border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 className='pb-16 text-6xl font-thin tracking-tight lg:my-16 lg:text-8xl'>Afolabi Adekanle</h1>
                    <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-4xl tracking-tight" >
                        Full Stack Developer
                    </span>
                    <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                        {HERO_CONTENT}
                    </p>
                </div>
            </div>
            <div className='w-fulllg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <img src={profilePic} alt="profile picture" className='rounded-2xl'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
