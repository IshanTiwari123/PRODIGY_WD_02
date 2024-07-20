let ms = 0, s = 0, m = 0, h = 0;
let timer;

const display = document.querySelector(".timer-Display");
const laps = document.querySelector(".laps");

function start() {
    if (!timer) {
        timer = setInterval(run, 10);
    }
}

function run() {
    updateDisplay();
    ms++;
    if (ms === 100) {
        ms = 0;
        s++;
    }
    if (s === 60) {
        s = 0;
        m++;
    }
    if (m === 60) {
        m = 0;
        h++;
    }
}

function updateDisplay() {
    display.textContent = formatTime(h, m, s, ms);
}

function formatTime(hours, minutes, seconds, milliseconds) {
    return `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)} : ${pad(milliseconds)}`;
}

function pad(value) {
    return value.toString().padStart(2, '0');
}

function pause() {
    stopTimer();
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    stopTimer();
    ms = 0;
    s = 0;
    m = 0;
    h = 0;
    updateDisplay();
}

function restart() {
    reset();
    start();
}

function lap() {
    if (timer) {
        const lapTime = document.createElement("li");
        lapTime.textContent = formatTime(h, m, s, ms);
        laps.appendChild(lapTime);
    }
}

function resetLap() {
    laps.innerHTML = "";
}

// Initialize the display with 00:00:00:00
updateDisplay();
