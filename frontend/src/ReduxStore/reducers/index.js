import {combineReducers} from 'redux'
// import users from './users';
import {registerReducer} from './registerReducer';
import {companyRegisterReducer} from './companyRegister';
import {loginReducer} from './loginReducer';




const rootReducer = combineReducers(
{registerReducer,companyRegisterReducer,loginReducer}
);

export default rootReducer;











