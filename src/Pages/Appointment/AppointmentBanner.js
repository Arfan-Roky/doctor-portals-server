import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';




const AppointmentBanner = ({date, setDate}) => {

  
    return (
        <div className="hero min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse justify-around">
      <img src={chair}
        className="md:w-1/2 rounded-lg shadow-2xl" alt='chair'/>
  
      <div>
      <DayPicker 
      mode='single'
      selected={date}
      onSelect={setDate}
      
      />

      </div>
  
    </div>
  </div>
  
    );
};

export default AppointmentBanner;