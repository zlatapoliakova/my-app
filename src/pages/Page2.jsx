import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Page2 = ({hobby}) => {
    return (
        <div className='page2'>
            <Header firstName="Zlata" lastName="Poliakova"/>
            <h2>Hobby: {hobby}</h2>
            <Footer group="IST"/>
        </div>
    );
};

export default Page2;