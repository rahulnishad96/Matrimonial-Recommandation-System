import React from 'react'
import './Form.css';
import {useReducer} from 'react-dom';
import {useHistory } from 'react-router-dom';
import { FirebaseAdd } from '../../firebaseAdd';
import {useForm } from 'react-hook-form';
function Form() {
    const {register,handleSubmit} = useForm();
    const history = useHistory();
    const onSubmit = (data) => {
        FirebaseAdd(data);
        history.push('/register1');
    }
    return (
        <div className="form-outer-div">
            <section className="form-section" id="form">
                <form onSubmit={handleSubmit(onSubmit)}>
                <p className="heading">Matches Within Your Community</p>
                <p className="explain">Genuine Profiles | Safe & Secure | Detailed Family Information</p>
                <div className="form-div">
                    <div className="form ">
                        <div className="first-row">
                            <div className="full-name">
                                <p>Full Name </p>
                                <input name="fullname" placeholder="Full Name" required {...register("fullname")}/>
                            </div>
                            <div className="gender">
                                <p>Select </p>
                                <form required>
                                    <label for="male">Gender </label>
                                    <input type="radio" name="gender" id="male" value="male" required {...register("gender")}/>
                                    <label for="male">Male</label>
                                    <input type="radio" name="gender" id="female" value="female" required {...register("gender")}/>
                                    <label for="female">Female</label>
                                </form>
                            </div>
                        </div>
                        <div className="second-row">
                        <div className="motherTongue">
                            <p>Mother Tongue</p>
                            <select name="motherTongue" required {...register("motherTongue")}>
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
                            <select name="community" required {...register("community")}>
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
