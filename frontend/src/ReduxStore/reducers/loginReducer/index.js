import * as types from '../../types';


const initialState={
    email: '',
    password:'',
    resData: [],
    error: null,
    
  }

export const loginReducer=(state=initialState,action)=>{
console.log('action',action)
    switch(action.type){               
        case types.GET_LOGIN_USERS_REQUEST:
            return {
                ...state, 
               
                email: action.email,
                password: action.password,
              
            }
            case types.GET_LOGIN_USERS_SUCCESS:
               
                return{
                    ...state,
                    resData: action.resData
                }
            case  types.GET_LOGIN_USERS_FAILED:
               
                return{
                    ...state,
                    error: action.error
                }
            default:
                return state;
    }

}

