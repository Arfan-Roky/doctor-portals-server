import React from 'react';

const ServiceCard = ({card}) => {
    const {img, name, desc} = card;
    return (
        <div className='{`card -shadow-xl  shadow-xl pt-4`}'>
        <figure className='w-20 mx-auto'>
            <img className='' src={img} alt="Album" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{desc}</p>
            <div className="card-actions justify-end">
            </div>
        </div>
    </div>
    );
};

export default ServiceCard;