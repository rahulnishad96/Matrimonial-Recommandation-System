import React from 'react';
import Headers from './Header/Header';
import TitleImages from './TitleImage/TitleImages';
import Form from './Form/Form';
import SuccessStory from './SuccessStory/SuccessStory';
import WhyChoose from './Whychoose/WhyChoose';
import About from './About/About';
import Footer from './Footer/Footer';

function HomePage() {
    return (
        <div className="Homepade-outer-div">
            <Headers/>
            <TitleImages/>
            <Form/>
            <WhyChoose/>
            <SuccessStory/>
            <About/>
            <Footer/>
        </div>
    )
}

export default HomePage
