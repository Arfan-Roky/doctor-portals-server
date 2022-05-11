import React from 'react';
import chair from '../../assets/images/chair.png';
import Backround from '../../assets/images/bg.png';

const Banner = () => {

  
  const bgImg = {
    backgroundImage: "url(" + { Backround } + ")",
    width:'100%',
    height:'100%',
  }

    return (
        <div style={bgImg} className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair}
      className="md:w-1/2 rounded-lg shadow-2xl" alt='chair'/>

    <div>
      <h1 className="text-5xl font-bold text-gray-600">Your New Smile Starts Here</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>
      <button className="btn bg-gradient-to-t from-cyan-400 to-cyan-500 text-white border-0 hover:bg-gradient hover:from-cyan-500 hover:to-cyan-400">Get Started</button>
    </div>

  </div>
</div>

    );
};

export default Banner;