const endDate = new Date("4 oct, 2024 14:29:00").getTime();
const startDate = new Date().getTime();

let x = setInterval(function updateTimer() {
  const now = new Date().getTime();

  const distanceCovered = now - startDate;
  const distancePending = endDate - now;

  if (distancePending < 0) {
    clearInterval(x);
    document.querySelector(".countdown").innerHTML = "EXPIRED";
    document.getElementById("progress-bar").style.width = "100%";
    return;
  }

  // Time unit calculations
  const day = 24 * 60 * 60 * 1000;
  const hour = 60 * 60 * 1000;
  const min = 60 * 1000;
  const sec = 1000;

  const days = Math.floor(distancePending / day);
  const hours = Math.floor((distancePending % day) / hour);
  const mins = Math.floor((distancePending % hour) / min);
  const secs = Math.floor((distancePending % min) / sec);

  // Populate the countdown in HTML
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("mins").innerText = mins;
  document.getElementById("secs").innerText = secs;

  // Calculate the width percentage for the progress bar
  const totalDistance = endDate - startDate;
  const percentage = (distanceCovered / totalDistance)*100;
  document.getElementById("progress-bar").style.width = percentage+ "%";
}, 1000);
