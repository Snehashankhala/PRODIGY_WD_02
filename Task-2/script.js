let minutes = 0;
let seconds = 0;
let tens = 0;
let interval;

const appendMinutes = document.getElementById("minutes");
const appendSeconds = document.getElementById("seconds");
const appendTens = document.getElementById("tens");
const buttonStart = document.getElementById("start");
const buttonStop = document.getElementById("stop");
const buttonReset = document.getElementById("reset");
const buttonLaps = document.getElementById("laps");
const lapList = document.getElementById("lapList");

buttonStart.onclick = () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
};

buttonStop.onclick = () => {
  clearInterval(interval);
};

buttonReset.onclick = () => {
  clearInterval(interval);
  tens = 0;
  seconds = 0;
  minutes = 0;
  appendTens.textContent = "00";
  appendSeconds.textContent = "00";
  appendMinutes.textContent = "00";
  lapList.innerHTML = "";
};

buttonLaps.onclick = () => {
  const lapTime = `${appendMinutes.textContent}:${appendSeconds.textContent}:${appendTens.textContent}`;
  const li = document.createElement("li");
  li.textContent = "Lap " + (lapList.children.length + 1) + " → " + lapTime;
  lapList.appendChild(li);
};

function startTimer() {
  tens++;

  if (tens <= 9) appendTens.textContent = "0" + tens;
  if (tens > 9) appendTens.textContent = tens;
  if (tens > 99) {
    seconds++;
    appendSeconds.textContent = seconds < 10 ? "0" + seconds : seconds;
    tens = 0;
    appendTens.textContent = "00";
  }
  if (seconds > 59) {
    minutes++;
    appendMinutes.textContent = minutes < 10 ? "0" + minutes : minutes;
    seconds = 0;
    appendSeconds.textContent = "00";
  }
}
