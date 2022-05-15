import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../.firebase.init';
import Spinner from '../Shared/Spinner/Spinner';

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment;
  const [user, loading] = useAuthState(auth);
  const userName = user?.displayName;
  const userEmail = user?.email;

  if(loading){
      return <Spinner></Spinner>
  }

  const handleBooking = (event) => {
    event.preventDefault();
    setTreatment(null);
    const slot = event.target.slot.value;
    console.log(slot);
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
                <option key={index} value={slot}>{slot}</option>
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
