import { createSlice } from '@reduxjs/toolkit';
import { authSucces, startLoading, stopLoading } from './appReducer/AppReducer';
import {login, registration} from './../service/authService';

const initialState = {
    error: null
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setError:(state, {payload})=>{
            state.error = payload
        },
        clearError: state => {
            state.error = null
        }
    }
})

export default auth.reducer
export const {setError, clearError} = auth.actions
export const errorSelector = state =>state.auth.error

export function loginAction(email, password){
    return async dispatch =>{
        dispatch(startLoading())
        dispatch(clearError())
        try{
            await login(email, password);
            dispatch(authSucces())
        }catch(error){
            console.log(error)
            dispatch(setError(error.message))
        }finally{
            dispatch(stopLoading())
        }

    }
}

export function registartionAction(email, password){
    return async dispatch =>{
        dispatch(startLoading())
        dispatch(clearError())
        try{
            await registration(email, password);
            dispatch(authSucces())
        }catch(error){
            console.log(error)
            dispatch(setError(error.message))
        }finally{
            dispatch(stopLoading())
        }

    }
}