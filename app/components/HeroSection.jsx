import React from 'react'
import Image from 'next/image'
export default function HeroSection() {
  return (
    <section className='flex-col flex lg:flex-row items-center px-36 h-screen justify-between'>
      {/* Text Box */}
      <div className='flex flex-col gap-4'>
      <span className='text-[23px]'>“Hi, my name is Jeyran</span>
      <h1 className='bebas-font text-7xl'>
      Front-End,<br/>
      React Developer 
      </h1>
      <p className='w-full lg:w-[450px] text-[23px]'>Based in Poland, with a passion for designing beautiful and responsive user interfaces."</p>
           {/* Buttons */}
           <div className='flex gap-x-6 mt-14'>
            {/* Resume Button */}
        <button className='w-[165px] h-[50px] border-2 bg-green rounded-[5px] hover:border-orange button-shadow'>
        <a href="" download={'d'}
        className='bg-green text-lg'>
          Resume
        </a></button>
        {/* Contact Button */}
        <button className='w-[165px] h-[50px] border-2 bg-lightYellow rounded-[5px] hover:border-green button-shadow'>
        <a href="#contact"
        className='text-lg bg-lightYellow'>
          Contact me
        </a></button>
       </div>
      </div>
  
      {/* Image box */}
     <Image src='/Images/jeyran.gif' width={452} height={509} className='hero-shadow invisible lg:visible' alt='A programmer girl working on her computer'/>
    </section>
  )
}
