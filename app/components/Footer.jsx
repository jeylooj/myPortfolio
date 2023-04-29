import React from 'react'
import Image from 'next/image'
export default function Footer() {
  return (
    <section className='bg-black flex items-center justify-center py-2'>
      <Image src='/Images/Logo.png' width={326} height={48} className='bg-black' alt='Jeylooj logo'/>
    </section>
  )
}
