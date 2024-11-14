// src/lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAOcSe4t22zAQ4mBapqTtPlNQZTu1mU_yc",
  authDomain: "immo-express-8b134.firebaseapp.com",
  projectId: "immo-express-8b134",
  storageBucket: "immo-express-8b134.firebasestorage.app",
  messagingSenderId: "252123764536",
  appId: "1:252123764536:web:5fd0b97b1f83f4965713cd",
  measurementId: "G-267VFKKXQ9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
