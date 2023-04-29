import React from 'react'
import Image from 'next/image'
export default function ContactForm() {
  return (
    <section className='flex flex-col w-full lg:w-1/2'>
      <div className='flex items-center justify-between pb-10'>
      <h3 className='text-2xl'>I would like to hear from you!</h3>
      <Image src='/Images/Frames.png' width={76} height={20}/>
      </div>
      <div className='gap-6 flex flex-col'>
      <input type="text" placeholder='Your name' required className='border bg-white rounded-lg h-14 px-5 button-shadow'/>
      <input type="text" placeholder='Your surname' required
      className='border bg-white rounded-lg h-14 px-5 button-shadow' />
      <textarea name="" className='border bg-white rounded-lg
      h-32 px-5 button-shadow'></textarea>
      <button className='bg-lightYellow button-shadow rounded border h-10 w-1/3 mt-8'>GET IN TOUCH</button>
      </div>
    </section>
  )
}
