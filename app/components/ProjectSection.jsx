import React from 'react'
import Image from 'next/image'
export default function ProjectSection() {
  return (
    <section className='py-16 flex flex-col gap-y-[160px] items-center justify-center lg:px-[148px] px-8 lg:py-[110px]' id='projects'>
      <h2 className='bebas-font text-center lg:text-7xl text-5xl'>
        My Projects
        </h2>
      {/* Portfolio */}
      <section className='flex flex-col lg:flex-row items-start gap-4'>
        {/* Info box */}
        <div className='w-full md:w-1/3 flex flex-col gap-4'>
          <h3 className='bebas-font text-[40px]'>Personal Portfolio</h3>
          <h4 className='bebas-font text-[28px]'>Techstack</h4>
          <p className='text-2xl font-thin'>Posuere diam elit phasellus integer nisi quam tristique consequat. Vitae pellentesque egestas ultrices ultrices nisi neque libero viverra.</p>
          <button className='bg-lightYellow button-shadow border-2 rounded w-[146px] h-[50px] text-base mt-10'><a href="#"></a>VIEW WEBSITE</button>
        </div>
        {/* Images box */}
        <div className='flex flex-col-reverse lg:flex-row gap-[38px] w-full md:w-2/3 items-center'>
          <Image src='/Images/web.png' width={500} height={382} className='rounded-[20px]' alt='project sample'/>
          <Image src='/Images/mobile.png' width={143} height={282} className='rounded-[20px]' alt='project sample'/>
        </div>
      </section>
      {/* Fit Up */}
      <section className='flex flex-col lg:flex-row-reverse items-start gap-4'>
        {/* Info box */}
        <div className='w-full md:w-1/3 flex flex-col gap-4'>
          <h3 className='bebas-font text-[40px]'>Personal Portfolio</h3>
          <h4 className='bebas-font text-[28px]'>Techstack</h4>
          <p className='text-2xl font-thin'>Posuere diam elit phasellus integer nisi quam tristique consequat. Vitae pellentesque egestas ultrices ultrices nisi neque libero viverra.</p>
          <button className='bg-green button-shadow border-2 rounded w-[146px] h-[50px] text-base mt-10'><a href="#"></a>VIEW WEBSITE</button>
        </div>
        {/* Images box */}
        <div className='flex flex-col-reverse lg:flex-row gap-[38px] w-full md:w-2/3 items-center'>
          <Image src='/Images/web.png' width={500} height={382} className='rounded-[20px]' alt='project sample'/>
          <Image src='/Images/mobile.png' width={143} height={282} className='rounded-[20px]' alt='project sample'/>
        </div>
      </section>
      {/* Weather app */}
      <section className='flex flex-col lg:flex-row items-start gap-4'>
        {/* Info box */}
        <div className='w-full md:w-1/3 flex flex-col gap-4'>
          <h3 className='bebas-font text-[40px]'>Personal Portfolio</h3>
          <h4 className='bebas-font text-[28px]'>Techstack</h4>
          <p className='text-2xl font-thin'>Posuere diam elit phasellus integer nisi quam tristique consequat. Vitae pellentesque egestas ultrices ultrices nisi neque libero viverra.</p>
          <button className='bg-pink button-shadow border-2 rounded w-[146px] h-[50px] text-base mt-10'><a href="#"></a>VIEW WEBSITE</button>
        </div>
        {/* Images box */}
        <div className='flex flex-col-reverse lg:flex-row gap-[38px] w-full md:w-2/3 items-center'>
          <Image src='/Images/web.png' width={500} height={382} className='rounded-[20px]' alt='project sample'/>
          <Image src='/Images/mobile.png' width={143} height={282} className='rounded-[20px]' alt='project sample'/>
        </div>
      </section>
    </section>
  )
}
