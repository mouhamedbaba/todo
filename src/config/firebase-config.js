// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHW4LW0xS7uw9-t7ZxlOkpsN_QBoEgsNg",
  authDomain: "todo-a6b4a.firebaseapp.com",
  projectId: "todo-a6b4a",
  storageBucket: "todo-a6b4a.appspot.com",
  messagingSenderId: "839265365692",
  appId: "1:839265365692:web:297c48a61f681992c3eab9",
  measurementId: "G-HJZFRWCE9L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);