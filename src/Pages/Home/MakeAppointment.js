import React from 'react';
import appointment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor.png'
import MainButton from '../Shared/MainButton/MainButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background:`url(${appointment})`
        }} className='flex justify-center items-center my-12 rounded'>
            <div className='flex-1 md:block hidden'>
                <img className=' -mt-[140px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 text-white md:pl-0 md:py-0 p-4 py-4'>
                <h3 className='text-xl text-cyan-500'>Appointment</h3>
                <h1 className='text-3xl text-white my-2'>Make an appointment Today</h1>
                <p className='py-2'>Appointment is defined as a meeting set at a specific time. An example of the word appointment is when a time has been set to meet with a doctor on a specific date. noun.</p>
               <MainButton>Get Started</MainButton>
            </div>
            
        </section>
    );
};

export default MakeAppointment;