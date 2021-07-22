import React from 'react'
import './User.css';
function User(props) {
    return (
        <div className="user-outer-div">
            <div className="user-column">
                <div className="user-name">
                    <h1 className="icon">{props.value.fullname.substring(0,1).toUpperCase()}</h1>
                    <h1>{props.value.fullname}({props.value.gender.substring(0,1).toUpperCase()})</h1>
                    <h3>{props.value.location}</h3>
                </div>

                <div className="personal">
                    <h2>Personal </h2>
                    <div className="row">
                        <h3>Mother Tongue : {props.value.motherTongue}</h3>
                        <h3>Community : {props.value.community}</h3>
                    </div>
                    <div className="row">
                        <h3>Marital Status : {props.value.maritalStatus}</h3>
                        <h3>Height : {props.value.hight}</h3>
                    </div>
                    <div className="row">
                        <h3>Dait : {props.value.dait}</h3>
                        <h3>Sub-community : {props.value.subcommunity}</h3>
                    </div>

                    <h2>Education</h2>
                    <div className="row">
                        <h3>Qualification : {props.value.qualification}</h3>
                        <h3>Income : {props.value.income}/month</h3>
                    </div>
                    <div className="row">
                        <h3>Woks As : {props.value.workAs}</h3>
                        <h3>Work In : {props.value.workIn}</h3>
                    </div>

                    <h2>Account</h2>
                    <div className="row">
                        <h3>Email : {props.value.userId}</h3>
                        <h3>MobileNumber : {props.value.mobileNumber}</h3>
                    </div>
                </div>

                
                
            </div>
            
        </div>
    )
}

export default User
