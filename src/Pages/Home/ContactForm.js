import React from 'react';
import appointment from '../../assets/images/appointment.png';
import MainButton from '../Shared/MainButton/MainButton';
const ContactForm = () => {
    return (
        
        <div style={{
            background:`url(${appointment})`   
           }}  className='text-center py-8 rounded'>
           <p className='text-xl text-cyan-400 mb-4'>Contact Us</p>
           <h3 className='text-3xl mb-9'>Stay Connected With Us</h3>

           <div className=' w-[300px] mx-auto mb-4'>
               <input className='outline-none py-3 px-4 block border border-gray-400 w-full rounded my-2' type="email" placeholder='Email address'/>
               <input className='my-4 outline-none py-3 px-4 block border border-gray-400 w-full rounded' type="text" placeholder='Subject' />
               <textarea placeholder='Your Message' className='w-full resize-none outline-none  p-3 pl-3'></textarea>
           </div>
           <MainButton>Submit</MainButton>

       </div>
    );
};

export default ContactForm;