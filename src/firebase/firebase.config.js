// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJUEvtnKq6C-y2JHROBsciWWpGeKo8_F0",
  authDomain: "automotive-client.firebaseapp.com",
  projectId: "automotive-client",
  storageBucket: "automotive-client.appspot.com",
  messagingSenderId: "329797540651",
  appId: "1:329797540651:web:8bda21ddcb1f685360436e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

