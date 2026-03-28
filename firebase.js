// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsAwKJy63zW5ZQ4d7WLEK4Od3261AlpGo",
  authDomain: "ipl-match-streaming.firebaseapp.com",
  databaseURL: "https://ipl-match-streaming-default-rtdb.firebaseio.com",
  projectId: "ipl-match-streaming",
  storageBucket: "ipl-match-streaming.firebasestorage.app",
  messagingSenderId: "354233195229",
  appId: "1:354233195229:web:8dc281f9461da74c10d934",
  measurementId: "G-JC6BJ7EZRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
