// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpmIa6EfC13afrN9Wnv-NoTb3cEu53szE",
    authDomain: "apexprime-cb21b.firebaseapp.com",
    projectId: "apexprime-cb21b",
    storageBucket: "apexprime-cb21b.appspot.com",
    messagingSenderId: "331343178694",
    appId: "1:331343178694:web:b93a09f5ef31b32e58a0c7",
    measurementId: "G-S4M7SY5G8V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);