import React from 'react';
import ServiceCard from './ServiceCard';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import teeth from '../../assets/images/whitening.png';
import ServiceInfo from './ServiceInfo';


const Services = () => {

    const cards = [
        {img:`${fluoride}`, name:'Fluoride Treatment', desc:"Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health "},
        {img:`${cavity}`, name:'Cavity Filling', desc:"Fillings treat tooth decay, preventing further damage and tooth loss, as well as the possibility of pain and infection. A filling seals a hole, or cavity, in the tooth."},
        {img:`${teeth}`, name:'Teeth Whitening', desc:"Everyone notices a bright, white, glowing smile. And everyone notices how confident you feel when you have that beautiful smile. "},
    ]

    return (
        <div className='my-28'>
           <p className='text-center text-cyan-400 font-semibold'>
           <small className=' uppercase'>our services</small>
           </p>
           <h2 className='text-center font-normal text-4xl text-gray-500'>Services We Provide</h2>
           <div className="grid md:grid-cols-3 grid-cols-1 gap-6 pt-12">
           {
                cards.map(card => <ServiceCard
                card={card}
                ></ServiceCard>)
            }
           </div>
           <ServiceInfo></ServiceInfo>
        </div>
    );
};

export default Services;