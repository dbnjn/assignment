import React,{useState,useEffect} from 'react';
import { Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './index.css';
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/Lock';
import { Link } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import * as loginUsers from '../../../ReduxStore/actions/loginAction';
 import {useDispatch,useSelector} from 'react-redux';





const UserLogin=()=>{

const[email,setEmail]=useState('');
const[password,setPassword]=useState('')
 const dispatch = useDispatch();



     const history = useHistory();

      const logdata = useSelector(state=>state.loginReducer);
      console.log('log',logdata);

useEffect(()=>{

if(logdata.resData.status){
    const newdata = JSON.stringify(logdata.resData.data)
    localStorage.setItem("user", newdata)
    history.push('/dashboard');
}

},[logdata])

const changePage=()=>{

 history.push('/landing');
}

const submitDetails=()=>{

    dispatch(loginUsers.getLogin(email,password))
   
}


return(
    <>
   
    <div className='box ' >
<div className='effect8'>
    <div className='logincontainer'  >
       
   
   <div className='form' >

   <Form   >
<FormGroup >

<Input value={email} onChange={(e)=>setEmail(e.target.value)}  style={{height:'5vw'}} type="email" name="email"  placeholder="Email" />

</FormGroup>
<FormGroup >

<Input value={password} onChange={(e)=>setPassword(e.target.value)} style={{height:'5vw'}} type="password" name="password"  placeholder="Password" />

</FormGroup>


{!email ? <Button disabled  style={{minWidth:"25vw",margin:"20px 0px"}} endIcon={<LockIcon>login</LockIcon>} variant="contained" size="large" color="primary" >
LOGIN
</Button>:!password ?<Button disabled  style={{minWidth:"25vw",margin:"20px 0px"}} endIcon={<LockIcon>login</LockIcon>} variant="contained" size="large" color="primary" >
LOGIN
</Button>:<Button onClick={submitDetails} style={{minWidth:"25vw",margin:"20px 0px"}} endIcon={<LockIcon>login</LockIcon>} variant="contained" size="large" color="primary" >
LOGIN
</Button>}


</Form>


   </div>
   <div className='forgetlink' >
    <Link onClick={changePage}>Don't have an Account?click here</Link>
</div>  
 <br/>
 <br/>
    </div>
    
</div>

</div>
   
    </>
)


}


export default UserLogin;

