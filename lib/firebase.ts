// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrKyhC5Aw2vuFmHwfrQZUlaAjWmg8iQvM",
  authDomain: "tetteh-apotey-online.firebaseapp.com",
  projectId: "tetteh-apotey-online",
  storageBucket: "tetteh-apotey-online.firebasestorage.app",
  messagingSenderId: "1016977919156",
  appId: "1:1016977919156:web:a2d46c9f6117a1e6049be1",
  measurementId: "G-ED9J5WJW6Z"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);