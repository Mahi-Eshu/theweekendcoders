"use client"

import React from 'react'
import {SendMail} from '@/app/actions/SendMail'
import SubmitButton from '@/app/components/SubmitButton'
import { useRef } from 'react'

const Form = () => {
    const ref = useRef(null);

  return (
    <form ref={ref} action={async (formData) => {
        const result = await SendMail(formData)
        console.log(result)
        
        if(result.status === 200) {
            alert('Thank you for contacting us. We will get back to you soon.')
        }
        ref.current?.reset()
      }}>
    <div className='max-w-[1100px] mx-auto pb-10 flex flex-col gap-10'>
        <div className='flex flex-col gap-10 md:flex-row md:justify-between'>
            <div className='flex flex-col gap-2'>
                <label htmlFor='name' className='text-2xl font-medium tracking-tighter'>Full Name</label>
                <input type="text" name="name" id="name" className='backdrop-blur-md bg-black/20 p-3 md:w-[450px] h-[60px] border-b-2 rounded-sm border-white placeholder:text-white' placeholder='Enter Your Name' required/>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor='email' className='text-2xl font-medium tracking-tighter'>Email ID</label>
                <input type="email" name="email" id="email" className='backdrop-blur-md bg-black/20 p-3 md:w-[450px] h-[60px] border-b-2 rounded-sm border-white placeholder:text-white' placeholder='Enter Your Email' required/>
            </div>
        </div>
        <div className='flex flex-col gap-10 md:flex-row md:justify-between'>
            <div className='flex flex-col gap-2'>
                <label htmlFor='phone' className='text-2xl font-medium tracking-tighter'>Phone Number</label>
                <input type="text" name="phone" id="phone" className='backdrop-blur-md bg-black/20 p-3 md:w-[450px] h-[60px] border-b-2 rounded-sm border-white placeholder:text-white' maxLength={10} placeholder='Enter Your Phone Number' required/>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor='profession' className='text-2xl font-medium tracking-tighter'>Profession</label>
                <select name="profession" id="profession" className='backdrop-blur-md bg-black/20 p-3 md:w-[450px] h-[60px] border-b-2 rounded-sm border-white '>
                    <option value="">Select Your Role</option>
                    <option value="Business owner">Business Owner</option>
                    <option value="Business Associate">Business Associate</option>
                    <option value="Student">Student</option>
                    <option value="Others">Others</option>
                </select>
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <div className='flex flex-col flex-wrap gap-4'>
            <label htmlFor='requirement' className='text-2xl font-medium tracking-tighter'>You're Interested In</label>
                <select name="requirement" id="requirement" className='backdrop-blur-md bg-black/20 p-3 md:w-[450px] h-[60px] border-b-2 rounded-sm border-white '>
                    <option value="">Select Your Requirement</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Landing Site">Landing Site</option>
                    <option value="UI / UX Design">UI / UX Design</option>
                    <option value="Software as a service">Software as a service</option>
                </select>
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <label htmlFor="description" className='text-2xl font-medium tracking-tighter'>Project Description</label>
            <textarea name="description" id="description" cols={10} rows={6} className='backdrop-blur-md bg-black/20 p-3 border-b-2 border-white placeholder:text-white' placeholder='Tell us about your requirement...' required></textarea>
        </div>
        <SubmitButton />
    </div>
</form>
  )
}

export default Form
