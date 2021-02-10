import React,{useEffect, useState} from 'react';
import './index.css';
import axios from 'axios';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import {Redirect, useHistory} from 'react-router-dom';

const Viewboard=()=>{
     
  const userdata=JSON.parse(localStorage.getItem('user'));

const[data,setData]=useState([]);


const logoutUser=()=>{

const removedata = localStorage.removeItem("user");
console.log('rve',removedata);
window.location.assign('/'); 
}


useEffect(()=>{


axios.get(`http://localhost:5000/v1.0/match-skills/${userdata.data._id}`).then(
  res=>{
    console.log('res',res.data.data[0].userskillmatchedcompanies)
   if(res.data.length > 0 || res.data.status){
     setData(res.data.data[0].userskillmatchedcompanies);
   }
  }
)
},[])



return(
    <>
<div className='nav_dash'>
  <div className='logout'>
  <IconButton onClick={logoutUser} color="primary" component="span">
          <ExitToAppIcon />
        </IconButton>
  </div>
</div>
<div  className='maindiv'>
  Explore the options below according to your preference
</div>

   <div className='first_container'>
    
      {data.map(value=>{
        console.log('val',value);
        return(
         <div  style={{textDecoration:'none'}}    className='card1' >
         <div style={{padding:'10px',fontWeight:'bold',color:'gray',textAlign:'center'}}>Company Name</div>
        <div style={{padding:'5px',fontSize:'1rem',fontWeight:'bold'}}>{value.name}</div>
        <div style={{padding:'5px'}}>Position: {value.phone_number}</div>
        <div style={{padding:'5px'}}>Specialization: {value.specialization}</div> 
        </div> 
        )
      })}
    
      
   </div>
   
    </>
)

}

export default Viewboard;