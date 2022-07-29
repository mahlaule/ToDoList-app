import {FormHelperText,DeleteIcon,deleteDoc, InputLabel, TextField,Select,MenuItem, FormControl,Button,List , ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import { useEffect, useState } from "react";
import {db} from "../config/firebase"
import firebase from 'firebase/compat/app';
import {getFirestore} from "firebase/firestore"
import { collection,doc,query,where, updateDoc, addDoc,getDoc,getDocs, onSnapshot, serverTimestamp } from "firebase/firestore"; 
import Home from "./home";
import React from "react";

export default function TodoListItem({todo,inprogress,id}){
    

    function toggleInProgress(){
        
        const docRef =  updateDoc(collection(db, "todos"), {
            inprogress: !inprogress
    })
}
    

    return (
        <div style={{display:"flex"}}>
        <ListItem>
            <ListItemText primary ={todo} secondary={inprogress ? "in progress": "completed"}/>

            
       
        </ListItem>
        <Button onClick={toggleInProgress}>{inprogress ? "DONE": "UNDONE"}</Button>
        </div>
    )
    }
    