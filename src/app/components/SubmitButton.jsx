'use client'
 
import { useFormStatus } from 'react-dom'
import React from 'react'

const SubmitButton = () => {
    const { pending } = useFormStatus();
  return (
    <button type="submit" className={`w-[250px] h-[60px] rounded-md bg-white text-black font-semibold tracking-tighter ${pending ? `cursor-not-allowed opacity-50`:``}`} >
        {
            pending? `Submitting...` : `Submit`
        }
    </button>
  )
}

export default SubmitButton
