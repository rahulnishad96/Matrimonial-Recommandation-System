import React from 'react'
import './WhyChoose.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faHandshake, faLock, faTrophy } from '@fortawesome/free-solid-svg-icons'
function WhyChoose() {
    return (
        <>
            <section className="why">
                <p className="why-heading">Why register on this Website?</p>
                <div className="why-heading-border"></div>
                <div className="why-reason-div">
                    <div className="reason">
                        <div className="trophy">
                            <FontAwesomeIcon icon={faTrophy} color="white" />
                        </div>
                        <h6>No.1 rated site</h6>
                        <p>Most recommended matchmaking service </p>
                    </div>
                    <div className="reason">
                        <div className="handshake">
                            <FontAwesomeIcon icon={faHandshake}color="white" />
                        </div>
                        <h6>History of success</h6>
                        <p>1 million matches and counting!</p>
                    </div>
                    <div className="reason">
                        <div className="lock">
                            <FontAwesomeIcon icon={faLock} color="white" />
                        </div>
                        <h6>100% Privacy</h6>
                        <p>100% Control on your Photos and info </p>
                    </div>
                    <div className="reason">
                        <div className="check">
                            <FontAwesomeIcon icon={faCheck} color="white" />
                        </div>
                        <h6>Full secure</h6>
                        <p>Patent pending technology for your safety</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyChoose
