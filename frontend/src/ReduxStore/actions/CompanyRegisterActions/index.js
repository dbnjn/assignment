import * as types from '../../types';




export function getCompanyregister(name,email,position,phone_number,specialization){

    return{
        type: types.GET_LOGIN_COMPANY_REQUEST,
       name,
       email,
       position,
       phone_number,
       specialization
    }

    }


export function getCompanyRegisterRes(resData){
return{
    type: types.GET_LOGIN_COMPANY_SUCCESS,
    resData
}

}

export function getComoanyRegisterfailed(error){


return{
    type: types.GET_LOGIN_COMPANY_FAILED,
    error
}


}











