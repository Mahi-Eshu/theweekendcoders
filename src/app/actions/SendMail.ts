"use server"

import React from 'react'

export const SendMail = async (formdata: FormData) => {
    console.log("This is send Mail Function")
    const name = formdata.get('name') as string;
    const email = formdata.get('email') as string;
    const phone = formdata.get('phone') as string;
    const profession = formdata.get('profession') as string;    
    const requirement = formdata.get('requirement') as string;
    const description = formdata.get('description') as string;
    

}

