
import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../../ReduxStore/types';
import * as companyRegisterActions from '../../ReduxStore/actions/CompanyRegisterActions';


function registerCompanyApi(name,email,phone_number,position,specialization) {
   
    return axios.post('http://localhost:5000/v1.0/add-company', {
      name,
      email,
      phone_number,
      position,
      specialization
      
    });
  }

function* registerCompanyAsync(action){
   try{
    
       const res = yield call(registerCompanyApi, action.name,action.email,action.phone_number,action.position,action.specialization);
       
        console.log('ew',res)

       yield put(companyRegisterActions.getCompanyRegisterRes(res.data));
        yield put({ type: 'GET_LOGIN_COMPANY_SUCCESS', resData: res.data })
      //  yield put({type: 'GET_USERS_REGISTER', res})
      //  return res
      //  if(res.data.status=== true){
      //   history.push('/dashboard')
      //  }
   }catch(e){
     console.log('sagaerr',e);
    //   yield put (registerActions.getComoanyRegisterfailed(e))
   }
}




export function* companyRegisterSaga() {
    yield takeEvery(types.GET_LOGIN_COMPANY_REQUEST, registerCompanyAsync);
  }



















