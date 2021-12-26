import {db} from './../config/firebase-config'
import {doc, getDoc, setDoc, updateDoc, arrayUnion} from 'firebase/firestore';
import { async } from '@firebase/util';

export const addTodoItem = async(title, uid) => {
    try {
        const docRef = doc(db, 'todos', uid) /// 1. config, 2. имя коллекцииб 3. документ под таким id ---> на выходе ccылка на документ
        const docData = await getDoc(docRef) // если первый раз, то по ссылке ничего нет 
        if(docData.exists()) { /// ---> елси ссылка уже существует и там что то есть - true
            await updateDoc(docRef, {
                todos: arrayUnion({
                    title,
                    status: false
                })
            })
        } else {
            await setDoc(docRef, {todos: ({title, status: false})}) // если пустая ссылка-false, создаем с помощью setDoc /
        }

    } catch (e) {
        console.log(e.message)
    }
}

export const getAllTodos = async (uid) => {
    try {
        const docRef = doc(db, 'todos', uid) // стучимся по ссылке
        const docData = await getDoc(docRef)
            if(docData.exists()) {
                console.log('docdata from getAllTodos: ', docData.data())
                return docData.data();
            } 
            return {todos: []} // если ничего нет, то чтобы не прилетело undefined
    }catch(e) {
            console.log('error from getAllTodos: ', e.message)
    }
}

export const changeTodos = async (todos, uid)=>{
    try{
        const docRef = doc(db, 'todos', uid)
        await updateDoc(docRef, {todos:[...todos]})
    }catch(error){
        console.log(error)
    }
}

