// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-d169f.firebaseapp.com",
  projectId: "mern-auth-d169f",
  storageBucket: "mern-auth-d169f.appspot.com",
  messagingSenderId: "1025056404486",
  appId: "1:1025056404486:web:30e2f3d4be0e5b36cc7f87",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
