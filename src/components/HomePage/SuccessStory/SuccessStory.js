import React from 'react'
import './SuccessStory.css';
import image1 from '../../../Images/succPic1.jpg';
import image2 from '../../../Images/succPic2.jpg';
import image3 from '../../../Images/succPic3.jpg';
function SuccessStory() {
    return (
        <div>
            <section className="story">
                <h1 className="heading">Our Success story</h1>
                <div className="why-heading-border"></div>
                <div className="card-box">
                    <div className="card">
                        <img src={image1} alt="alterNateimage"></img>
                        <p>Riya and Shubham</p>
                        <a href="/" target="_blank">Read more</a>
                    </div>
                    <div className="card">
                        <img src={image2} alt="alterNateimage"></img>
                        <p>Bhavana and Deepak</p>
                        <a href="/" target="_blank">Read more</a>
                    </div>
                    <div className="card">
                        <img src={image3} alt="alterNateimage"/>
                        <p>Rohit and Aruhi</p>
                        <a href="/" target="_blank">Read more</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SuccessStory
