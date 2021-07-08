import React from 'react';
import { Link,useHistory } from 'react-router-dom';

import logo from '../../../Images/mainLogo.png';
import './Header.css';
function Headers(props) {
    const history = useHistory();
    const ClickHandler = () => {
        history.push('/login');
    }
    return (
        <>
        <div className="nav">
            <Link to="/">
                <img src={logo} alt="logo"></img>
            </Link>
            <div>
            <button className="btn-login" onClick={ClickHandler}>Login</button>
            </div>
        </div>
        </>
    )
}

export default Headers;
