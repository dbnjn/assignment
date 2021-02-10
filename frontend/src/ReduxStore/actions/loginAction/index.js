import * as types from '../../types';




export function getLogin(email,password){
console.log('val',email,password)
    return{
        type: types.GET_LOGIN_USERS_REQUEST,
       email,
      password
      
    }

    }


export function getLoginRes(resData){
return{
    type: types.GET_LOGIN_USERS_SUCCESS,
    resData
}

}

export function getLoginfailed(error){


return{
    type: types.GET_LOGIN_USERS_FAILED,
    error
}


}











