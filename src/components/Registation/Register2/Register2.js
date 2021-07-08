import React from 'react';
import Footer from '../../HomePage/Footer/Footer';
import './Register2.css';
import {Link,useHistory} from 'react-router-dom';
function Register2() {
    const history = useHistory();
    const SubmitHandler = () => {
        history.push('/mainpage');
    }
    return (
        <div className="register2">
            <nav>
                <Link to="/register1"><button >Previous</button></Link>
                <Link to="/login"><button >Login</button></Link>
            </nav>
            <section className="form-section" id="form">
                <p className="heading">Just Completed</p>
                <div className="form-div">
                    <form onSubmit={SubmitHandler}>
                    <div className="form">
                        <p className="heading">Account Details</p>
                        <div className="first-row">
                            <div className="full-name">
                                <p>Mobile Number or Email ID</p>
                                <input placeholder="Mobile Number or Email ID" required />
                            </div>
                        </div>
                        <div className="first-row">
                        <div className="full-name">
                                <p>Password</p>
                                <input placeholder="Password" required type="password" />
                            </div>
                        </div>
                        <div className="first-row">
                        <div className="date">
                                <p>Date of Birth</p>
                                <input placeholder="" required type="date" />
                            </div>
                        </div>
                        <div className="first-row">
                        <div className="full-name">
                                <p>Mobile Number</p>
                                <input placeholder="XXXXX XXXXX" required type="text" />
                            </div>
                        </div>
                        <button className="form-btn" type="submit">Register</button>
                    </div>
                    </form>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Register2
