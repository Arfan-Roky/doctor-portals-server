import React from 'react';
import quote from '../../assets/icons/quote.svg';
import patient1 from '../../assets/images/people1.png'
import patient2 from '../../assets/images/people2.png'
import patient3 from '../../assets/images/people3.png'
import PatientSays from './PatientSays';


const Testimonials = () => {

    const patientsSays = [
        {id:1, img: patient1, name:'Will Smith', location:'California', desc:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'}, 
        {id:2, img: patient2, name:'Angelina Jole', location:'Los Angels', desc:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'}, 
        {id:3, img: patient3, name:'Sara Khan', location:'London', desc:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'}, 

    ]


    return (
        <div className='mb-28'>
            <div className='flex justify-between items-center md:h-[400px]'>
                <div className='md:mb-0 mb-5'>
                    <p className='text-xl font-semibold text-cyan-400'>Testimonial</p>
                    <h3 className='md:text-4xl font-semibold text-2xl'>What Our Patients Says</h3>
                </div>
                <img className='md:w-36 w-24 mr-8 ' src={quote} alt="quote" />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {
                patientsSays.map( patient => <PatientSays
                key={patient.id}
                patient={patient}
                ></PatientSays>)
            }
            </div>

        </div>
    );
};

export default Testimonials;