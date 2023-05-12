import React from 'react'
import Image from 'next/image'
export default function AboutMe() {
  return (
    <div className='w-full lg:w-1/2 flex flex-col bg-lightPink border-2 rounded-[20px] about-shadow px-4' id='about'>
      <div className='flex flex-col md:flex-row items-center gap-4 bg-lightPink rounded-t-[20px] py-2'>
        <Image src='/Images/Jeyran.png' width={160} height={160} alt='Jeyran Jaberi' className='border-blue border-4 rounded-[50%]'/>
        <h3 className='bebas-font text-[56px] bg-lightPink'>Front-End, <br /> React Developer </h3>
      </div>
      <p className='py-4 bg-lightPink'>"As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques."</p>
      <p className='py-1 bg-lightPink '>
      "I enjoy a variety of activities in my free time, including watching anime, solving puzzles, drawing and exploring different types of food."
      </p>
      {/* Socials */}
      <div className='flex gap-3 py-4 bg-lightPink rounded-b-[20px] items-center'>
        <a href="https://instagram.com/jeylooj?igshid=NTc4MTIwNjQ2YQ==">
        <Image src='/Images/instagram.png' width={38} height={38} className='bg-lightPink' alt='instagram logo'/>
        </a>

        <a href="https://www.linkedin.com/in/jeyran-jaberi-902166164/">
        <Image src='/Images/linkedin.png' width={38} height={38}
        className='bg-lightPink' alt='linkedin logo'/>
        </a>
  
        <a href="https://github.com/jeylooj">
        <Image src='/Images/github.png' width={38} height={38}
        className='bg-lightPink' alt='github logo'/>
        </a>
       
      </div>
    </div>
  )
}
