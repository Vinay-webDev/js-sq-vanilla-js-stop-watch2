// variables and functions that we need!

const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        //console.log(startTime);
        timer = setInterval(update, 10);
        console.log(timer);
    }
}

function stop() {

}

function restart() {

}

function update() {

}


















