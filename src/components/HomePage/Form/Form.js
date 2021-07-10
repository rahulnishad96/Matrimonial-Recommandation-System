import React from 'react'
import {useHistory } from 'react-router-dom';
import { FirebaseAdd } from '../../firebaseAdd';
import {useForm} from '../../../context/formContext'
import {ADD_FORM_DATA} from '../../../reducer/actionTypes'
import './Form.css';

function Form() {
    const history = useHistory();
    const {state,dispatch} = useForm();
    const onSubmit = (e) => {
        e.preventDefault();
        const data = Array.from(e.target)
        const dataCollect = {}
        data.forEach(item => {
            dataCollect[item.name] =  item.value
        })
        dispatch({
            type : ADD_FORM_DATA,
            payload: dataCollect
        })
        //FirebaseAdd({name:"rahul"});
        console.log(state);
        history.push('/register1');
    }
    return (
        <div className="form-outer-div">
            <section className="form-section" id="form">
                <form onSubmit={onSubmit}>
                <p className="heading">Matches Within Your Community</p>
                <p className="explain">Genuine Profiles | Safe & Secure | Detailed Family Information</p>
                <div className="form-div">
                    <div className="form ">
                        <div className="first-row">
                            <div className="full-name">
                                <p>Full Name </p>
                                <input name="fullname" placeholder="Full Name" />
                            </div>
                            <div className="gender">
                                <p>Select </p>
                                <select name="gender" required> 
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="second-row">
                        <div className="motherTongue">
                            <p>Mother Tongue</p>
                            <select name="motherTongue" required>
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
                            <select name="community" required>
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
