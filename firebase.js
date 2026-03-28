import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set, update, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "YOUR KEY",
  authDomain: "YOUR DOMAIN",
  databaseURL: "YOUR DATABASE URL",
  projectId: "YOUR ID",
  storageBucket: "YOUR BUCKET",
  messagingSenderId: "YOUR SENDER",
  appId: "YOUR APP ID"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, update, onValue };
