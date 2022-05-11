import React from 'react';

const PatientSays = ({patient}) => {

    return (
       <div className=' p-4 shadow-2xl rounded'>
           <p>{patient.desc}</p>
           <div className='md:w-1/2 w-3/4 flex justify-between items-center'>
               <img className='w-16  border-2 border-cyan-400 rounded-full' src={patient.img} alt="" 
               />
               <div className='py-8'>
                   <h4 className='font-bold text-gray-600'>{patient.name}</h4>
                   <p className='text-gray-500 font-medium uppercase'><small>{patient.location}</small></p>
               </div>
           </div>
       </div>
      
    );
};

export default PatientSays;