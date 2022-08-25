 
import { useEffect, useState } from "react";
import {db} from "../config/firebase"
import firebase from 'firebase/compat/app';
import {getFirestore} from "firebase/firestore"
import { collection,doc,query,where, deleteDoc,updateDoc, setDoc,addDoc,getDoc,getDocs, onSnapshot, serverTimestamp } from "firebase/firestore"; 
import { FormHelperText, DeleteIcon, InputLabel, TextField, Select, MenuItem, FormControl, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import Home from "./home";
import React from "react";
import { async } from "@firebase/util";



    const Todo=({arr})=>{
        
        //const completeTodo = () => {
            //const todoRef = firebase.database().ref('TODO').child(todo.id);
           // todoRef.update({
                //inprogress: !todo.inprogress,
            //})
        //}
        const Todo = ({todo,inprogress})=>{
        
        }
  
    return (
        <List className="todo__list"> 
         
            <ListItem style={{width:"9nn0%"}}>
                <ListItemAvatar />
                    <ListItemText  style={{ border:"2px solid gray"}} primary={arr.item.todo} secondary={arr.item.inprogress ? "inprogress" :"completed"} />
            </ListItem>
         
            <Button variant="contained" color="primary" onClick={() => {deleteDoc(doc(db,'TODO',arr.id))}} >completed</Button>
            <Button></Button>
         
            
        </List> 
    )
  
};

export default Todo;