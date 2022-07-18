
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBUUvzUVpgyOie_zQABR4QcR0qmTPfioQM",
  authDomain: "todolist-proj-1cb86.firebaseapp.com",
  projectId: "todolist-proj-1cb86",
  storageBucket: "todolist-proj-1cb86.appspot.com",
  messagingSenderId: "1022470997347",
  appId: "1:1022470997347:web:6783c784d4389206093f56",
  measurementId: "G-XD1T8ECLXY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {auth};