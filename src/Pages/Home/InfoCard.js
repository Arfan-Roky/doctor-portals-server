import React from 'react';

const InfoCard = ({img, title, desc, bg}) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bg}`}>
            <figure className='pl-5 pt-2'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{desc}</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    );
};

export default InfoCard;