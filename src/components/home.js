import "../Css/home.css";
import logo from "../images/log.jpg";
import {FormHelperText, InputLabel, TextField,Select,MenuItem, FormControl } from "@mui/material";
import { useState } from "react";




function Home(){
    const [todoInput, setToDoInput] = useState("");

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
        
            <Select label ="priority" value={selected} onChange={selectionChangeHandler}>
                <MenuItem value={1}>low</MenuItem>
                <MenuItem value={2}>medium</MenuItem>
                <MenuItem value={3}>High</MenuItem>
            </Select>
            <FormHelperText>select status</FormHelperText>
            </FormControl>


            </div>

            </div>
           
        </div>
    )
}

export default Home;