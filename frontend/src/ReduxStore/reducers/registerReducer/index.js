import * as types from '../../types';


const initialState={

    name: '',
    email: '',
    password:'',
    phone_number:'',
    position:'',
    specialization:'',
    resData: [],
    error: null,
    
  }

export const registerReducer=(state=initialState,action)=>{

    switch(action.type){               
        case types.GET_USERS_REGISTER_REQUEST:
            return {
                ...state, 
                name:action.name,
                email: action.email,
                password: action.password,
                phone_number:action.phone_number,
                position:action.position,
                specialization: action.specialization
            }
            case types.GET_USERS_REGISTER_SUCCESS:
            
                return{
                    ...state,
                    resData: action.resData
                }
            case  types.GET_USERS_REGISTER_FAILED:
               
                return{
                    ...state,
                    error: action.error
                }
            default:
                return state;
    }

}

