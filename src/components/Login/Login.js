import React from 'react'
import Footer from '../HomePage/Footer/Footer'
import {Link,useHistory} from 'react-router-dom';
import './Login.css';
function Login() {
    const history = useHistory();
    const SubmitHandler = () => {
        history.push('/mainpage');
    }
    return (
        <div className="login">
            <nav>
                <Link to="/"><button >Home</button></Link>
                <Link to="/"><button >Register</button></Link>
            </nav>
            <section className="form-section" id="form">    
                <p className="heading">Welcome Back!</p>
                <div className="form-div">
                    <form onSubmit={SubmitHandler}>
                    <div className="form">
                        <p className="heading">Please Login</p>
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
                        <button className="form-btn" type="submit">Login</button>
                    </div>
                    </form>
                </div>
            </section>
            <Footer/>
        </div>
        
    )
}

export default Login
