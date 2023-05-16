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
          <h4 className='bebas-font text-[20px]'>Techstack: NextJs - ReactJs - TailwindCSS</h4>
          <p className='text-2xl font-thin'>Posuere diam elit phasellus integer nisi quam tristique consequat. Vitae pellentesque egestas ultrices ultrices nisi neque libero viverra.</p>
          <div className='flex justify-between'>
          <button className='bg-lightYellow button-shadow border-2 rounded w-[146px] h-[50px] text-base mt-10'>
            <a href="www.jeylooj.com" className='bg-lightYellow'>VIEW WEBSITE</a></button>
          <button className='bg-blue button-shadow border-2 rounded w-[146px] h-[50px] text-base mt-10'>
            <a href="https://github.com/jeylooj/myPortfolio.git" className='bg-blue'>VIEW CODE</a></button>
          </div>
       
        </div>
        {/* Images box */}
        <div className='flex flex-col-reverse lg:flex-row gap-[38px] w-full md:w-2/3 items-center'>
          <Image src='/Images/portfolio.png' width={500} height={382} className='rounded-[20px] image-border' alt='project sample'/>
          <Image src='/Images/portfolio-mobile.PNG' width={143} height={282} className='rounded-[19px] mobile-border' alt='project sample'/>
        </div>
      </section>
      {/* FITUP app */}
      <section className='flex flex-col lg:flex-row-reverse items-start gap-4'>
        {/* Info box */}
        <div className='w-full md:w-1/3 flex flex-col gap-4'>
          <h3 className='bebas-font text-[40px]'>FITUP</h3>
          <h4 className='bebas-font text-[20px]'>Techstack: NextJs - ReactJs - TailwindCSS - SASS</h4>
          <p className='text-2xl font-thin'>Posuere diam elit phasellus integer nisi quam tristique consequat. Vitae pellentesque egestas ultrices ultrices nisi neque libero viverra.</p>
          <div className='flex justify-between'> 
          <button className='bg-green button-shadow border-2 rounded w-[146px] h-[50px] text-base mt-10'><a href="https://fitup-wseh.vercel.app/" className='bg-green'>VIEW WEBSITE</a></button>
          <button className='bg-yellow button-shadow border-2 rounded w-[146px] h-[50px] text-base mt-10'><a href="https://github.com/jeylooj/fitup.git" className='bg-yellow'>VIEW CODE</a></button>
          </div>
        </div>
        {/* Images box */}
        <div className='flex flex-col-reverse lg:flex-row gap-[38px] w-full md:w-2/3 items-center'>
          <Image src='/Images/fitup.png' width={500} height={382} className='rounded-[20px] image-border bg-[#D86451]' alt='project sample'/>
          <Image src='/Images/fitup-mobile.jpeg' width={143} height={282} className='rounded-[20px] mobile-border bg-[#D86451]' alt='project sample'/>
        </div>
      </section>
      {/* SUSHI BAR*/}
      <section className='flex flex-col lg:flex-row items-start gap-4'>
        {/* Info box */}
        <div className='w-full md:w-1/3 flex flex-col gap-4'>
          <h3 className='bebas-font text-[40px]'>Sushi Bar</h3>
          <h4 className='bebas-font text-[20px]'>Techstack: Javascript - html - css</h4>
          <p className='text-2xl font-thin'>Posuere diam elit phasellus integer nisi quam tristique consequat. Vitae pellentesque egestas ultrices ultrices nisi neque libero viverra.</p>
          <div className='flex justify-between'>
          <button className='bg-pink button-shadow border-2 rounded w-[146px] h-[50px] text-base mt-10'><a href="https://sushi-bar.vercel.app/" className='bg-pink'>VIEW WEBSITE</a></button>
          <button className='bg-lightYellow button-shadow border-2 rounded w-[146px] h-[50px] text-base mt-10'><a href="https://github.com/jeylooj/sushiBar.git" className='bg-lightYellow'>VIEW CODE</a></button>
          </div>
        </div>
        {/* Images box */}
        <div className='flex flex-col-reverse lg:flex-row gap-[38px] w-full md:w-2/3 items-center'>
          <Image src='/Images/sushi.png' width={500} height={382} className='rounded-[20px] image-border bg-[#FFF2EA]' alt='project sample'/>
          <Image src='/Images/sushi-mobile.jpeg' width={143} height={282} className='rounded-[20px] mobile-border bg-[#FFF2EA]' alt='project sample'/>
        </div>
      </section>
    </section>
  )
}
