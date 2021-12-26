//import AppActionType from './AppActionType'
import {createSlice} from '@reduxjs/toolkit'
import { logout } from './../../service/authService'

const initialState = {
    isLoading: false,
    auth:false
}

const appReducer = createSlice({
    name:'app',
    initialState,
    reducers:{
        startLoading: state =>{
            state.isLoading = true
        },
        stopLoading: state =>{
            state.isLoading = false
        },
        authSucces: state =>{
            state.auth = localStorage.getItem('USER_ID') !== null   
        },
        appLogout: state => {
            state.auth = false
        }
    }
})


export default appReducer.reducer;
export const {startLoading, stopLoading, authSucces, appLogout} = appReducer.actions;
export const appSelector = state => state.app;

export const logoutAction = () => {
    console.log('logout');
    return async dispatch => {
        startLoading();
        try {
            await logout()
            dispatch(appLogout())
        } catch(error) {
            console.log(error.message)
        } finally {
            dispatch(stopLoading())
        }
    }
}

// export const logoutAction = () => {
    
//     return dispatch => {
//         startLoading();
//         try {
//             logout()
//             dispatch(appLogout())
//         } catch(error) {
//             console.log(error.message)
//         } finally {
//             dispatch(stopLoading())
//         }
//     }
// }