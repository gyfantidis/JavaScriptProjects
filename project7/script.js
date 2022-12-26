window.addEventListener("load", calculateTime);

function calculateTime() {
  let date = new Date();
  let dayNumber = date.getDay();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hour >= 12 ? "PM" : "AM";

  let dayNames = [
    "Sunday",
    "Monday",
    "Tuersday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  hour = hour % 12;
  hour = hour == 0 ? 12 : hour;
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  console.log(date);
  console.log(dayNames[dayNumber]);
  console.log(dayNumber);
  console.log(hour);
  console.log(minute);
  console.log(ampm);

  document.getElementById("day").innerHTML = dayNames[dayNumber];
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("second").innerHTML = seconds;
  document.getElementById("ampm").innerHTML = ampm;

  setTimeout(calculateTime, 1000);
}
