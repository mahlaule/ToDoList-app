import "../Css/home.css";
import logo from "../images/log.jpg";
import {FormHelperText, InputLabel, TextField,Select,MenuItem, FormControl,Button,List , ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import { useEffect, useState } from "react";
import {db} from "../config/firebase"
import firebase from 'firebase/compat/app';
import {getFirestore} from "firebase/firestore"
import { collection,doc,query,where, addDoc,getDoc,getDocs, onSnapshot, serverTimestamp } from "firebase/firestore"; 






function Home(){
    const [todos, setTodos] = useState([]);
    const [todoInput, setToDoInput] = useState("");
    useEffect(()=>{
        onSnapshot(collection(db,'todos'),(snapshot)=>{
            setTodos(snapshot.docs.map(doc => doc.data()))
            })
            }, [todoInput])
            
    function getTodo(){

        

    }

        function AddToDo(e){
   e.preventDefault();
                                 //db.collection("todos").add({
            //inprogress:true,
            //timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            //todo:todoInput,

        //})
        const docRef =  addDoc(collection(db, "todos"), {
            inprogress: "false",
            timestamp:  serverTimestamp(),
            todo:todoInput,
          });
          
          

    }

const [selected, setSelected] = useState("");
const selectionChangeHandler = (event)=>{

    setSelected(event.target.value)
};



    return(

        <div>
            <div class = "Nav">
                
                    <h3 className="naming">kevin mahlauli</h3>
                
            <img src={logo} alt="logo" className="pic"/>
            <button>logout</button>
            </div>
            <div className="container-box">
                <div className="fields">
                    
                <TextField id="outlined-basic" label="Add New Task" variant="outlined" style={{width:"30%"}} onChange={(e)=>{setToDoInput(e.target.value); console.log(`this is the todo input ${e.target.value}`)} }/>
            
               
                <FormControl variant="outlined">
         
            <InputLabel shrink>priority</InputLabel>
        
            <Select label ="priority" value={selected} className="select" onChange={selectionChangeHandler}>
                <MenuItem value={1}>low</MenuItem>
                <MenuItem value={2}>medium</MenuItem>
                <MenuItem value={3}>High</MenuItem>
            </Select>
            
            <FormHelperText>select status</FormHelperText>
            
            </FormControl>
            
            <Button type ="submit" variant="contained"  className="bton" style={{marginLeft:"10px",backgroundColor:"green", width:"30px",height:"55px" }}  onClick={AddToDo}>+</Button>
        
           
            </div>
        
            </div>
            <ul>
            {todos.map((todo)=>(
                <p>{todo.todo}</p>
            ))}
            </ul>

        </div>
    )
}

export default Home;