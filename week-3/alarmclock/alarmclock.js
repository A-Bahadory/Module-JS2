//When you click the `Set Alarm` button the counter at the top of the screen should change to the number you entered in the `input` field.
// For example, if the`input` field says `10` then the title should say`Time Remaining: 00:10`.
function setAlarm() {
  let timeInput = document.getElementById("alarmSet").value;
  document.getElementById("timeRemaining").innerText =
    "Time Remaining: " + formatTime(timeInput);
  setTimeout(playAlarm, timeInput * 1000);
}

function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  remainingSeconds =
    remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;
  return minutes + ":" + remainingSeconds;
}
// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmSound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
