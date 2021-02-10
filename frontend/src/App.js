import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import LangingPage from './Components/LandingPage';
import CompanyRegister from './Components/Company/register';
import JobseekersRegister from './Components/JobSeekers/register';
import Dashboard from './Components/Dashboard';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserLogin from './Components/JobSeekers/login';


function App() {


  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path='/' component={UserLogin}/>
        <Route exact path='/landing' component={LangingPage} />
        <Route exact path='/company-register' component={CompanyRegister}/>  
        <Route exact path='/user-register' component={JobseekersRegister}/>
        <Route exact path='/dashboard' component={Dashboard}/>
      </Switch>
    </Router>
   
     
    </div>
  );
}

export default App;
