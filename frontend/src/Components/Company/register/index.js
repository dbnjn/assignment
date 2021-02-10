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
import * as companyRegisterUsers from '../../../ReduxStore/actions/CompanyRegisterActions';
import swal from '@sweetalert/with-react';
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
    return ['Company Details', 'Job Description', 'Done'];
  }
  
 

const CompanyRegiter=()=>{

    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
   const[name,setName]=useState('ex: Google');
   const[email,setEmail]=useState('ex:google@internet.com');
   const[phone_number,setPhone]=useState('ex: 9807865678');
   const[position,setPosition]=useState('ex:developer');
   const[specialization,setSpecialization]=useState('ex:react');
    const steps = getSteps();
  const dispatch=useDispatch();
  const history = useHistory();

  const comregdata = useSelector(state=>state.companyRegisterReducer)

useEffect(() => {
  if(comregdata.resData.status){
    swal(comregdata.resData.msg)
    history.push('/landing')
  }else{
    swal(comregdata.resData.msg)
  }

}, [comregdata])


  
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
                      
           
            <TextField type='text' value={name} onChange={(e)=>{ 
            // console.log('e',e.target.value);
            setName(e.target.value)}}  label="Name"
            
             error={name===''}
            helperText={name === "" ? 'Name is Required!' : ' '}
            variant="outlined" />  
                <TextField
                type='email'
                value={email} onChange={(e)=>{ 
                    // console.log('e',e.target.value);
                    setEmail(e.target.value)}}
                error={email===''}
                helperText={email === "" ? 'Email is Required!' : ' '}
                label="Email" variant="outlined" />
                <TextField 
                type='number'
                 value={phone_number} onChange={(e)=>{ 
                    // console.log('e',e.target.value);
                    setPhone(e.target.value)}}
                error={phone_number===''}
                helperText={phone_number === "" ? 'Phone Number is Required!' : ' '}
                label="Phone No." variant="outlined" />
               
                       
                
              </form>
                
               
            );
          case 1:
            return (
                <form style={{width:'25ch',paddingLeft:'20px'}} >
                 <TextField 
                  value={position} onChange={(e)=>{ 
                    // console.log('e',e.target.value);
                    setPosition(e.target.value)}}
                error={position===''}
                helperText={position === "" ? 'This Field is Required!' : ' '}
                 label="Position" variant="outlined"/>
                 <TextField
                  value={specialization} onChange={(e)=>{ 
                    // console.log('e',e.target.value);
                    setSpecialization(e.target.value)}}
                error={specialization===''}
                helperText={specialization === "" ? 'This Field is Required!' : ' '} 
                 label="Specialization" variant="outlined"/>
                </form>
    
            );
          case 2:
            return 'Please Check All Fields Before Submit!';
          default:
            return 'Unknown stepIndex';
        }
      }
 
      const submitRegisterForm=()=>{
       
      //  if(!name && email!=='' && phone_number!=='' && position !== '' && specialization!== ''){
        //  alert("132")
        dispatch(companyRegisterUsers.getCompanyregister( name,email,phone_number,position,specialization));
       


      //  }
     
      
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
              {activeStep === steps.length - 1 ? <Button variant="contained" color="primary" onClick={submitRegisterForm}>Finish</Button> :
                <Button variant="contained" color="primary" onClick={handleNext}>Next</Button> }
            </div>
          </div>
        )}
      </div>
    </div>
 
    </>
)

}


export default CompanyRegiter;