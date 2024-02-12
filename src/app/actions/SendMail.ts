"use server"

import React from 'react'
import { Resend } from 'resend';

const resend = new Resend("re_iycyNyB1_GBhPXSQAdDeFLE7k5xkdurch");


export const SendMail = async (formdata: FormData) => {
    console.log("This is send Mail Function")
    const name = formdata.get('name') as string;
    const email = formdata.get('email') as string;
    const phone = formdata.get('phone') as string;
    const profession = formdata.get('profession') as string;    
    const requirement = formdata.get('requirement') as string;
    const description = formdata.get('description') as string;
    

   try{
    const {data, error} = await resend.emails.send({
        from: 'theweekendcodershq@gmail.com',
        to: 'mukindramgs04@gmail.com',
        subject: 'Message From Resend',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProfession: ${profession}\nRequirement`
        })
    console.log(data);
    console.log(error);
   }catch(err){
    console.log(err)
   }

}

