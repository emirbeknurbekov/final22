// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc8gAB9Di0HDMuUFrnG6GIE2jkmeW6fQw",
  authDomain: "krossbox-ed585.firebaseapp.com",
  projectId: "krossbox-ed585",
  storageBucket: "krossbox-ed585.appspot.com",
  messagingSenderId: "281631361840",
  appId: "1:281631361840:web:d32abd1d28e45433b156f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
