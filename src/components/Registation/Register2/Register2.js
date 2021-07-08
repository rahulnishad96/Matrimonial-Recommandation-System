import React from 'react';
import Footer from '../../HomePage/Footer/Footer';
import './Register2.css';
import {Link,useHistory} from 'react-router-dom';
import { FirebaseAdd } from '../../firebaseAdd';
import {useForm } from 'react-hook-form';
function Register2() {
    const history = useHistory();
    const {register,handleSubmit} = useForm();
    const SubmitHandler = (data) => {
        FirebaseAdd(data);
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
                    <form onSubmit={handleSubmit(SubmitHandler)}>
                    <div className="form">
                        <p className="heading">Account Details</p>
                        <div className="first-row">
                            <div className="full-name">
                                <p>Mobile Number or Email ID</p>
                                <input name="userId" placeholder="Mobile Number or Email ID" required {...register("userId")}/>
                            </div>
                        </div>
                        <div className="first-row">
                        <div className="full-name">
                                <p>Password</p>
                                <input name="password" placeholder="Password" required type="password" {...register("password")}/>
                            </div>
                        </div>
                        <div className="first-row">
                        <div className="date">
                                <p>Date of Birth</p>
                                <input name="dob" placeholder="" required type="date" {...register("dob")}/>
                            </div>
                        </div>
                        <div className="first-row">
                        <div className="full-name">
                                <p>Mobile Number</p>
                                <input name="mobileNumber" placeholder="XXXXX XXXXX" required type="text" {...register("mobileNumber")}/>
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
