// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJcB8OwFZijZA617yhCwMMp4KrlsiVeaQ",
  authDomain: "chat-app-react-tailwind-7e2ae.firebaseapp.com",
  projectId: "chat-app-react-tailwind-7e2ae",
  storageBucket: "chat-app-react-tailwind-7e2ae.appspot.com",
  messagingSenderId: "607773750227",
  appId: "1:607773750227:web:cc279299d22c4f6fc33526"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);