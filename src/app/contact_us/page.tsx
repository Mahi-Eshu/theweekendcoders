import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Form from '../components/Form'

const page = () => {   
     
    return (
        <div>
            <NavBar />
            <h1 className='text-[48px] md:text-[64px] tracking-[-4px] font-medium text-center my-11 text-white'>Contact Us</h1>
            <section className='px-4 md:px-16 text-white'>
                <Form />
            </section>

            <Footer />

        </div>
    )
}

export default page
