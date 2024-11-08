import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Page1 = ({city}) => {
    return (
        <div className='page1'>
            <Header firstName="Zlata" lastName="Poliakova"/>
            <h2>City: {city}</h2>
            <Footer group="IST"/>
        </div>
    );
};

export default Page1;