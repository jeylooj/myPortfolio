import React from 'react'

export default function TechStackSection() {
  return (
    <section className='h-screen flex flex-col gap-y-[110px]'>
      <h2 className='bebas-font text-center lg:text-7xl text-5xl'>My Tech Stacks</h2>
      {/* Cards */}
      <div className='flex flex-col items-center justify-center lg:flex-row lg:px-[148px] gap-[77px]'>
        {/* Language box */}
        <div className='cards-shadow w-80 h-[400px] bg-white'>
          <h3 className='bebas-font rounded-t-2xl h-14 border-b-4 bg-lightBrown text-2xl px-8 py-3 mb-8'>Languages</h3>
          <ol>
          <li className='list-items'>HTML</li>
          <li className='list-items'>CSS</li>
          <li className='list-items'>JAVASCRIPT</li>
          <li className='list-items'>TYPESCRIPT</li>
          </ol>
        </div>
        {/* Frameworks */}
        <div className='cards-shadow w-80 h-[400px] bg-white'>
          <h3 className='bebas-font rounded-t-2xl h-14 border-b-4 bg-green text-2xl px-8 py-3 mb-8'>Frameworks</h3>
          <ol>
          <li className='list-items'>React JS</li>
          <li className='list-items'>Tailwind CSS</li>
          <li className='list-items'>Next JS</li>
          <li className='list-items'>Sass</li>
          <li className='list-items'>Bootstarp</li>
          </ol>
        </div>
        {/* Tools */}
        <div className='cards-shadow w-80 h-[400px] bg-white'>
          <h3 className='bebas-font rounded-t-2xl h-14 border-b-4 bg-pink text-2xl px-8 py-3 mb-8'>TOOLS</h3>
          <ol>
          <li className='list-items'>Github</li>
          <li className='list-items'>Git</li>
          <li className='list-items'>Postman</li>
          <li className='list-items'>Agile</li>
          <li className='list-items'>Figma</li>
          </ol>
        </div>
      </div>
    </section>
  )
}
