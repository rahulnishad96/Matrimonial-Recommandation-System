import React,{useState,useEffect} from 'react'
import Footer from '../HomePage/Footer/Footer'
import {Link,useHistory} from 'react-router-dom';
import {useForm} from '../../context/formContext'
import './Login.css';
function Login() {
    const [userId,setUserId]=useState("");
    const [pass,setPass]=useState("");
    const [MyDataArray, setMyDataArray] = useState([]);
    const [loginStatus,setLoginStatus] = useState(false);
    const [alertStatus,setAlertStatus] = useState(false);
    const history = useHistory();
    async function load(){
        console.log("fuction called");
        const response= await fetch("https://matrimonial-system-default-rtdb.firebaseio.com//user.json");
        const data=await response.json();
        //console.log(data);
        const myDataArray = [];
        for(const key in data){
            myDataArray.push(
              (data[key])
            );
        }
        //console.log(myDataArray);
        setMyDataArray(myDataArray);
    }
    useEffect(() => {
        if(alertStatus && !loginStatus){
            alert("wrong User Id or Password");   
        }
        if(!loginStatus)
            load();
        else
            history.push('/mainpage');
    }, [loginStatus,alertStatus]);
    const SubmitHandler = (e) => {
        console.log("handlar called");
        e.preventDefault();
        var myarr=[];
        myarr=(MyDataArray.map(item => JSON.parse(item)));
        for(let i=0;i<myarr.length;i++)
        {
            if((myarr[i].userId === userId || myarr[i].mobileNumber === userId ) && (myarr[i].password === pass)){
                setLoginStatus(true);
                
                localStorage.setItem("isloggedIn",true);
                break;
            }
        }
        setAlertStatus(true);
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
                                <input placeholder="Mobile Number or Email ID" required onChange={e=>setUserId(e.target.value)}/>
                            </div>
                        </div>
                        <div className="first-row">
                        <div className="full-name">
                                <p>Password</p>
                                <input placeholder="Password" required type="password" onChange={e=>setPass(e.target.value)}/>
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
