
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaMsvzhfGvaioSqautlvf97ZYfjM5Wzx0",
  authDomain: "e-commerce-website-53b7d.firebaseapp.com",
  projectId: "e-commerce-website-53b7d",
  storageBucket: "e-commerce-website-53b7d.appspot.com",
  messagingSenderId: "780554044370",
  appId: "1:780554044370:web:9f5fc1f9b7690d080e3e0b",
  measurementId: "G-XTRHGTELV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const  auth = getAuth();
export const db = getFirestore(app);
export default analytics;