import React from 'react'
import Image from 'next/image'
export default function AboutMe() {
  return (
    <div className='w-full lg:w-1/2 flex flex-col bg-lightPink border-2 rounded-[20px] about-shadow px-4' id='about'>
      <div className='flex flex-col md:flex-row items-center gap-4 bg-lightPink rounded-t-[20px] py-2'>
        <Image src='/Images/Jeyran.png' width={160} height={160} alt='Jeyran Jaberi' className='border-blue border-4 rounded-[50%]'/>
        <h3 className='bebas-font text-[56px] bg-lightPink'>Front-End, <br /> React Developer </h3>
      </div>
      <p className='py-6 bg-lightPink'>"I'm always available to discuss your project, share my knowledge about UX/UI best practices, and assist you with any design challenges you may face."</p>
      <p className='py-6 bg-lightPink '>
      "I enjoy a variety of activities in my free time, including watching anime, solving puzzles, drawing and exploring different types of food."
      </p>
      {/* Socials */}
      <div className='flex gap-3 py-4 bg-lightPink rounded-b-[20px] items-center'>
        <Image src='/Images/instagram.png' width={38} height={38} className='bg-lightPink' alt='instagram logo'/>
        <Image src='/Images/linkedin.png' width={38} height={38}
        className='bg-lightPink' alt='linkedin logo'/>
        <Image src='/Images/github.png' width={38} height={38}
        className='bg-lightPink' alt='github logo'/>
      </div>
    </div>
  )
}
