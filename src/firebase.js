// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC76dlgORQrnPOnRdIz90f2C86EvH9i3lA",
  authDomain: "react-todo-app-b1c25.firebaseapp.com",
  projectId: "react-todo-app-b1c25",
  storageBucket: "react-todo-app-b1c25.appspot.com",
  messagingSenderId: "115598504646",
  appId: "1:115598504646:web:a7c04c30a8c8ac0a86ddc7",
  measurementId: "G-CZJLPGZQ61",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
