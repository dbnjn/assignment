import React from 'react'
import './index.css'
import {useHistory} from 'react-router-dom';


const LandingPage=()=>{


const history = useHistory();

const changePage=(url)=>{
history.push(url)
}

    return(
            <>
            <div className='landing_page_container'>
             <div className='landing_page_mainDiv'>
                 <div className='company_register_front'>
                   <h1>For Companies</h1>
                   <div onClick={()=>changePage('/company-register')} className='comp_button'>Register Here</div>
                 </div>
                 <div className='users_regLogin_front'>
                   <h1>For Job Seekers</h1>
                   <div onClick={()=>changePage('/user-register')}  className='user_button'>Register Now</div>
                 </div>
            </div>   

            </div>
            </>
    )
}


export default LandingPage;









