import React from 'react'
import AboutMe from './AboutMe'
import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <section className='py-[110px] lg:px-[148px] px-8' id='contact' >
      <h2 className='bebas-font text-center lg:text-7xl text-5xl'>
        Contact me
        </h2>
        <section className='pt-[110px] flex flex-col lg:flex-row justify-between gap-16'>
        <AboutMe/>
        <ContactForm/>
        </section>
      
    </section>
  )
}
