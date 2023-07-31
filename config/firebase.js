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
    apiKey: "AIzaSyCJwQ-6Q75aob4psO7yjc_celHgRWBbkjw",
    authDomain: "autonome-a173e.firebaseapp.com",
    projectId: "autonome-a173e",
    storageBucket: "autonome-a173e.appspot.com",
    messagingSenderId: "828476560451",
    appId: "1:828476560451:web:74e2ad4100587f5f5030f6",
    measurementId: "G-Q9HXB5PV1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);

// export const dummyRef = collection(db, 'dummyRef')

export default app;