// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXBfpgCncdqt7te-e5RdUdbSoVcX-tzi8",
  authDomain: "product-makeup.firebaseapp.com",
  projectId: "product-makeup",
  storageBucket: "product-makeup.firebasestorage.app",
  messagingSenderId: "1020914549476",
  appId: "1:1020914549476:web:bc407d2b8db9228b6fa2f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
