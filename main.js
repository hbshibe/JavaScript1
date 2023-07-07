const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let startTime;
let timerInterval;

function updateTimer() {
  const elapsedTime = Date.now() - startTime;
  const time = new Date(elapsedTime);
  const hours = time.getUTCHours();
  const minutes = time.getUTCMinutes();
  const seconds = time.getUTCSeconds();
  const milliseconds = Math.floor(time.getUTCMilliseconds() / 100);
  const timeString = `${hours}:${minutes}:${seconds}:${milliseconds}`;

  timerElement.textContent = timeString;
}

function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 10);
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = false;
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  startButton.disabled = false;
  stopButton.disabled = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timerElement.textContent = '0:0:0:0';
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
  startTime = null;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
