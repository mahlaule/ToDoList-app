import logo from './logo.svg';
import './App.css';
import SignUp from './components/signup';
import Home from './components/home';
import Login from './components/login';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
   <Router>
    <Switch>
      <Route exact path="/" component= {Login}></Route>
      <Route path="/sign-up" component={SignUp}></Route>
      <Route path ="/home" component={Home}></Route>
      

    </Switch>
   </Router>
   

   
   
  )
}

export default App;
