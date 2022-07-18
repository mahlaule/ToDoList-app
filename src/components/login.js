
import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom';
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../config/firebase"
import "../Css/login.css"
import welImg from "../images/welcom.jpg"

function Login(){
const [email, setEmail]= useState("");
const [password, setPassword]= useState("");
    const btn ={
        width:'150px',
        height:'40px',
        marginTop:"2%",
    }
    let history = useHistory();
    const login =(()=>{

signInWithEmailAndPassword(auth, email, password).then(()=>{
    history.push("/home"); 


}).catch((err)=>{

console.log(err)

})


     
    })

    return(


        <div>
            <div className="container">
            <img src={welImg} alt="welcome back" />
            <div className="small-cont">
                <h1 className="headerr">Welcome Back</h1>
            <input type="email" placeholder="enter your email" onChange={(e)=>setEmail(e.target.value)}/><br></br>
            <input type ="password"placeholder="enter your password" onChange={(e)=>setPassword(e.target.value)}/><br></br>
            <button className="btnn" style={btn}onClick={login}>Login</button><br></br>
            <span className="spa">Dont have account?</span><br></br>{""}
            <span className="spa"><br></br>
                <Link to ="/sign-up" className="spa">
                    Create account here 
                </Link>
             
                
                </span>
                </div>
            </div>

        </div>
    )
}

export default Login;