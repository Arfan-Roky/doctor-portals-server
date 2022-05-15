import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../.firebase.init';
import Spinner from '../Shared/Spinner/Spinner';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { _id, name, slots } = treatment;
  const [user, loading] = useAuthState(auth);
  const userName = user?.displayName;
  const userEmail = user?.email;

  if (loading) {
    return <Spinner></Spinner>;
  }

  const handleBooking = (event) => {
    event.preventDefault();

    const formattedDate = format(date, 'PP');
    const slot = event.target.slot.value;
    console.log(slot);

    const bookingData = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patient: userEmail,
      patientName: userName,
      phone: event.target.phone.value,
    };

    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        
        if(data.success){
          toast(`Appointment is set, ${formattedDate} at ${slot}`)

        }
        else{
          toast.error(`already have an appointment on, ${data.booking?.date} at ${data.booking?.slot}`)

        }



        // to close the modal
        setTreatment(null);
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-white relative ">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-center">
            Booking for <span className=" text-cyan-400 ">{name}</span>
          </h3>
          <form
            onSubmit={handleBooking}
            className=" grid grid-cols-1 gap-3 justify-items-center my-4 "
          >
            <input
              type="text"
              value={format(date, 'PP')}
              readOnly
              className="input w-full max-w-xs bg-transparent border-2 border-gray-300"
            />

            <select
              name="slot"
              className="select select-accent w-full max-w-xs bg-transparent border-2 border-gray-300"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              type="text"
              value={userName || ''}
              readOnly
              className="input w-full max-w-xs bg-transparent border-2 border-gray-300"
            />

            <input
              type="email"
              value={userEmail || ''}
              readOnly
              className="input w-full max-w-xs bg-transparent border-2 border-gray-300"
            />
            <input
              type="Number"
              placeholder="Phone Number"
              name='phone'
              className="input w-full max-w-xs bg-transparent border-2 border-gray-300"
            />

            <input
              type="submit"
              className="input w-full max-w-xs btn px-8 bg-gradient-to-t from-cyan-400 to-cyan-500 text-white border-0 hover:bg-gradient hover:from-cyan-500 hover:to-cyan-400 "
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
