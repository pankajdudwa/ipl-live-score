// script.js

import { database, ref, set, update } from "./firebase.js";

// Match Variables
let team1Score = 0;
let team1Wickets = 0;
let team1Balls = 0;

let team2Score = 0;
let team2Wickets = 0;
let team2Balls = 0;

let currentInnings = 1;

let batsman1Runs = 0;
let batsman1Balls = 0;

let batsman2Runs = 0;
let batsman2Balls = 0;

let bowlerRuns = 0;
let bowlerBalls = 0;
let bowlerWickets = 0;

// Timer
let seconds = 0;

setInterval(() => {
seconds++;


let min = Math.floor(seconds / 60);
let sec = seconds % 60;

document.getElementById("timer").innerText =
    `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;

updateFirebase();


}, 1000);

// Run Rate Calculation
function calculateRunRate(score, balls) {
if (balls === 0) return 0;
return (score / (balls / 6)).toFixed(2);
}

// Update Firebase
function updateFirebase() {

```
const data = {

    team1Name: document.getElementById("team1Name").value,
    team2Name: document.getElementById("team2Name").value,

    team1Score,
    team1Wickets,
    team1Balls,

    team2Score,
    team2Wickets,
    team2Balls,

    batsman1: document.getElementById("batsman1").value,
    batsman2: document.getElementById("batsman2").value,
    bowler: document.getElementById("bowler").value,

    batsman1Runs,
    batsman1Balls,

    batsman2Runs,
    batsman2Balls,

    bowlerRuns,
    bowlerBalls,
    bowlerWickets,

    runRate:
        currentInnings === 1
            ? calculateRunRate(team1Score, team1Balls)
            : calculateRunRate(team2Score, team2Balls),

    innings: currentInnings
};

set(ref(database, "match"), data);
```

}

// Add Runs
window.addRun = function (runs) {

```
if (currentInnings === 1) {
    team1Score += runs;
    team1Balls++;

    document.getElementById("score1").innerText = team1Score;
    document.getElementById("overs1").innerText = formatOvers(team1Balls);

} else {
    team2Score += runs;
    team2Balls++;

    document.getElementById("score2").innerText = team2Score;
    document.getElementById("overs2").innerText = formatOvers(team2Balls);
}

// Batsman stats
batsman1Runs += runs;
batsman1Balls++;

// Bowler stats
bowlerRuns += runs;
bowlerBalls++;

// Strike change
if (runs === 1 || runs === 3) {
    switchStrike();
}

checkOverComplete();
updateRunRate();
updateFirebase();
```

};

// Dot Ball
window.dotBall = function () {

```
if (currentInnings === 1) {
    team1Balls++;
    document.getElementById("overs1").innerText = formatOvers(team1Balls);
} else {
    team2Balls++;
    document.getElementById("overs2").innerText = formatOvers(team2Balls);
}

batsman1Balls++;
bowlerBalls++;

checkOverComplete();
updateRunRate();
updateFirebase();
```

};

// Wide Ball
window.wideBall = function () {

```
if (currentInnings === 1) {
    team1Score += 1;
    document.getElementById("score1").innerText = team1Score;
} else {
    team2Score += 1;
    document.getElementById("score2").innerText = team2Score;
}

bowlerRuns += 1;

updateRunRate();
updateFirebase();
```

};

// No Ball
window.noBall = function () {

```
if (currentInnings === 1) {
    team1Score += 1;
    document.getElementById("score1").innerText = team1Score;
} else {
    team2Score += 1;
    document.getElementById("score2").innerText = team2Score;
}

bowlerRuns += 1;

updateRunRate();
updateFirebase();
```

};

// Wicket
window.wicket = function () {

```
if (currentInnings === 1) {
    team1Wickets++;
    team1Balls++;

    document.getElementById("wickets1").innerText = team1Wickets;
    document.getElementById("overs1").innerText = formatOvers(team1Balls);

} else {
    team2Wickets++;
    team2Balls++;

    document.getElementById("wickets2").innerText = team2Wickets;
    document.getElementById("overs2").innerText = formatOvers(team2Balls);
}

batsman1Balls++;
bowlerBalls++;
bowlerWickets++;

document.getElementById("batsman1").value = "";
batsman1Runs = 0;
batsman1Balls = 0;

checkOverComplete();
updateRunRate();
updateFirebase();
```

};

// Format Overs
function formatOvers(balls) {
let over = Math.floor(balls / 6);
let ball = balls % 6;
return `${over}.${ball}`;
}

// Strike Switch
function switchStrike() {

```
let tempName = document.getElementById("batsman1").value;
document.getElementById("batsman1").value =
    document.getElementById("batsman2").value;
document.getElementById("batsman2").value = tempName;

let tempRuns = batsman1Runs;
batsman1Runs = batsman2Runs;
batsman2Runs = tempRuns;

let tempBalls = batsman1Balls;
batsman1Balls = batsman2Balls;
batsman2Balls = tempBalls;
```

}

// Over Complete
function checkOverComplete() {

```
let balls = currentInnings === 1 ? team1Balls : team2Balls;

if (balls % 6 === 0) {
    switchStrike();
}
```

}

// Run Rate Update
function updateRunRate() {

```
let rr;

if (currentInnings === 1) {
    rr = calculateRunRate(team1Score, team1Balls);
} else {
    rr = calculateRunRate(team2Score, team2Balls);
}

document.getElementById("runRate").innerText = rr;
```

}

// Switch Innings
window.switchInnings = function () {

```
currentInnings = currentInnings === 1 ? 2 : 1;

alert("Innings Switched");

updateFirebase();
```

};

// Reset Match
window.resetMatch = function () {

```
location.reload();
```

};

// Logo Upload
document.getElementById("team1Logo").addEventListener("change", function () {

```
const file = this.files[0];
const reader = new FileReader();

reader.onload = function () {
    update(ref(database, "match"), {
        team1Logo: reader.result
    });
};

reader.readAsDataURL(file);
```

});

document.getElementById("team2Logo").addEventListener("change", function () {

```
const file = this.files[0];
const reader = new FileReader();

reader.onload = function () {
    update(ref(database, "match"), {
        team2Logo: reader.result
    });
};

reader.readAsDataURL(file);
```

});
