import "../Css/home.css";
import logo from "../images/log.jpg";
import {useHistory} from 'react-router-dom'
import { useEffect, useState } from "react";
import { db } from "../config/firebase"
import firebase from 'firebase/compat/app';
import { getFirestore } from "firebase/firestore"
import { collection, doc, query, where, addDoc,updateDoc, getDoc, getDocs,orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";
import { FormHelperText, DeleteIcon, InputLabel, TextField, Select, MenuItem, FormControl, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import Todo from '../components/todo';
import TodoListItem from "./todo";
import React from "react";



const q=query(collection(db,'TODO'),orderBy('timestamp','desc'));


function Home() {
  
  const [todos,setTodos]=useState([]);
  const [input, setInput]=useState('');
 const [isLoggedin, setIsLoggedin] = useState(false);

 
 
  
  useEffect(() => {
          onSnapshot(q,(snapshot)=>{
              setTodos(snapshot.docs.map(doc=>({
                id: doc.id,
                item: doc.data()
              })))
         })
    },[input]);
  const addTodo=(e)=>{
    e.preventDefault();
       addDoc(collection(db,'TODO'),{
         todo:input,
         timestamp: serverTimestamp(),
         inprogress:"false"
       })
       console.log('click')
      setInput('')
  };
  console.log(todos);
  const [selected, setSelected] = useState("");
  const selectionChangeHandler = (event) => {

      setSelected(event.target.value)
  };

  
 


  return (
    <div>
    <div className="Nav">

                <h3 className="naming">kevin mahlauli</h3>

                <img src={logo} alt="logo" className="pic" />
                <button>logout</button>
            </div>
    
    <div className="App">
     <h2> Todo List App</h2>
      <form>
     
         <TextField id="outlined-basic" label="Add new Task" variant="outlined" style={{marginLeft:"0px"}} size="small" value={input}
         onChange={e=>setInput(e.target.value)} />
         <FormControl variant="outlined">

<InputLabel shrink>priority</InputLabel>

<Select label="priority" value={selected} className="select" style={{marginLeft:"5px",height:"40px"}} onChange={selectionChangeHandler}>
    <MenuItem value={1}>low</MenuItem>
    <MenuItem value={2}>medium</MenuItem>
    <MenuItem value={3}>High</MenuItem>
</Select>

<FormHelperText>select status</FormHelperText>

</FormControl>
        <Button variant="contained" color="primary" style={{marginLeft:"15px" ,border:"1px solid blue", width:"15px"}} onClick={addTodo}  >+</Button>
      </form>
      <div class ="listing">
      <ul>
          {todos.map(item=> <Todo key={item.id} arr={item} inprogress={todos.inprogress} />)}
      </ul>
      </div>
    </div>
    </div>
    
    
  );
}
 
export default Home;