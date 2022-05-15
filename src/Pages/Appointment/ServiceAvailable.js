import React from 'react';

const ServiceAvailable = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl text-cyan-500">{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-rose-500 ">Try Another Date</span>
          )}
        </p>
        <p className="text-gray-700">
          {slots.length} {slots.length > 0 ? 'spaces' : 'space'} available
        </p>
        <div className="card-actions">
          <label
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            className="btn modal-button px-8 bg-gradient-to-t from-cyan-400 to-cyan-500 text-white border-0 hover:bg-gradient hover:from-cyan-500 hover:to-cyan-400 "
          >
            BOOK APPOINTMENT
          </label>
        </div>
      </div>
    </div>
  );
};

export default ServiceAvailable;
