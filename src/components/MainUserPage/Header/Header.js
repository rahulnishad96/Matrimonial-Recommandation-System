import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import logo from '../../../Images/mainLogo.png';
import './Header.css';
function Headers() {
    const history = useHistory();
    const ClickHandler = () => {
       localStorage.removeItem("isLoggedIn");
       history.push("/");
    }
    return (
        <>
        <div className="mainpahe-header">
            <Link to="/">
                <img src={logo} alt="logo"></img>
            </Link>
            <div>
            <button className="btn-login" onClick={ClickHandler}>Logout</button>
            </div>
        </div>
        </>
    )
}

export default Headers;
