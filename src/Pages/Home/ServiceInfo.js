
import React from 'react';
import treatment from '../../assets/images/treatment.png';

const ServiceInfo = () => {
    return (
        <div className='w-screen h-fit md:flex justify-around items-center gap-4 mt-12'>
           <figure className='md:w-1/2 '>
           <img className='md:w-1/2 w-3/4 md:mx-auto ' src={treatment} alt="" />
           </figure>
            <div className='md:w-1/2'>
                <h2 className='text-5xl py-4 text-gray-600 font-semibold'>Exceptional Dental <br /> Care, on Your Terms</h2>
                <p className='md:max-w-lg w-3/4 text-justify py-4 text-lg'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn bg-gradient-to-t from-cyan-400 to-cyan-500 text-white border-0 hover:bg-gradient hover:from-cyan-500 hover:to-cyan-400">Get Started</button>
            </div>
        </div>
      
    );
};

export default ServiceInfo;