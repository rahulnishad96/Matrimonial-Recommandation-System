import React from 'react'
import './About.css';
function About() {
    return (
        <>
          <section className="about-us">
                <p className="why-heading">About Us</p>
                <div className="why-heading-border"></div>
                <p className="explain-p">This cite is a matchmaking service created for parents who are looking for a life partner for their loved ones. Unlike other Matrimonial services, we focus on providing detailed family and background information to help you take the next step with confidence. With over 80+ community sites, you can find a match from your own community. Sangam is part of Shaadi.com (sometimes mis-spelt as Shadi), the World's No. 1 Matchmaking service.</p>
            </section>

            <section className="community">
                <p className="heading">Community Matchmaking, Trusted by Parents</p>
                <button className="btn">show matches</button>
            </section>  
        </>
    )
}

export default About
