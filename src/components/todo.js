import {FormHelperText,DeleteIcon, InputLabel, TextField,Select,MenuItem, FormControl,Button,List , ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import { useEffect, useState } from "react";
import {db} from "../config/firebase"
import firebase from 'firebase/compat/app';
import {getFirestore} from "firebase/firestore"
import { collection,doc,query,where, deleteDoc,updateDoc, addDoc,getDoc,getDocs, onSnapshot, serverTimestamp } from "firebase/firestore"; 
import Home from "./home";
import React from "react";
import { async } from "@firebase/util";

export default function TodoListItem({todo,inprogress,todoInput,id}){
    

    function toggleInProgress(){
        
      db.collection("todos").doc(id).update({
        inprogress:!inprogress,

      })

}
function deleteTodo(){
    
//db.collection("todos").doc(id).delete();

const docRef = deleteDoc(collection(db, "todos"),{
inprogress: "false",
timestamp:  serverTimestamp(),
todo:todoInput,
}
)}

    

    return (
        <div style={{display:"flex"}}>
        <ListItem style={{width:"65%"}}>
            <ListItemText style={{marginLeft:"600px", border:"2px solid gray"}} primary ={todo} secondary={inprogress ?  "in progress": "completed"}/>

            
       
        </ListItem>
        <Button onClick={toggleInProgress}>{inprogress ? "DONE": "UNDONE"}</Button>
        <Button onClick={ deleteTodo}>delete</Button>
        </div>
    )
    }
    