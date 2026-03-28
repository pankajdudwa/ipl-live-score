// overlay.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Firebase Config
const firebaseConfig = {
apiKey: "AIzaSyDsAwKJy63zW5ZQ4d7WLEK4Od3261AlpGo",
authDomain: "ipl-match-streaming.firebaseapp.com",
projectId: "ipl-match-streaming",
storageBucket: "ipl-match-streaming.appspot.com",
messagingSenderId: "354233195229",
appId: "1:354233195229:web:8dc281f9461da74c10d934",
databaseURL: "https://ipl-match-streaming-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Read Data
const matchRef = ref(database, "match");

onValue(matchRef, (snapshot) => {


const data = snapshot.val();

if (!data) return;

// Team Names
document.getElementById("team1Name").innerText = data.team1Name || "TEAM 1";
document.getElementById("team2Name").innerText = data.team2Name || "TEAM 2";

// Team Score
document.getElementById("team1Score").innerText =
    `${data.team1Score || 0}/${data.team1Wickets || 0} (${formatOvers(data.team1Balls || 0)})`;

document.getElementById("team2Score").innerText =
    `${data.team2Score || 0}/${data.team2Wickets || 0} (${formatOvers(data.team2Balls || 0)})`;

// Batsman
document.getElementById("batsman1").innerText = data.batsman1 || "Batsman 1";
document.getElementById("batsman2").innerText = data.batsman2 || "Batsman 2";

document.getElementById("batsman1Stats").innerText =
    `${data.batsman1Runs || 0}(${data.batsman1Balls || 0})`;

document.getElementById("batsman2Stats").innerText =
    `${data.batsman2Runs || 0}(${data.batsman2Balls || 0})`;

// Bowler
document.getElementById("bowler").innerText = data.bowler || "Bowler";

// Run Rate
document.getElementById("runRate").innerText = data.runRate || "0.00";

// Innings
document.getElementById("innings").innerText = data.innings || 1;

// Logos
if (data.team1Logo) {
    document.getElementById("team1Logo").src = data.team1Logo;
}

if (data.team2Logo) {
    document.getElementById("team2Logo").src = data.team2Logo;
}


});

// Format Overs
function formatOvers(balls) {
let over = Math.floor(balls / 6);
let ball = balls % 6;
return `${over}.${ball}`;
}
