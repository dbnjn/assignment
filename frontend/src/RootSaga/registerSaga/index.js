
import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../../ReduxStore/types';
import * as registerActions from '../../ReduxStore/actions/registerAction';


function registerUserApi(name,email, password,phone_number,position,specialization) {
    console.log("apiCall")
    return axios.post('http://localhost:5000/v1.0/register', {
      name,
      email,
      password,
      phone_number,
      position,
      specialization
      
    });
  }

function* registerAsync(action){

console.log('nb',action);
   try{
    console.log("sgag call")
       const res = yield call(registerUserApi, action.name,action.email, action.password,action.phone_number,action.position,action.specialization);
       
        console.log('ee',res)
        const newdata = JSON.stringify(res.data)

        localStorage.setItem("user", newdata);
       yield put(registerActions.getRegisterRes(res.data));
        yield put({ type: 'GET_USERS_REGISTER_SUCCESS', resData: res.data })
      //  yield put({type: 'GET_USERS_REGISTER', res})
      //  return res
      //  if(res.data.status=== true){
      //   history.push('/dashboard')
      //  }
   }catch(e){
     console.log('sagaerr',e);
      yield put (registerActions.getRegisterfailed(e))
   }
}




export function* registerSaga() {
    yield takeEvery(types.GET_USERS_REGISTER_REQUEST, registerAsync);
  }



















