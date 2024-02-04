// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDelf5wSdyZ4AST0quUmlvd-1JYovOzhKg",
  authDomain: "book-list-with-firbase.firebaseapp.com",
  projectId: "book-list-with-firbase",
  storageBucket: "book-list-with-firbase.appspot.com",
  messagingSenderId: "811620499384",
  appId: "1:811620499384:web:a3dca335642825d512594d",
  measurementId: "G-89C9B4CHNG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
