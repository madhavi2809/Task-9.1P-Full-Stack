import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7Q76ybPvg3R0PMxdxbNKb7_LNaqOHZUk",
  authDomain: "fir-c195b.firebaseapp.com",
  projectId: "fir-c195b",
  storageBucket: "fir-c195b.appspot.com",
  messagingSenderId: "239156595773",
  appId: "1:239156595773:web:773e5c09af66e301d46e54",
  measurementId: "G-GXM9TM9394"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };