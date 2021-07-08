import React from 'react'
import './Register1.css';
import Footer from '../../HomePage/Footer/Footer'
import {Link,useHistory} from 'react-router-dom';
function Register1() {
    const history = useHistory();
    const SubmitHandler = () => {
        history.push('/register2');
    }
    return (
            <div className="register">
            <nav>
                <Link to="/"><button >Home</button></Link>
                <Link to="/login"><button >Login</button></Link>
            </nav>
            <section className="form-section" id="form"> 
            <form onSubmit={SubmitHandler}>
                <p className="heading">Welcome! Lets create Your Profile</p>
                <div className="form-div">
                    <div className="form">
                        <p className="heading">Personal</p>
                        <div className="first-row">
                            <div className="full-name">
                                <p>City you live in </p>
                                <input placeholder="Eg. Mumbai" required />
                            </div>
                            <div className="gender">
                                <p>Are you live with your Famity ?</p>
                                <form>
                                    <label for="male">Select</label>
                                    <input type="radio" name="With-Family" id="Yes" value="Yes" />
                                    <label for="Yes">Yes</label>
                                    <input type="radio" name="With-Family" id="No" value="No" />
                                    <label for="No">No</label>
                                </form>
                            </div>
                        </div>


                        <div className="second-row">
                        <div className="mother-tongue">
                            <p>Your marital Status</p>
                            <select name="Marital-status" required >
                                <option value="">Select</option>
                                <option value="Never Married" >Never Married</option>
                                <option value="Married">Married</option>
                            </select>
                        </div>
                        <div className="mother-tongue" required >
                            <p>Your Height</p>
                            <select name="Hight" >
                                <option value="">Select</option>
                                <option value="5-fit 1-inch">5-fit 1-inch</option>
                                <option value="5-fit 2-inch">5-fit 2-inch</option>
                                <option value="5-fit 3-inch">5-fit 3-inch</option>
                                <option value="5-fit 4-inch">5-fit 4-inch</option>
                                <option value="5-fit 5-inch">5-fit 5-inch</option>
                                <option value="5-fit 6-inch">5-fit 6-inch</option>
                                <option value="5-fit 7-inch">5-fit 7-inch</option>
                                <option value="5-fit 8-inch">5-fit 8-inch</option>
                                <option value="5-fit 9-inch">5-fit 9-inch</option>
                                <option value="5-fit 10-inch">5-fit 10-inch</option>
                                <option value="5-fit 11-inch">5-fit 11-inch</option>
                                <option value="6-fit 0-inch">6-fit 0-inch</option>
                                <option value="6-fit 1-inch">6-fit 1-inch</option>
                                <option value="6-fit 2-inch">6-fit 2-inch</option>
                                <option value="6-fit 3-inch">6-fit 3-inch</option>
                                <option value="6-fit 4-inch">6-fit 4-inch</option>
                                <option value="6-fit 5-inch">6-fit 5-inch</option>
                            </select>
                        </div>
                        </div>


                        <div className="second-row">
                        <div className="mother-tongue">
                            <p>Your deit</p>
                            <select name="dait" required >
                                <option value="">Select</option>
                                <option value="Veg">Veg</option>
                                <option value="Non-veg">Non-veg</option>
                                <option value="Occasiaanally Non-veg">Occasiaanally Non-veg</option>
                                <option value="Eggetarian">Eggetarian</option>
                            </select>
                        </div>
                        <div className="full-name">
                                <p>Your sub Community </p>
                                <input placeholder="Eg. Brahmin" required />
                            </div>
                        </div>
                        <p className="heading">Education</p>
                        <div className="second-row">
                        <div className="mother-tongue">
                            <p>Your Highest quilification</p>
                            <select name="quilification" required >
                                <option value="">Select</option>
                                <option value="Phd">Phd</option>
                                <option value="Post-Graduate">Post-Graduate</option>
                                <option value="Under-Graduate">Under-Graduate</option>
                                <option value="12th">12th</option>
                                <option value="10th">10th</option>
                                <option value="None">None</option>
                            </select>
                        </div>
                        <div className="mother-tongue">
                            <p>Your Monthly Income</p>
                            <select name="income" required >
                                <option value="">Select</option>
                                <option value="500000">More than 2 Lakhs</option>
                                <option value="200000">Between 1 to 2 Lakhs</option>
                                <option value="100000">Between 50000 to 1 Lakh</option>
                                <option value="50000">Between 30000 to 50000</option>
                                <option value="30000">Between 15000 to 30000</option>
                                <option value="15000">Between 5000 to 15000</option>
                                
                            </select>
                        </div>
                        </div>

                        <div className="second-row">
                        <div className="full-name">
                                <p>You work as</p>
                                <input placeholder="Eg. Manager" required/>
                            </div>
                        
                            <div className="full-name">
                                <p>You work in</p>
                                <input placeholder="Eg. Mahindra" required />
                            </div>
                        </div>
                        <button className="form-btn" type="submit">Continue</button>
                    </div>
                </div>
            </form>
            </section>
            <Footer/>
        </div>
    )
}

export default Register1;
