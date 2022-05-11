import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import phone from '../../assets/icons/phone.svg';
import marker from '../../assets/icons/marker.svg';


const Info = () => {

  
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <InfoCard bg="bg-gradient-to-t from-cyan-400 to-cyan-500 text-white border-0 hover:bg-gradient hover:from-cyan-500 hover:to-cyan-400" title="Opening Hours" desc="phones from 08.00am, pre-booked appointments only from 7.30 - 8am" img={clock}></InfoCard>
            <InfoCard bg="bg-gradient-to-t from-gray-400 to-gray-500 text-white border-0 hover:bg-gradient hover:from-gray-500 hover:to-gray-400" title="Opening Hours" desc="Brooklyn, NY 10036, United States" img={marker}></InfoCard>
            <InfoCard bg="bg-gradient-to-t from-cyan-400 to-cyan-500 text-white border-0 hover:bg-gradient hover:from-cyan-500 hover:to-cyan-400" title="Contact Us Now" desc="+000 123 456789" img={phone}></InfoCard>
        </div>

    );
};

export default Info;