const numberEl = document.getElementById("number");
const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");

const number = parseInt(numberEl.innerHTML);

lengthEl.innerText =
  number +
  " meters = " +
  Math.round(number * 3.28084, 3) +
  " feet | " +
  number +
  " feet =" +
  Math.round(number * 0.3048, 3) +
  " meters";

volumeEl.innerText =
  number +
  " litres = " +
  Math.round(number * 0.26417, 3) +
  " gallons | " +
  number +
  " gallons =" +
  Math.round(number * 3.78541, 3) +
  " litres";

massEl.innerText =
  number +
  " kilos = " +
  Math.round(number * 2.20462, 3) +
  " pounds | " +
  number +
  " pounds =" +
  Math.round(number * 0.453592, 3) +
  " kilos";
