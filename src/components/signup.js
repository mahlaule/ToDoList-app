
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom';
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "../config/firebase"
import "../Css/signup.css"
import welImg from "../images/welcom.jpg"
function SignUp(){

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
        <div className="container">
              <img src={welImg} alt="welcome back" />
              <div className="cont">
    
              
            <h1 className='headerr'>Register</h1>
          
            
            <input type="email" placeholder="enter your email" onChange={(e)=>setEmail(e.target.value)}/><br></br>
            <input type ="password" placeholder="enter your password" onChange={(e)=>setPassword(e.target.value)}/><br></br>
            <button onClick={Register} className="btn">SignUp</button><br></br>
        </div>
        </div>
    );
}

export default SignUp;