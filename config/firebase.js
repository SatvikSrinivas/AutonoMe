// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2V1MSpHAwEhYgVfb9eJkfiRl0DVXoBUc",
    authDomain: "autonome-482cb.firebaseapp.com",
    projectId: "autonome-482cb",
    storageBucket: "autonome-482cb.appspot.com",
    messagingSenderId: "887206492475",
    appId: "1:887206492475:web:37433db798460a0a205f1e",
    measurementId: "G-GDKVMT03DT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);

export const startTimeRef = collection(db, 'startTimeRef');
export const ratingsRef = collection(db, 'ratingsRef');

// export const dummyRef = collection(db, 'dummyRef')

export default app;