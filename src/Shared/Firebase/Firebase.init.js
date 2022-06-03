// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABk3vD5YT79U8sqqKiJHxaTT9g-8SHZdY",
  authDomain: "assesment-1-f6cb6.firebaseapp.com",
  projectId: "assesment-1-f6cb6",
  storageBucket: "assesment-1-f6cb6.appspot.com",
  messagingSenderId: "746663463747",
  appId: "1:746663463747:web:d7d8c301942f1a29cbfdf6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;