// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9u0q8Q2wosz2Wdi4fEO8yYLkj77kbKLs",
  authDomain: "coderhouse-ecommerce-ae393.firebaseapp.com",
  projectId: "coderhouse-ecommerce-ae393",
  storageBucket: "coderhouse-ecommerce-ae393.appspot.com",
  messagingSenderId: "212364698654",
  appId: "1:212364698654:web:0e81be514f2ab52e62ba0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//base de datos

export const db = getFirestore(app);