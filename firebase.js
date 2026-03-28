import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getDatabase,
  ref,
  set,
  update,
  onValue
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

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

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, update, onValue };
