import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import ServiceAvailable from './ServiceAvailable';

const AvailableAppointment = ({ date, setDate }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-12'>
            <p className='text-xl text-cyan-400 text-center py-8'>You Have selected: {format(date, 'PP')}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceAvailable
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    ></ServiceAvailable>)
                }

            </div>
            {treatment && <BookingModal
            setTreatment={setTreatment}
             treatment={treatment} 
            date={date}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;