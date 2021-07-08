import React from 'react'
import './Form.css';
import {useHistory } from 'react-router-dom';
function Form() {
    const history = useHistory();
    const SubmitHandler = () => {
        history.push('/register1');
    }
    return (
        <div className="form-outer-div">
            <section className="form-section" id="form">
                <form onSubmit={SubmitHandler}>
                <p className="heading">Matches Within Your Community</p>
                <p className="explain">Genuine Profiles | Safe & Secure | Detailed Family Information</p>
                <div className="form-div">
                    <div className="form ">
                        <div className="first-row">
                            <div className="full-name">
                                <p>Full Name </p>
                                <input placeholder="Full Name" required />
                            </div>
                            <div className="gender">
                                <p>Select </p>
                                <form required>
                                    <label for="male">Gender </label>
                                    <input type="radio" name="gender" id="male" value="male" required />
                                    <label for="male">Male</label>
                                    <input type="radio" name="gender" id="female" value="female" required />
                                    <label for="female">Female</label>
                                </form>
                            </div>
                        </div>
                        <div className="second-row">
                        <div className="mother-tongue">
                            <p>Mother Tongue</p>
                            <select name="mother-Tongue" required >
                                <option value="Hindi">Hindi</option>
                                <option value="English">English</option>
                                <option value="Bangali">Bangali</option>
                                <option value="Tamil">Tamil</option>
                                <option value="Telugu">Telugu</option>
                                <option value="Punjabi">Punjabi</option>
                                <option value="Gujrati">Gujrati</option>
                                <option value="Kannada">Kannada</option>
                                <option value="Urdu">Urdu</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="form-community">
                            <p>Community</p>
                            <select name="community" required >
                                <option value="Hindu">Hindu</option>
                                <option value="Muslim">Muslim</option>
                                <option value="Christian">Christian</option>
                                <option value="Jain">Jain</option>
                                <option value="Sikh">Sikh</option>
                                <option value="Buddist">Buddist</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        </div>
                        <button className="form-btn"  type="submit">Lets Begin</button>
                    </div>
                </div>
                </form>
            </section>
        </div>
    )
}

export default Form
