let countdown = document.getElementById("countdown")
let form = document.getElementById("form")
let start = document.getElementById("start");
let stop = document.getElementById("stop")

let originalTime = 0
let timeLeft = 0

function msToTime(rawTime) {
  function pad(time, padding) {
    padding = 2;
    return ('00' + time).slice(-padding);
  }

  var ms = rawTime % 1000;
  rawTime = (rawTime - ms) / 1000;
  var s = rawTime % 60;
   rawTime = (rawTime - s) / 60;
  var mins = rawTime % 60;
  var hrs = (rawTime - mins) / 60;

  return pad(hrs) + ':' + pad(mins) + ':' + pad(s)
}

function getTime(hours, minutes, seconds) {
  const convertedHours = hours * 1000 * 60 * 60
  const convertedMinutes = minutes * 1000 * 60
  const convertedSeconds = seconds * 1000

  const totalTime = convertedHours + convertedMinutes + convertedSeconds

  return totalTime;
}

const countdownInterval = () => {
    timeLeft -= 1000;
    console.log(timeLeft) 

    const convertedTime = msToTime(timeLeft);    countdown.innerText = convertedTime;

    if (timeLeft <= 0) {
      clearInterval(interval);
      console.log("Done!");
    }
}

let interval;

function countDown() {
  interval = setInterval(countdownInterval, 1000)
  start.setAttribute("class", "hide");
  stop.setAttribute("class", "show");
}

function stopCountdown() {
  clearInterval(interval);
  stop.setAttribute("class", "hide");
  start.setAttribute("class", "show")
  console.log("Hello, Laverne.")
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const hours = form['hours'].value;
  const minutes = form['minutes'].value;
  const seconds = form['seconds'].value;

  const ms = getTime(hours, minutes, seconds);
  timeLeft = 0
  timeLeft += ms
  originalTime = 0
  originalTime += ms
  console.log(timeLeft)

  const convertedTime = msToTime(ms);

  start.setAttribute("class", "show")
  countdown.innerText = convertedTime;
});

