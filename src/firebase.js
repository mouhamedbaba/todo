// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvKvJCf1vgH3c3fZxu6vPpOyUWVVI2bY4",
  authDomain: "todo-f690f.firebaseapp.com",
  projectId: "todo-f690f",
  storageBucket: "todo-f690f.appspot.com",
  messagingSenderId: "194064625135",
  appId: "1:194064625135:web:f247dc215f993df6a01a1a",
  measurementId: "G-S8LSBMKPKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);