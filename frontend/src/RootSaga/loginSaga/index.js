
import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../../ReduxStore/types';
import * as loginActions from '../../ReduxStore/actions/loginAction';


function loginUserApi(email, password) {
    
    return axios.post('http://localhost:5000/v1.0/login', {
      email,
      password,
      
      
    });
  }

function* loginAsync(action){

console.log('nb',action);
   try{
    console.log("sgag call")
       const res = yield call(loginUserApi,action.email, action.password);
       
        console.log('ee',res)

       yield put(loginActions.getLoginRes(res.data));
        yield put({ type: 'GET_LOGIN_USERS_SUCCESS', resData: res.data })
      //  yield put({type: 'GET_USERS_REGISTER', res})
      //  return res
      //  if(res.data.status=== true){
      //   history.push('/dashboard')
      //  }
   }catch(e){
     console.log('sagaerr',e);
    //   yield put (loginActions.getRegisterfailed(e))
   }
}




export function* loginSaga() {
    yield takeEvery(types.GET_LOGIN_USERS_REQUEST, loginAsync);
  }



















