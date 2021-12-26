//import firebase from 'firebase';
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBHsXfa0ROxKHBeouS5VlMd3vusJNaaG70",
    authDomain: "personaltodo-e5e6e.firebaseapp.com",
    projectId: "personaltodo-e5e6e",
    storageBucket: "personaltodo-e5e6e.appspot.com",
    messagingSenderId: "870594445034",
    appId: "1:870594445034:web:a4eb4d709126ba3bc8e193"
  };

export const fb = initializeApp(firebaseConfig)
export const db = getFirestore(fb)

