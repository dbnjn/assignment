import {all} from 'redux-saga/effects';
// import  loginSaga from './Login/loginSaga';
 import {registerSaga} from './registerSaga';
import {companyRegisterSaga} from './CompanyRegisterSaga';
import {loginSaga} from './loginSaga';

export default function* watch(){

 yield all([registerSaga(),companyRegisterSaga(),loginSaga()]);


}
