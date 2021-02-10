import * as types from '../../types';




export function getregister(name,email,password,position,phone_number,specialization){
console.log('action',name,email,password);
    return{
        type: types.GET_USERS_REGISTER_REQUEST,
       name,
       email,
       password,
       position,
       phone_number,
       specialization
    }

    }


export function getRegisterRes(resData){
console.log('res',resData);
return{
    type: types.GET_USERS_REGISTER_SUCCESS,
    resData
}

}

export function getRegisterfailed(error){


return{
    type: types.GET_USERS_REGISTER_FAILED,
    error
}


}











