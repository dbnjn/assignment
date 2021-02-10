import React,{useState,useEffect} from 'react';
import './index.css'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {useDispatch,useSelector} from 'react-redux';
import * as registerUsers from '../../../ReduxStore/actions/registerAction';
import swal from '@sweetalert/with-react'
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));
  
  function getSteps() {
    return ['Basic Details', 'Job Details', 'Done'];
  }
  
  


const UserRegister=()=>{


    const dispatch=useDispatch();
    const classes = useStyles();
    const [activeStep, setActiveStep] =useState(0);
    const steps = getSteps();
    const[name,setName]=useState('ex: Debanjan');
    const[email,setEmail]=useState('ex: dbnjn@gmail.com');
    const[password,setPassword]=useState('ex: alphabet123');
    const[phone_number,setPhone]=useState('ex: 7987890867');
    const[position,setPosition]=useState('ex: developer');
    const[specialization,setSpecialization]=useState('ex: React');
   const history = useHistory();

    const userdata=useSelector(state=>state.registerReducer)
    // console.log('data',data)

    useEffect(()=>{

      if(userdata.resData.status){
      window.location.assign('/dashboard')
      }else{
       swal(userdata.resData.msg)
      }
    
    },[userdata])
    


    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
    function getStepContent(stepIndex) {
        switch (stepIndex) {
          case 0:
            return (
                
                   <form style={{width:'25ch',paddingLeft:'20px'}}  noValidate autoComplete="off">
                      
            
                <TextField value={name} onChange={(e)=>setName(e.target.value)}
                 error={name===''}
                 helperText={name === "" ? 'Name is Required!' : ' '}
                required type='text'  label="Name" variant="outlined" />
                <TextField value={email} onChange={(e)=>setEmail(e.target.value)}
                 error={email===''}
                 helperText={email === "" ? 'Email is Required!' : ' '}
                required type='email'  label="Email" variant="outlined" />
                <TextField value={phone_number} onChange={(e)=>setPhone(e.target.value)}
                 error={phone_number===''}
                 helperText={phone_number === "" ? 'Name is Required!' : ' '}
                required type='number'  label="Phone" variant="outlined" />
                <TextField value={password} onChange={(e)=>setPassword(e.target.value)}
                 error={password===''}
                 helperText={password === "" && password.length <= 4 ? 'Password is Required and must be 5 Character long!' : ' '}
                required type='password'  label="Password" variant="outlined" />
                       
                
              </form>
                
               
            );
          case 1:
            return (
                <form style={{width:'25ch',paddingLeft:'20px'}} >
                 <TextField value={position} onChange={(e)=>setPosition(e.target.value)}
                  error={position===''}
                  helperText={position === "" ? 'Position is Required!' : ' '}
                 label="Position" variant="outlined" equiredr/>
                 <TextField value={specialization} onChange={(e)=>setSpecialization(e.target.value)}
                  error={specialization===''}
                  helperText={specialization === "" ? 'Specialization is Required!' : ' '}
                 label="Specialization" required variant="outlined"/>
                </form>
    
            );
          case 2:
            return 'Please Check All Fields Before Submit!';
          default:
            return 'Unknown stepIndex';
        }
      }

const submitForm=()=>{

dispatch(registerUsers.getregister( name,email,password,phone_number,position,specialization));


}

return(
    <>
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div style={{float:'left',marginLeft:'20px'}}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              
                {activeStep === steps.length - 1 ? <Button variant="contained" color="primary" onClick={submitForm}>Finish</Button> :
                <Button variant="contained" color="primary" onClick={handleNext}>Next</Button> }
              
            </div>
          </div>
        )}
      </div>
    </div>
 
    </>
)

}


export default UserRegister;