import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner';
import ContactForm from './ContactForm';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {

    return (
       <div className=''>
       <Banner></Banner>
       <Info></Info>
       <Services></Services>
       <MakeAppointment></MakeAppointment>
       <Testimonials></Testimonials>
       <ContactForm></ContactForm>
       <Footer></Footer>
       </div>
    );
};

export default Home;