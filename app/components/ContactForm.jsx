'use client'

import Image from 'next/image'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2eix2wx', 'template_857fv77', form.current, 'lCQWqcFGkMB1-IQdB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <form className='flex flex-col w-full lg:w-1/2' ref={form} onSubmit={sendEmail}>
      <div className='flex items-center justify-between pb-10'>
      <h3 className='text-2xl'>I would like to hear from you!</h3>
      <Image src='/Images/Frames.png' width={76} height={20}/>
      </div>
      <div className='gap-6 flex flex-col'>
      <input type="text" placeholder='Name' required className='border bg-white rounded-lg h-14 px-5 button-shadow' name='user_name'/>
      <input type="email" placeholder='Email' required name='user_email'
      className='border bg-white rounded-lg h-14 px-5 button-shadow' />
      <textarea name="message" className='border bg-white rounded-lg
      h-32 px-5 button-shadow'></textarea>
      <input className='bg-lightYellow button-shadow rounded border h-10 w-1/3 mt-8 cursor-pointer' type='submit' value="Get In Touch"/>
      </div>
    </form>
  )
}
