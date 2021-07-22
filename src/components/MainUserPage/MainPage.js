import React from 'react'
import './MainPage.css';
import {useEffect,useState} from 'react';
import User from './User/User';
import Headers from './Header/Header';
function MainPage() {
    const [MyDataArray, setMyDataArray] = useState([]);
    const [gender,setGender]=useState("");
    const [location,setLocation]=useState("");
    async function load(){
        const response= await fetch("https://matrimonial-system-default-rtdb.firebaseio.com//user.json");
        const data=await response.json();
        const myDataArray = [];
        for(const key in data){
            myDataArray.push(
              (data[key])
            );
        }
        setMyDataArray(myDataArray);
    }
    useEffect(() => {
        load();
    },[gender,location])
    return (
        <div className="mainpage">
            <Headers/>
            <h1 className="heading">Top Profile for you</h1>
            <form className="sorting-form" >
                <h2>Sort By : </h2>
                <h3>Gender : </h3>
                <select onChange={(e)=>setGender(e.target.value)}>
                    <option value="">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <h3>Location : </h3>
                <select onChange={(e)=>setLocation(e.target.value)}>
                    <option value="">All</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Jaunpur">Jaunpur</option>
                    <option value="Gorakhpur">Gorakhpur</option>
                </select>
            </form>
            {
                MyDataArray.map(
                    item => (location === "") ? 
                        ((gender === "") ? 
                            <User value={JSON.parse(item)} /> : 
                            (JSON.parse(item).gender === gender ) && <User value={JSON.parse(item)} />) 
                        :((gender === "") 
                            ? (JSON.parse(item).location === location) && <User value={JSON.parse(item)} /> 
                            : (JSON.parse(item).gender === gender &&  JSON.parse(item).location === location) && <User value={JSON.parse(item)} />)
                )
             }
        </div>
    )
}

export default MainPage
