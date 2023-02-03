// Write a short programme that, when given a date, calculates the age between the current date and the given date.

function getInput() {
  let input = -1;
  while (input === -1 || input === NaN) {
    if (input === NaN) {
      alert("Not a valid date, try again.");
    }
    input = prompt("Please give a date in the format YYYY-MM-DD:");
  }
  return input;
}

let currentDateTime = new Date();
let currentMsPassed = Date.parse(currentDateTime);
function calculateAge(date = getInput()) {
  //calculate milliseconds passed
  let msFromZero = Date.parse(date);
  let msFromNow = currentMsPassed - msFromZero;
  //convert to years
  let age = Math.floor(msFromNow / 1000 / 60 / 60 / 24 / 365);
  console.log("Age is: " + age);
  return age;
}

calculateAge();
