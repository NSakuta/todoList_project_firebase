import {fb} from '../config/firebase-config'
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from 'firebase/auth';

const auth = getAuth(fb);

export async function login(email, password){
    try{
           
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log('response from sign in: ', response)
        localStorage.setItem('USER_ID', response.user.uid)

    }catch(error){
        console.log(error)
        await Promise.reject(error)
    }
}

export async function registration(email, password){
    try{
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response)
        localStorage.setItem('USER_ID', response.user.uid)

    }catch(error){
        console.log(error.message)
        await Promise.reject(error)
    }
}

export async function logout() {
    try {
        await signOut(auth)
        localStorage.removeItem('USER_ID')
    } catch(error) {
        console.log(error.message)
        await Promise.reject(error)
    }
}

