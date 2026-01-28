// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEVrWErpU3-wqM5xQo4rq6KXs9-6O0OrY",
  authDomain: "shopy-mart-97a85.firebaseapp.com",
  projectId: "shopy-mart-97a85",
  storageBucket: "shopy-mart-97a85.firebasestorage.app",
  messagingSenderId: "748410250816",
  appId: "1:748410250816:web:6b9bc1c74eac5588b921a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();