import * as types from '../../types';


const initState={

    name: '',
    email: '',
    phone_number:'',
    position:'',
    specialization:'',
    resData: [],
    error: null,
    
  }

export const companyRegisterReducer=(state=initState,action)=>{

    switch(action.type){               
        case types.GET_LOGIN_COMPANY_REQUEST:
            return {
                ...state, 
                name:action.name,
                email: action.email,
                phone_number:action.phone_number,
                position:action.position,
                specialization: action.specialization
            }
            case types.GET_LOGIN_COMPANY_SUCCESS:
                
                return{
                    ...state,
                    resData: action.resData
                }
            case  types.GET_LOGIN_COMPANY_FAILED:
               
                return{
                    ...state,
                    error: action.error
                }
            default:
                return state;
    }

}

