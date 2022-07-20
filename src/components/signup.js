import { signInWithGoogle } from '../config/firebase';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom';
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "../config/firebase"
import "../Css/signup.css"
import welImg from "../images/welcom.jpg"
import GoogleButton from 'react-google-button';

function SignUp(){
    const [name,setName]= useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let history = useHistory();
    const Register =(()=>{
        
        createUserWithEmailAndPassword(auth, email, password).then(()=>{
            
            history.push("/home"); 

        }).catch((error)=>{

            console.log(error)
        })
        
    })


    return(
        <div className="container2">
            <div className='img-cont'>
              <img src={welImg} alt="welcome back" />
              </div>
              <div className="cont">
    
              
            <h1 className='headerr'>Welcome</h1>
            
            <input type ="name" placeholder="enter full names" onChange ={(e)=>setName(e.target.value)}/><br></br>
        
            <input type="email" placeholder="enter your email" onChange={(e)=>setEmail(e.target.value)}/><br></br>
            <input type ="password" placeholder="enter your password" onChange={(e)=>setPassword(e.target.value)}/><br></br>
            <button onClick={Register} className="btn">SignUp</button><br></br>
           
            <span className="spa"><br></br>
                <p>already have account?</p>
                <Link to ="/" className="spar">
                    Login
                </Link>
             
                
                </span>
                <h3>OR</h3>
                <div className='googlebtn'>
                <GoogleButton
  onClick={signInWithGoogle}/>
            </div>
        </div>
        </div>
    );
}

export default SignUp;